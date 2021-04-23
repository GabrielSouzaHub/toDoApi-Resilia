class UsuariosDAO {
    constructor(bd) {
        this.bd = bd;
    }
    listaUsuarios(a) {
        this.bd.all('SELECT * FROM USUARIOS', (err, resultado) => {
            if(err) {
                a(err);
            } else {
                a(resultado);
            }
        })
    }
    buscaUsuario(id) {
        return new Promise((resolve, reject) => {
            this.bd.all(`SELECT * FROM USUARIOS WHERE ID=${id}`,
            (err, usuario) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(usuario)
                }
            })
        })
    }
    insereUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)',
            [usuario.nome, usuario.email, usuario.senha],
            (err) => {
                if (err) {
                    reject('Usuário não pôde ser inserido')
                } else {
                    resolve('Usuário inserido com sucesso')
                }
            })
        })
    }
    deletaUsuario(id) {
        return new Promise((resolve, reject) => {
            this.bd.run(`DELETE FROM USUARIOS WHERE ID=${id}`,
            (err) => {
                if(err) {
                    reject(err)
                } else {
                    resolve('Usuário deletado com sucesso')
                }
            })
        })
    }
}

module.exports = UsuariosDAO