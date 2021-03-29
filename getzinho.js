const app = require('express')();

app.get('/todo',(_, response)=>{
    response.send("Rota ativada com GET e recurso toDo valores de toDo devem ser retornados");
});

app.listen("3000", console.log("toDo ligado"));