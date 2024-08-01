import fastify from 'fastify';
import config from './config';
import plugins from './plugins';
import router from './router';

const main = async () => {
  const app = fastify({
    logger: true,
  });

  await plugins(app);

  router(app);

  try {
    // app.listen({ port: config.fastify.port, host: config.fastify.host });
    app.listen({ port: config.fastify.port });
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

main();
