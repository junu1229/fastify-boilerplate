import { FastifyInstance } from 'fastify';
import { WebSocket } from '@fastify/websocket';
import { RawData } from 'ws';

let connections: WebSocket[] = [];

const websocket = async (fastify: FastifyInstance) => {
  fastify.get('/', { websocket: true }, (connection: WebSocket, req) => {
    connections.push(connection);

    connection.on('message', (message: RawData) => {
      handleMessage(connection, message);
    });

    connection.on('close', () => {
      handleClose(connection);
    });

    connection.on('error', (err: Error) => {
      handleError(err);
    });
  });
};

const handleMessage = (connection: WebSocket, message: RawData) => {
  connections.forEach((client) => {
    if (client !== connection && client.readyState === client.OPEN) {
      client.send(message);
    }
  });
};

const handleClose = (connection: WebSocket) => {
  connections = connections.filter((client) => client !== connection);
  console.log('Connection closed. Active connections:', connections.length);
};

const handleError = (err: Error) => {
  console.error('WebSocket error:', err);
};

export default websocket;
