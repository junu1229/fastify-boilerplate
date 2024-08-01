const healthCheck = {
  schema: {
    response: {
      200: {
        type: 'object',
        properties: {
          success: { type: 'boolean' },
          message: { type: 'string' },
          error: { type: 'object' },
        },
      },
    },
  },
};

export default healthCheck;
