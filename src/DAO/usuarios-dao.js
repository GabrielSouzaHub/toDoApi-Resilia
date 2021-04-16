class UsuariosDAO {
    constructor(bd) {
        this.bd = bd;
    }
    listaUsuarios() {
        return new Promise((resolve, reject) => {
            this.bd.all('SELECT * FROM USUARIOS',
            (err, usuarios) => {
                if(err) {
                    reject(err)
                } else {
                    resolve(usuarios)
                }
            })
        })
    }
    insereUsuario(usuario) {
        return new Promise((resolve, reject) => {
            this.bd.run('INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)'
            , [usuario.nome, usuario.email, usuario.senha]
            , (err) => {
                if (err) {
                    console.log('Entrou reject');
                    reject('Usuário não pôde ser inserido')
                } else {
                    console.log('Entrou resolve');
                    resolve('Usuário inserido com sucesso')
                }
            })
        })
    }
}

module.exports = UsuariosDAO