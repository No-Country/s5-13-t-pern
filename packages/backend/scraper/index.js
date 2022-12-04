const cron = require('cron');
const { busqueda } = require('./scraperComputrabajo');

const task1 = new cron.CronJob('30,40,50 10,10,10 1-31 0-11 0-6', () => {
    busqueda('desarrollador backend trainee', '');
    console.log('Ejecutando...');
    console.log(new Date().toLocaleString())
},
null,
true);

// busqueda('desarrollador frontend', '');// 141
// busqueda('desarrollador trainee', ''); // 92
// busqueda('desarrollador junior', '');
// busqueda('desarrollador backend', '');
//busqueda('desarrollador backend trainee', ''); //18
// busqueda('desarrollador', '');

