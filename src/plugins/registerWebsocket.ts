import { FastifyInstance } from 'fastify';
import { fastifyWebsocket } from '@fastify/websocket';

const registerWebsocket = async (app: FastifyInstance) => {
  try {
    await app.register(fastifyWebsocket);
  } catch (error) {
    app.log.error('Failed to register WebSocket plugin:', error);
  }
};

export default registerWebsocket;
