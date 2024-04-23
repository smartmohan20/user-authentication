import express from 'express';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create the Express app
const app = express();

export default app;
