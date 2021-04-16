const express = require('express');
const sqlite = require('sqlite3').verbose();
const db = new sqlite.Database('bancoToDo');
const app = express();
const cors = require('cors');
const port = 3000;
const usuarioController = require('./controllers/usuario-controller');
const tarefaController = require('./controllers/tarefa-controller');
const bd = require('./infra/sqlite-db');

app.use(express.json());
app.use(cors());

app.use(function (req,res,next){
    console.log(`[INFO]: ${req.method} chegou no ${req.path}`)
    next()
})

usuarioController(app, bd);
tarefaController(app, bd);

app.listen(port, console.log("toDo ligado"));