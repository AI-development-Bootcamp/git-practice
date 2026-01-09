import Fastify from 'fastify';
import cors from '@fastify/cors';

const fastify = Fastify({ logger: true });

await fastify.register(cors, {
  origin: 'http://localhost:5173'
});

const start = async () => {
  try {
    await fastify.listen({ port: 3001 });
    console.log('Server running on http://localhost:3001');
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
