const Tarefa = require('../models/tarefa');

function tarefaControl(app, bd){
    app.get('/tarefa',(_, response)=>{
        const tarefas = bd.tarefas
        response.send(tarefas);
    });
    app.post('/tarefa',(request, response)=>{
        const body = request.body
        let tarefa = new Tarefa(body.id,body.nome,body.data,body.urgencia)
        bd.tarefas.push(tarefa)
        response.send(tarefa)
    });    
}

module.exports = tarefaControl;