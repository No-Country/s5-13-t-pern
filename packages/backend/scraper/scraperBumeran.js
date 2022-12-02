const puppeteer = require('puppeteer');
const fs = require('fs');
const crypto = require("crypto");

const busqueda = async (search, location = '') => {
    let stop = 0;
    while (stop < 1) {
        const browser = await puppeteer.launch({
            headless: true,
            defaultViewport: false,
            //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
            //dumpio: true
        })
        var url = 'https://www.bumeran.com.ve/empleos-busqueda-' + search + '.html';

        const page = await browser.newPage()
        await page.goto(url)
        // Buscar en la pagina principal la lista de los trabajos
        const productHandles = await page.$$(`[id="listado-avisos"] > div`);

        let items = [];
        let listLinks = [];
        // loop por la pagina para guardar los titulos del trabajo y el link
        for (const productHandle of productHandles) {
            let title = 'Null'
            let company = 'Null'
            let site = 'Null'
            let type = 'Null'
            let links = 'Null'
            let description = 'Null'

            // pass the single handle below

            try {
                title = await page.evaluate(el => el.querySelector("h2").textContent, productHandle);
            } catch (error) { }

            try {
                company = await page.evaluate(el => el.querySelector("h3").textContent, productHandle);
            } catch (error) { }

            try {
                site = await page.evaluate(el => el.querySelector("a > div > div:nth-child(2) > div > div:nth-child(1) > h3").textContent, productHandle);
            } catch (error) { }

            try {
                type = await page.evaluate(el => el.querySelector("a > div > div:nth-child(2) > div > div:nth-child(2) > h3").textContent, productHandle);
            } catch (error) { }

            try {
                const link = await page.evaluate(el => el.querySelector("a").getAttribute('href'), productHandle);
                links = 'https://www.bumeran.com.ve' + link
            } catch (error) { }

            //entrar a los links y extraer la descripcion

            const browserDesc = await puppeteer.launch({
                headless: true,
                defaultViewport: false,
                //dumpio: true
            })
            const pageDesc = await browserDesc.newPage()

            try {
                if (links == 'Null') {
                    description = 'Null'
                } else {
                    pageDesc.goto(links)
                    const resultsSelector = `[id="section-detalle"] > div:nth-child(2)`;
                    await pageDesc.waitForSelector(resultsSelector);
                    // Extract the results from the pageDesc.
                    description = await pageDesc.evaluate(resultsSelector => {
                        return [...document.querySelectorAll(resultsSelector)].map(anchor => {
                            const title = anchor.textContent.split('|')[0].trim();
                            return `${title}`;
                        });
                    }, resultsSelector);
                }
            } catch (error) { }

            if (title == 'Null') {
                continue
            } else {
                items.push({ title, company, site, type, links, description })
                listLinks.push(links)
            }
        }

        browser.close();
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
            fs.appendFileSync(`./data/ofertas_${search.replace(' ', '_')}_${crypto.randomUUID()}_${new Date().getTime()}.json`, JSON.stringify(items));
            console.log('saved')
        } catch (error) {
            console.log(error.message)
        }
        stop++;
    }
    console.log('finish')
    process.exit(13)//fix this
};

busqueda('backend', '')