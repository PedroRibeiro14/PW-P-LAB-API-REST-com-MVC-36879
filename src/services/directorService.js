const prisma = require('../prisma/client');

const getAll = () => prisma.director.findMany();

const getById = (id) => prisma.director.findUnique({ where: { id } });

const create = (data) => prisma.director.create({ data });

const update = (id, data) => prisma.director.update({ where: { id }, data });

const remove = async (id) => {
  const movies = await prisma.movie.count({ where: { directorId: id } });
  if (movies > 0) {
    const err = new Error('Director has associated movies');
    err.status = 409;
    throw err;
  }
  return prisma.director.delete({ where: { id } });
};

const getMovies = (id) =>
  prisma.movie.findMany({ where: { directorId: id } });

module.exports = { getAll, getById, create, update, remove, getMovies };
