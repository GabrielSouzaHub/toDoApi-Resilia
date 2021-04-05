const usuario = require('../models/usuario')

function usuarioControl(app){
    app.get('/usuario',(_,response)=>{
        response.send(usuario.get())
    });
    app.post('/usuario',(request,response)=>{
        usuario.update(request.body)
        response.send(usuario.get())
    });
}

module.exports = usuarioControl;