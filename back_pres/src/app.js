import express from 'express';

import projectRoutes from './routes/users.routes.js';
import budgetRoutes from './routes/budget.routes.js';

const app = express();

// Middlewares.
app.use(express.json());

// Routes.
app.use(projectRoutes);
app.use(budgetRoutes);

export default app;