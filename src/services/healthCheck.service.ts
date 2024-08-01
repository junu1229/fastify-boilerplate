import { FastifyReply, FastifyRequest } from 'fastify';

const healthCheck = (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.code(200).send({
      success: true,
      message: 'service is running...',
    });
  } catch (e: any) {
    reply.code(500).send({
      success: false,
      message: 'Not Found...',
      error: e,
    });
  }
};

export default healthCheck;
