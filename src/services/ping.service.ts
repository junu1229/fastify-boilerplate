import { FastifyReply, FastifyRequest } from 'fastify';

const pingService = (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.code(200).send({
      success: true,
      message: 'pong',
    });
  } catch (e: unknown) {
    reply.log.error('Ping Error:', e);
    reply.code(500).send({
      success: false,
      message: 'Internal Server Error',
    });
  }
};

export default pingService;
