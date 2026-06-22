const express = require('express');
const redis = require('../redis');
const router = express.Router();

router.get('/', async (req, res) => {
  const todoCounter = await redis.getAsync("todoCounter")

  return res.json({ "added_todos": parseInt(todoCounter) })
})

module.exports = router;
