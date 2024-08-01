import { FastifyInstance } from 'fastify';
import registerCors from './registerCors';
import registerWebsocket from './registerWebsocket';

const plugins = async (app: FastifyInstance) => {
  await registerCors(app);
  await registerWebsocket(app);
};

export default plugins;
