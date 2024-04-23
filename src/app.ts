import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

// Load environment variables from .env file
dotenv.config();

// Create the Express app
const app = express();

// Enable CORS
app.use(cors());

export default app;
