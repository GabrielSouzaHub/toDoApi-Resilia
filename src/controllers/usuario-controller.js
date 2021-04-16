const UsuarioModelo = require('../models/usuario')
const UsuarioDao = require('../DAO/usuarios-dao')

const request = require('supertest')

function usuarioControl(app, bd){
    const usuarioDAO = new UsuarioDao(bd)
    let users = bd.usuarios
    app.get('/usuarios',(request,response)=>{
        usuarioDAO.listaUsuarios()
        .then( usuarios => response.send(usuarios))
        .catch( err => response.send({mensagem: "Falha ao listar usuários"}))
    });
    
    app.get('/usuarios/:email',(request,response)=>{
        const email = request.params.email
        const user = users.find(user => user._email == email)
        response.send(user)
    })
    app.post('/usuarios',(request,response)=>{
        const body = request.body;
        let usuario = new UsuarioModelo(0, body.nome, body.email, body.senha);
        usuarioDAO.insereUsuario(usuario)
            .then((mensagemSucesso) => response.send( {mensagem: mensagemSucesso}))
            .catch((mensagemFalha) => response.send( {mensagem: mensagemFalha}))
    });
    app.delete('/usuarios/:email', (request,response)=>{
        const email = request.params.email;
        const newUsers = users.filter(user => user._email != email);
        users = newUsers;
        response.send(`Email:${request.params.email} deletado`);
    });
    app.put('/usuarios/:email', (request,response)=>{
        const email = request.params.email
        users.find(user => {
            user._email == email
            user._email = request.body._email
        })
        response.send(users)
    });
}

module.exports = usuarioControl;