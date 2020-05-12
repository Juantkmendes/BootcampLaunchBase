
// const empresa = 
//     {
//         nome: "Rocketseat",
//         cor: "roxo",
//         foco: "programação",
//         endereço: {
//             rua: "Rua Guilherme Gembala",
//             número: 260
//         }
//     }
// 
// console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.número}`)
// 
// // OUTRA RESOLUÇÃO
// 
// const usuario = {
//     nome: 'Diego',
//     empresa: {
//         nome: "Rocketseat",
//         cor: "roxo",
//         foco: "programação",
//         endereço: {
//             rua: "Rua Guilherme Gembala",
//             número: 260
//         }
//     }
// }
// 
// console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereço.rua}, ${empresa.endereço.número}`)

// TECNOLOGIAS

const objeto = {
    propriedade: [
        { nome: "C++", especialidade: "Desktop"},
        { nome: "Python", especialidade: "Data Science"},
        { nome: "JavaScript", especialidade: "Web/Mobile"}
    ],
    usuario: {
        nome: "Carlos",
        idade: 32,
    }
}

console.log(`O usuário ${objeto.usuario.nome} tem ${objeto.usuario.idade} anos e usa a tecnologia ${objeto.propriedade[0].nome} com especialidade em ${objeto.propriedade[0].especialidade}`)