import dotenv from 'dotenv';

dotenv.config();

const config = {
  fastify: {
    port: Number(process.env.FASTIFY_PORT) || 3030,
    host: process.env.HOST || '0.0.0.0',
  },
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
    credentials: true,
  },
};

export default config;
