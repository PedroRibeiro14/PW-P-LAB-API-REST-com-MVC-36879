const service = require('../services/movieService');

const getAll = async (req, res, next) => {
  try {
    res.json(await service.getAll(req.query));
  } catch (e) { next(e); }
};

const search = async (req, res, next) => {
  try {
    const { title } = req.query;
    if (!title) return res.status(400).json({ error: 'title query param is required' });
    res.json(await service.search(title));
  } catch (e) { next(e); }
};

const getById = async (req, res, next) => {
  try {
    const movie = await service.getById(Number(req.params.id));
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    res.json(movie);
  } catch (e) { next(e); }
};

const create = async (req, res, next) => {
  try {
    const { title, releaseYear, directorId } = req.body;
    if (!title || !releaseYear || !directorId)
      return res.status(400).json({ error: 'title, releaseYear and directorId are required' });
    res.status(201).json(await service.create({ title, releaseYear: Number(releaseYear), directorId: Number(directorId) }));
  } catch (e) { next(e); }
};

const update = async (req, res, next) => {
  try {
    const movie = await service.getById(Number(req.params.id));
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    const { title, releaseYear, directorId } = req.body;
    res.json(await service.update(Number(req.params.id), {
      title,
      releaseYear: releaseYear ? Number(releaseYear) : undefined,
      directorId: directorId ? Number(directorId) : undefined,
    }));
  } catch (e) { next(e); }
};

const remove = async (req, res, next) => {
  try {
    const movie = await service.getById(Number(req.params.id));
    if (!movie) return res.status(404).json({ error: 'Movie not found' });
    await service.remove(Number(req.params.id));
    res.status(204).send();
  } catch (e) { next(e); }
};

module.exports = { getAll, search, getById, create, update, remove };
