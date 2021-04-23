const UsuarioModelo = require('../models/usuario');
const UsuarioDao = require('../DAO/usuarios-dao');

const request = require('supertest')

function usuarioControl(app, bd){
    const usuarioDAO = new UsuarioDao(bd)
    let users = bd.usuarios
    app.get('/usuarios',(req,res)=>{
        const data = async() => {
            try{
                const usuarios = await usuarioDAO.listaUsuarios((a)=>{res.send(a)});
            } catch(err) {
                res.send(err);
            }
        }
        data();
    });
    
    app.get('/usuarios/:id',(req,res)=>{
        const data = async() => {
            try{
                const usuario = await usuarioDAO.buscaUsuario(req.params.id);
                res.send(usuario);
            } catch(err) {
                res.send(err);
            }
        }
        data();
    })
    app.post('/usuarios',(req,res)=>{
        const body = req.body;
        const data = async() => {
            try{
                usuarioDAO.insereUsuario(new UsuarioModelo(0, body.nome, body.email, body.senha));
                res.send(`Usuário inserido com sucesso`);
            } catch(err) {
                res.send(err);
            }
        }
        data();
    });
    app.delete('/usuarios/:id', (req,res)=>{
        const data = async() => {
            try{
                usuarioDAO.deletaUsuario(req.params.id);
                res.send(`Usuário deletado com sucesso`);
            } catch(err) {
                res.send(err);
            }
        }
        data();
    });
    app.put('/usuarios/:email', (req,res)=>{
        const email = req.params.email
        users.find(user => {
            user._email == email
            user._email = req.body._email
        })
        res.send(users)
    });
}

module.exports = usuarioControl;