import { FastifyInstance } from 'fastify';
import healthCheckService from '../services/healthCheck.service';
import healthCheckSchema from '../schema/healthCheck.schema';

const healthCheck = async (fastify: FastifyInstance) => {
  fastify.get('/', healthCheckSchema, healthCheckService);
};

export default healthCheck;