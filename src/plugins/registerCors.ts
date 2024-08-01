import { FastifyInstance } from 'fastify';
import config from '../config';

const registerCors = async (app: FastifyInstance) => {
  await app.register(require('@fastify/cors'), config.cors);
};

export default registerCors;
