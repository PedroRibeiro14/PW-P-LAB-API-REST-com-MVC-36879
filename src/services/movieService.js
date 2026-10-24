const prisma = require('../prisma/client');

const getAll = ({ page, limit, sort }) => {
  const skip = page && limit ? (page - 1) * limit : undefined;
  const take = limit ? Number(limit) : undefined;
  const orderBy = sort ? { [sort]: 'asc' } : undefined;
  return prisma.movie.findMany({ skip, take, orderBy, include: { director: true } });
};

const search = (title) =>
  prisma.movie.findMany({
    where: { title: { contains: title, mode: 'insensitive' } },
    include: { director: true },
  });

const getById = (id) =>
  prisma.movie.findUnique({ where: { id }, include: { director: true } });

const create = async (data) => {
  const director = await prisma.director.findUnique({ where: { id: data.directorId } });
  if (!director) {
    const err = new Error('Director not found');
    err.status = 404;
    throw err;
  }
  return prisma.movie.create({ data, include: { director: true } });
};

const update = async (id, data) => {
  if (data.directorId) {
    const director = await prisma.director.findUnique({ where: { id: data.directorId } });
    if (!director) {
      const err = new Error('Director not found');
      err.status = 404;
      throw err;
    }
  }
  return prisma.movie.update({ where: { id }, data, include: { director: true } });
};

const remove = (id) => prisma.movie.delete({ where: { id } });

module.exports = { getAll, search, getById, create, update, remove };
