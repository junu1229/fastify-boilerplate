import { FastifyInstance } from 'fastify';
import pingSchema from '../schema/ping.schema';
import pingService from '../services/ping.service';

const ping = async (fastify: FastifyInstance) => {
  fastify.get('/', pingSchema, pingService);
};

export default ping;
