class Tarefa {
    constructor(id,titulo,descricao,status,dataCriacao,id_usuario) {
        this.id = id,
        this.titulo = titulo,
        this.descricao = descricao,
        this.status = status
        this.dataCriacao = dataCriacao,
        this.id_usuario = id_usuario
    }
}

module.exports = Tarefa