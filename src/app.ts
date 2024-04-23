import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

// Load environment variables from .env file
dotenv.config();

import sequelize from './database/database';
import rootRoutes from './routes/rootRoutes';
import userRouters from './routes/user/userRoutes';

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

// Use body-parser middleware
app.use(bodyParser.json());

// Use the routes
app.use('/', rootRoutes);
app.use('/user', userRouters);

// Test database connection
sequelize.authenticate()
   .then(() => {
      console.log('Database connection established successfully.');
   })
   .catch((err) => {
      console.error('Unable to connect to the database:', err);
   });

// Sync Sequelize models with the database
sequelize.sync({ alter: true });

export default app;
