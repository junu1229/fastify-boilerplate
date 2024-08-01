import { FastifyReply, FastifyRequest } from 'fastify';

const ping = (_request: FastifyRequest, reply: FastifyReply) => {
  try {
    reply.code(200).send({
      success: true,
      message: 'pong',
    });
  } catch (e: any) {
    reply.code(500).send({
      success: false,
      message: 'Not Found...',
      error: e,
    });
  }
};

export default ping;
