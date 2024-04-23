import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

import rootRoutes from './routes/rootRoutes';

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Use the routes
app.use('/', rootRoutes);

export default app;
