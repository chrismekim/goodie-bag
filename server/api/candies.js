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

router.get('/:id', async (req, res, next) => {
  try {
    const candy = await Candy.findById(req.params.id);

    if (candy) {
      res.json(candy);
    } else {
      res.status(404);
    }
  } catch (error) {
    next(error);
  }
});

module.exports = router;
//like saying module.exports candies router
//we can have multiple routers but only ONE app
