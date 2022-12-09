const dotenv = require('dotenv');

const { app } = require('./app');

// Utils
const { initModels } = require('./models/initModels');
const { jobsRouter } = require('./routes/job.routes');
const { cronJobScrapper } = require('./scraper');
const { busqueda } = require('./scraper/scraperComputrabajo');
const { db } = require('./utils/database.util');


dotenv.config({ path: './config.env' });

const startServer = async () => {
  try {
    await db.authenticate();

    // Establish the relations between models
    initModels();

    await db.sync();
    await db.sync({force: true})

    // Set server to listen
    const PORT = 4000;

    app.listen(process.env.PORT || PORT, () => {
      cronJobScrapper()
      console.log('Express app running!');   
    });

  } catch (error) {
    console.log("Error at Server Starting");
  }
};

startServer();
