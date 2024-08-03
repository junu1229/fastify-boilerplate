import { FastifyInstance } from 'fastify';
import healthCheckController from '../middleware/healthCheck';
import pingController from '../controllers/ping.controller';
import websocketController from '../controllers/websocket.controller';

const router = (fastify: FastifyInstance) => {
  try {
    fastify.register(healthCheckController, { prefix: '/healthCheck' });
    fastify.register(pingController, { prefix: '/ping' });
    fastify.register(websocketController, { prefix: '/websocket' });
  } catch (error) {
    fastify.log.error('Error registering routes:', error);
  }
};

export default router;
