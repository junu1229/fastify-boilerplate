import { FastifyInstance } from 'fastify';

let connections = 0;

const websocket = async (fastify: FastifyInstance) => {
  fastify.get('/', { websocket: true }, (connection, req) => {
    connection.send('hello');
    connection.on('open', () => {
      connection.send('hello');
      console.log('Connection opened');
      connections += 1;
    });

    connection.on('message', () => {
      connection.send('hi');
      console.log('Connections:', connections);
    });

    connection.on('close', () => {
      console.log('Connection closed');
      connections -= 1;
    });
  });
};

export default websocket;
