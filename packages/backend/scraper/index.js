const cron = require('cron');
const { busqueda } = require('./scraperComputrabajo');

const cronJobScrapper = () =>{ new cron.CronJob('13,40,50 20,10,10 1-31 0-11 0-6', () => {
    busqueda('desarrollador backend trainee', '');
    // busqueda('desarrollador frontend', '');
    // busqueda('desarrollador trainee', '');
    // busqueda('desarrollador junior', '');
    // busqueda('desarrollador backend', '');
    // busqueda('desarrollador backend trainee', '');
    // busqueda('desarrollador', '');

    console.log('Ejecutando...');
    console.log(new Date().toLocaleString())
},
null,
true);
}


module.exports = { cronJobScrapper }