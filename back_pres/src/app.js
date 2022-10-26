import express from 'express';

import projectRoutes from './routes/users.routes.js';
import budgetRoutes from './routes/budget.routes.js';

const app = express();

// Middlewares.
app.use(express.json());

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// Routes.
app.use(projectRoutes);
app.use(budgetRoutes);

export default app;