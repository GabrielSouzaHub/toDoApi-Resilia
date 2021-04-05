const tarefa = require('../models/tarefa')

function tarefaControl(app){
    app.get('/tarefa',(_, response)=>{
        response.send(tarefa.get());
    });
    app.post('/tarefa',(request, response)=>{
        tarefa.get().push(request.body)
        response.send(tarefa.get());
    });    
}

module.exports = tarefaControl;