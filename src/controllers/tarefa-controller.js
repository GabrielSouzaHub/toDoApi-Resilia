const Tarefa = require('../models/tarefa');
const TarefaDao = require('../DAO/tarefas-dao');

function tarefaControl(app, bd){
    const tarefaDAO = new TarefaDao(bd);
    app.get('/tarefas',(req, res)=>{
        const data = async() => {
            try{
                const tarefas = await tarefaDAO.listaTarefas();
                res.send(tarefas)
            } catch(err){
                res.send(err)
            }
        }
        data();
    });
    app.get('/tarefas/:id',(req, res) => {
        const data = async() => {
            try{
                const tarefa = await tarefaDAO.buscaTarefa(req.params.id);
                res.send(tarefa)
            } catch(err){
                res.send(err)
            }
        }
        data();
    })
    app.post('/tarefas',(req, res)=>{
        const body = req.body;
        const data = async() => {
            try{
                tarefaDAO.insereTarefa(new Tarefa(0, body.titulo, body.descricao, body.status, body.dataCriacao, body.id_usuario));
                res.send(`Tarefa criada com sucesso`)
            } catch(err) {
                res.send(err);
            }
        }
        data();
    });
    app.delete('/tarefas/:id',(req, res)=>{
        const data = async() => {
            try{
                tarefaDAO.deletaTarefa(req.params.id);
                res.send(`Tarefa deletada com sucesso`);
            } catch(err) {
                res.send(err);
            }
        }
        data();
    })    
}

module.exports = tarefaControl;