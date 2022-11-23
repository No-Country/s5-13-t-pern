const crypto  = require("crypto");
const puppeteer = require('puppeteer');
const fs = require('fs');


function waitFor(miliseconds) {
    return new Promise((resolve) => setTimeout(resolve, miliseconds));
}

const busqueda = async (search, location = '') => {
    const browser = await puppeteer.launch({ headless: true, timeout: 0 });
    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);
    page.header

    await page.goto('https://co.computrabajo.com/');

    await page.type('#prof-cat-search-input', search);
    await page.type('#place-search-input', location);
    await page.click('#search-button');

    // Extraer todos los links de las ofertas de trabajo disponibles para la busqueda.
    let listLinks = [];
    let count = 0;
    let reset = 0;
    while (true) {
        if (reset >= 130) {
            const client = await page.target().createCDPSession();
            await client.send('Network.clearBrowserCookies');
            await client.send('Network.clearBrowserCache');
            reset = 0;
        }
        reset++;
        count++;
        await page.waitForSelector('article div h1 .js-o-link', { timeout: 0 });
        await waitFor(500);
        let button = await page.evaluate(() => {
            const bg = document.querySelector('#pop-up-webpush-background');
            return bg?.style?.cssText?.includes('display: flex');
        });
        if (button) {
            console.log(button)
            await page.click('#pop-up-webpush-sub div div>button');
        }

        const tmpListLinks = await page.evaluate(() => {
            const list = [];
            const links = document.querySelectorAll('article div h1 .js-o-link');
            for (let key of Object.keys(links)) {
                list.push(links[key].href);
            }
            return list;
        })
        listLinks = [...listLinks, ...tmpListLinks];


        try {
            await waitFor(500);
            await page.click('[title=Siguiente]');
        } catch (e) {
            break;
        }
    }

    // Ingresar a cada uno de los links de las ofertas y extraer la informacion necesaria.
    const info = [];
    for (let link of listLinks) {
        if (reset >= 130) {
            const client = await page.target().createCDPSession();
            await client.send('Network.clearBrowserCookies');
            await client.send('Network.clearBrowserCache');
            reset = 0;
        }
        reset++;
        await page.goto(link);
        await page.waitForSelector('h1.box_detail', { timeout: 0 });

        const tempInfo = await page.evaluate(() => {
            const name = document.querySelector('h1.box_detail')?.innerText || '';
            const company = document.querySelector('a.dIB')?.innerText || '';
            const location = document.querySelector('.box_resume .box_border [class=fs16]')?.innerText || '';

            const contract = [];
            const tempContract = document.querySelectorAll('span.tag.base');
            for (let value of tempContract) {
                contract.push(value?.innerText || '');
            }

            const desc = document.querySelector('[div-link="oferta"] p.mbB').innerHTML;

            return {
                name,
                company,
                location,
                contract,
                description: desc
            }
        });

        info.push(tempInfo);

    }

    // Validar si la carpeta data existe, si no la crea.
    const dir = fs.existsSync('./data')
    if (!dir) fs.mkdirSync('./data');


    // Escribir la informacion en archivos .json dentro de la carpeta data.
    try {
        fs.appendFileSync(`./data/links_${search.replace(' ', '_')}_${crypto.randomUUID()}_${new Date().getTime()}.json`, JSON.stringify(listLinks));
    } catch (error) {
        console.log(error.message)
    }

    try {
        fs.appendFileSync(`./data/ofertas_${search.replace(' ', '_')}_${crypto.randomUUID()}_${new Date().getTime()}.json`, JSON.stringify(info));
    } catch (error) {
        console.log(error.message)
    }

    await browser.close()
};


// busqueda('desarrollador frontend', '');// 141
// busqueda('desarrollador trainee', ''); // 92
// busqueda('desarrollador junior', '');
// busqueda('desarrollador backend', '');
busqueda('desarrollador backend trainee', ''); //18
// busqueda('desarrollador', '');
