class TarefasDAO {
    constructor(bd) {
        this.bd = bd;
    }
    listaTarefas() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM TAREFAS',
            (err, tarefas) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(tarefas)
                }
            })
        })
    }
    buscaTarefa(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM TAREFAS WHERE ID=${id}`,
            (err, tarefa) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(tarefa)
                }
            })
        })
    }
    insereTarefa(tarefa) {
        return new Promise((resolve, reject) => {
            this.bd.run(`INSERT INTO TAREFAS (TITULO, DESCRICAO, STATUS, DATACRIACAO, ID_USUARIO) VALUES (?, ?, ?, ?, ?)`,
            [tarefa.titulo, tarefa.descricao, tarefa.status, tarefa.dataCriacao, tarefa.id_usuario],
            (err) => {
                if(err) {
                    reject('Tarefa não pôde ser inserida')
                } else {
                    resolve('Tarefa inserida com sucesso')
                }
            })
        })
    }
    deletaTarefa(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM TAREFAS WHERE ID=${id}`,
            (err, tarefa) => {
                if(err) {
                    reject(err)
                }else {
                    resolve('Tarefa deletada com sucesso')
                }
            })
        })
    }
}

module.exports = TarefasDAO;