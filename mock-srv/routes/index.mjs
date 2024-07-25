"use strict"

export default async function (fastify) {
  fastify.get('/', (request, reply) => {
    return {};
  });
}