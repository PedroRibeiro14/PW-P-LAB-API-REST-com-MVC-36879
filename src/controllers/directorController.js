const service = require('../services/directorService');

const getAll = async (req, res, next) => {
  try {
    res.json(await service.getAll());
  } catch (e) { next(e); }
};

const getById = async (req, res, next) => {
  try {
    const director = await service.getById(Number(req.params.id));
    if (!director) return res.status(404).json({ error: 'Director not found' });
    res.json(director);
  } catch (e) { next(e); }
};

const create = async (req, res, next) => {
  try {
    const { name, birthYear } = req.body;
    if (!name || !birthYear) return res.status(400).json({ error: 'name and birthYear are required' });
    res.status(201).json(await service.create({ name, birthYear: Number(birthYear) }));
  } catch (e) { next(e); }
};

const update = async (req, res, next) => {
  try {
    const director = await service.getById(Number(req.params.id));
    if (!director) return res.status(404).json({ error: 'Director not found' });
    const { name, birthYear } = req.body;
    res.json(await service.update(Number(req.params.id), { name, birthYear: birthYear ? Number(birthYear) : undefined }));
  } catch (e) { next(e); }
};

const remove = async (req, res, next) => {
  try {
    const director = await service.getById(Number(req.params.id));
    if (!director) return res.status(404).json({ error: 'Director not found' });
    await service.remove(Number(req.params.id));
    res.status(204).send();
  } catch (e) { next(e); }
};

const getMovies = async (req, res, next) => {
  try {
    const director = await service.getById(Number(req.params.id));
    if (!director) return res.status(404).json({ error: 'Director not found' });
    res.json(await service.getMovies(Number(req.params.id)));
  } catch (e) { next(e); }
};

module.exports = { getAll, getById, create, update, remove, getMovies };
