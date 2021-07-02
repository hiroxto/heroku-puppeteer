const express = require('express');
const basicAuth = require('basic-auth-connect');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;
const USER = process.env.USER
const PASSWORD = process.env.PASSWORD;

const taskExists = taskName => fs.existsSync(`./tasks/${taskName}`);

if (USER && PASSWORD) {
  app.use(basicAuth(USER, PASSWORD));
}

app.get('/tasks/run/:task', (req, res) => {
  let { task } = req.params;

  console.log(task);

  if (taskExists(task)) {
    require(`./tasks/${task}`);
    const message = `Task was requested: ${task}`;
    console.log(message);
    res.send(message);
  } else {
    const message = `Task does not exist: ${task}`;
    console.log(message);
    res.send(message);
  }

})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
