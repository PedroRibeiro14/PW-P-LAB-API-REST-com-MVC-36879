const prisma = require('../prisma/client');

const getStats = async () => {
  const [totalMovies, totalDirectors] = await Promise.all([
    prisma.movie.count(),
    prisma.director.count(),
  ]);
  return {
    totalMovies,
    totalDirectors,
    avgMoviesPerDirector: totalDirectors > 0 ? (totalMovies / totalDirectors).toFixed(2) : 0,
  };
};

module.exports = { getStats };
