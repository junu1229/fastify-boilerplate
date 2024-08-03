import { FastifyReply, FastifyRequest } from 'fastify';

const healthCheckService = (_request: FastifyRequest, reply: FastifyReply) => {
  reply.log.info('Health check performed');

  reply.code(200).send({
    success: true,
    message: 'service is running...',
    timestamp: new Date().toUTCString(),
  });
};

export default healthCheckService;
