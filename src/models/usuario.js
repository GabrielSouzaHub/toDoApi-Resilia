let Usuario = {
    "id" : "1",
    "nome" : "Gabriel",
    "avatar" : "https://github.com/gabrielsouzahub.png"
}

module.exports = {
    update(newUsuario) {
        Usuario = newUsuario
    },
    get() {
        return Usuario
    }
}