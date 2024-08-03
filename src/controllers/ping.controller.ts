import { FastifyInstance } from 'fastify';
import pingSchema from '../schema/ping.schema';
import pingService from '../services/ping.service';

const pingController = async (fastify: FastifyInstance) => {
  fastify.get('/', { schema: pingSchema }, pingService);
};

export default pingController;
