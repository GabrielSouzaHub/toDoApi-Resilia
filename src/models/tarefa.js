class Tarefa {
    constructor(id,titulo,descricao,status,dataCriacao,id_usuario) {
        this._id = id,
        this._titulo = titulo,
        this._descricao = descricao,
        this._status = status
        this._dataCriacao = dataCriacao,
        this._id_usuario = id_usuario
    }
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get descricao() {
        return this._descricao;
    }
    get status() {
        return this._status;
    }
    get dataCriacao() {
        return this._id;
    }
    get id_usuario() {
        return this._id_usuario;
    }
}

module.exports = Tarefa