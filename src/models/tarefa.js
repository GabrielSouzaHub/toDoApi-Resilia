let Tarefa = [
    {"id" : "1",
    "nome" : "Mercado",
    "prioridade" : "Circunstancial",
    "Tempo" : "3 Horas"},
    {"id" : "2",
    "nome" : "Passear com o gato",
    "prioridade" : "Só quando miar",
    "Tempo" : "10 minutos"}]

module.exports = {
    update(newTarefa) {
        Tarefa = newTarefa
    },
    get () {
        return Tarefa
    }
}