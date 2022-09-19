import express from 'express';

import projectRoutes from './routes/users.routes.js';

const app = express();

// Middlewares.
app.use(express.json());

// Routes.
app.use(projectRoutes);

export default app;