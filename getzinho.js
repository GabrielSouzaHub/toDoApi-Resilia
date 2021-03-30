const { response } = require('express');

const app = require('express')();
const port = 3000;

app.get('/todo',(_, response)=>{
    response.send(`Rota ativada com GET e recurso toDo valores de toDo devem ser retornados`);
});

app.get('/user',(_,response)=>{
    response.send(`Rota ativada com GET e recurso user valores de user devem ser retornados`)
})

app.listen(port, console.log("toDo ligado"));