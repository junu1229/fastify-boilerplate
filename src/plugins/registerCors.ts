import { FastifyInstance } from 'fastify';
import config from '../config';
import fastifyCors from '@fastify/cors';

const registerCors = async (app: FastifyInstance) => {
  try {
    await app.register(fastifyCors, config.cors);
  } catch (error) {
    app.log.error('Failed to register CORS plugin:', error);
  }
};

export default registerCors;
