const service = require('../services/statsService');

const getStats = async (req, res, next) => {
  try {
    res.json(await service.getStats());
  } catch (e) { next(e); }
};

module.exports = { getStats };
