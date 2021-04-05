const express = require('express');
const app = express();
const port = 3000;
const usuarioGet = require('./controllers/usuario-controller');
const tarefaGet = require('./controllers/tarefa-controller');

app.use(express.json());

app.use(function (req,res,next){
    console.log(`[INFO]: ${req.method} chegou no ${req.path}`)
    next()
})

usuarioGet(app);
tarefaGet(app);

app.listen(port, console.log("toDo ligado"));