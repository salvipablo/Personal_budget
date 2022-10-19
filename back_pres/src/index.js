import app from './app.js';
import { sequelize } from './database/database.js';

// En la primera ejecucion se deben habilitar estas dos lineas.
// import './models/Users.js';
// import './models/Budget.js';

import { PORT } from './config.js';

async function main() {
  try {
    // En la primera ejecucion poner en true.
    await sequelize.sync({ force: false });
    console.log('Connection has been established successfully.');

    app.listen(PORT);
    console.log(`Server listening on port: ${PORT}`);
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

main();