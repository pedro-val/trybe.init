//   console.log('O livro favorito de' + ' ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos[0].titulo + '.')
let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
    ],
  };
leitor.livrosFavoritos.push({titulo: 'Harry Potter e o Prisioneiro de Azkaban',
autor: 'JK Rowling',
editora: 'Rocco',})
console.log(leitor.livrosFavoritos.join())
// console.log(leitor.livrosFavoritos[1])
// console.log('Júlia tem ' + leitor.livrosFavoritos.length + ' livros favoritos.')