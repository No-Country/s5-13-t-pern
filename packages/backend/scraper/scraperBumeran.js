const puppeteer = require('puppeteer');
//const fs = require('fs');
//const crypto = require('crypto');
const { saveJobs } = require('../controllers/job.controller');

const busquedaBumeran = async (search, location = '') => {
  console.log(`Searching for ${search} in Bumeran`);
  let stop = 0;
  while (stop < 1) {
    const browser = await puppeteer.launch({
      headless: true,
      timeout: 0,
      //defaultViewport: false,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
      //executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
      //dumpio: true
    });
    var url = 'https://www.bumeran.com.ve/empleos-busqueda-' + search + '.html';

    const page = await browser.newPage();
    await page.setDefaultNavigationTimeout(0);

    await page.goto(url, {
      waitUntil: 'load',
      // Remove the timeout
      timeout: 0,
    });
    // Buscar en la pagina principal la lista de los trabajos
    const productHandles = await page.$$(`[id="listado-avisos"] > div`);

    let items = [];
    let listLinks = [];
    // loop por la pagina para guardar los titulos del trabajo y el link
    for (const productHandle of productHandles) {
      let name = 'Null';
      let company = 'Null';
      let location ='Venezuela';
      let type = 'Null';
      let links = 'Null';
      let description = 'Null';
      let source = 'Bumeran'

      // pass the single handle below

      try {
        name = await page.evaluate(
          (el) => el.querySelector('h2').textContent,
          productHandle
        );
      } catch (error) { }

      try {
        company = await page.evaluate(
          (el) => el.querySelector('h3').textContent,
          productHandle
        );
      } catch (error) { }

      try {
        location = await page.evaluate(
          (el) =>
            el.querySelector(
              'a > div > div:nth-child(2) > div > div:nth-child(1) > h3'
            ).textContent,
          productHandle
        );
      } catch (error) { }

      try {
        type = await page.evaluate(
          (el) =>
            el.querySelector(
              'a > div > div:nth-child(2) > div > div:nth-child(2) > h3'
            ).textContent,
          productHandle
        );
      } catch (error) { }

      try {
        const link = await page.evaluate(
          (el) => el.querySelector('a').getAttribute('href'),
          productHandle
        );
        links = 'https://www.bumeran.com.ve' + link;
      } catch (error) { }

      //entrar a los links y extraer la descripcion
      console.log("getting description of -----> " + links)
      const browserDesc = await puppeteer.launch({
        headless: true,
        timeout: 0,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        //defaultViewport: false,
        //dumpio: true
      });
      const pageDesc = await browserDesc.newPage();
      await pageDesc.setDefaultNavigationTimeout(0);
      try {
        if (links == 'Null') {
          description = 'Null';
        } else {
          pageDesc.goto(links, {
            //waitUntil: 'load',
            // Remove the timeout
            //timeout: 0,
          });
          const resultsSelector = `[id="section-detalle"] > div:nth-child(2)`;
          await pageDesc.waitForSelector(resultsSelector);
          // Extract the results from the pageDesc.
          description = await pageDesc.evaluate((resultsSelector) => {
            return [...document.querySelectorAll(resultsSelector)].map(
              (anchor) => {
                const name = anchor.textContent.split('|')[0].trim();
                return `${name}`;
              }
            );
          }, resultsSelector);
          description = description[0];
        }
      } catch (error) { }
      console.log("saving Job")
      if (name == 'Null') {
        continue;
      } else {

        items.push({ name, company, location, type, links, description, source });
        listLinks.push(links);
        browserDesc.close()
        console.log("next")
      }
    }
    console.log(items.name)
    browser.close();

    saveJobs(listLinks, items);
    console.log('Jobs saved');
    // // Validar si la carpeta data existe, si no la crea.
    // const dir = fs.existsSync('./data')
    // if (!dir) fs.mkdirSync('./data');

    // // Escribir la informacion en archivos .json dentro de la carpeta data.
    // try {
    //     fs.appendFileSync(`./data/links_${search.replace(' ', '_')}_${crypto.randomUUID()}_${new Date().getTime()}.json`, JSON.stringify(listLinks));
    // } catch (error) {
    //     console.log(error.message)
    // }

    // try {
    //     fs.appendFileSync(`./data/ofertas_${search.replace(' ', '_')}_${crypto.randomUUID()}_${new Date().getTime()}.json`, JSON.stringify(items));
    //     console.log('saved')
    // } catch (error) {
    //     console.log(error.message)
    // }
    stop++;
  }
  console.log('Busqueda Finalizada');
  // process.exit(13)//fix this
};

module.exports = { busquedaBumeran };
//busquedaBumeran('backend', '')