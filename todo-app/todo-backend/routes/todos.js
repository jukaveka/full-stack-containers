const express = require('express');
const { Todo } = require('../mongo');
const redis = require('../redis')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })

  if (!todo) {

    return res.status(400).send({ "error": "New todo couldn't be created" })

  } else {

    const todoCounter = await redis.getAsync("todoCounter")

    if (!todoCounter) {
      const todos = await Todo.find({})

      await redis.setAsync("todoCounter", todos.length)
    } else {
      await redis.setAsync("todoCounter", parseInt(todoCounter) + 1)
    }

    return res.send(todo)
  }
;
});

router.get('/statistics', async (req, res) => {
  const todoCounter = await redis.getAsync("todoCounter")

  return res.json({ "added_todos": parseInt(todoCounter) })
})

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
  res.send(req.todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
  const { text, done } = req.body

  if (!text || !done ) {
    return res.send({ error: "Request body is missing at least one parameter" }).status(400)
  } else {
    req.todo.text = text
    req.todo.done = done

    const savedTodo = await req.todo.save()

    return res.send(savedTodo)
  }
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
