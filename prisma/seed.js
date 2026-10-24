const prisma = require('../src/prisma/client');

async function main() {
  const director = await prisma.director.create({
    data: { name: 'Christopher Nolan', birthYear: 1970 },
  });

  await prisma.movie.createMany({
    data: [
      { title: 'Inception', releaseYear: 2010, directorId: director.id },
      { title: 'Interstellar', releaseYear: 2014, directorId: director.id },
      { title: 'The Dark Knight', releaseYear: 2008, directorId: director.id },
    ],
  });

  console.log('Seed concluído!');
}

main().catch(console.error).finally(() => prisma.$disconnect());
