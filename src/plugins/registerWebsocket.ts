import { FastifyInstance } from 'fastify';
import { fastifyWebsocket } from '@fastify/websocket';

const registerWebsocket = async (app: FastifyInstance) => {
  await app.register(fastifyWebsocket);
};

export default registerWebsocket;
