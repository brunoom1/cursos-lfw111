"use strict"

const data = [
  {
    id: "A1",
    name: "Aspirador de pó",
    rrp: "99,99",
    info: "O aspirador mais ruim do mundo.",
  },
  {
    id: "A2",
    name: "Soprador de folhas",
    rrp: "303,33",
    info: "Este produto vai te surpreender.",
  },
];

export default async function (fastify, opts) {
  fastify.get('/', (request, reply) => {
    return data;
  });

  fastify.post('/', async function (request, reply) {
    fastify.mockDataInsert(request, opts.prefix.slice(1), data);
    return data;
  });

}