import { createConnection, ConnectionOptions, getConnectionOptions } from 'typeorm';

export const connectDatabase = async () => {
  try {
    const connectionOptions: ConnectionOptions = {
      type: process.env.DB_DIALECT as any || 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: process.env.DB_PORT? parseInt(process.env.DB_PORT) : 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'my_database',
      entities: [
          
      ],
      synchronize: true,
      logging: true
    };

    await createConnection(connectionOptions);

    console.log('Connected to the database');
    return true;
  } catch (error) {
    console.error('Database connection error:', error);
  }
};
