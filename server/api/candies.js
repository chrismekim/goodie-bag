const router = require('express').Router();
//candy model from our DB
const Candy = require('../db/models/Candy');

router.get('/', async (req, res, next) => {
  try {
    const candies = await Candy.findAll();

    res.json(candies);
  } catch (error) {
    next(error);
  }
});

module.exports = router
//like saying module.exports candies router
//we can have multiple routers but only ONE app
