const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  const fantasyOrScienceFiction = () => books.filter((book) => book.genre === 'Fantasia' || book.genre === 'Ficção Científica');

  const oldBooksOrdered = () => {
    const novaData = new Date;
    const anoAtual = novaData.getFullYear();
    const maisDeSessenta = books.filter((livro) => anoAtual - livro.releaseYear > 60);
    const orderList = maisDeSessenta.sort((a,b) => a.releaseYear - b.releaseYear);
    return orderList;
  }

  const booksByAuthorBirthYear = (birthYear) => {
    let retorno = [];
    const engine = books.forEach((livro) => {
        if (livro.author.birthYear === birthYear) {
            retorno.push(livro.name);
        }
    })
    return retorno;
  }

  const fantasyOrScienceFictionAuthors = (array) => {
    // escreva seu código aqui
    const retorno = array.reduce(((acum, book) => {
        if (book.genre === 'Fantasia' || book.genre === 'Ficção Científica') {
            acum.push(book.author.name);
        }
        return acum.sort()
    }), []);
    return retorno
  }

  const oldBooks = (array) => {
    const novaData = new Date;
    const anoAtual = novaData.getFullYear();
    const retorno = array.reduce(((acum, book) => {
        if (anoAtual - book.releaseYear > 60) {
            acum.push(book.name);
        }
        return acum;
    }), []);
    return retorno;
  }

  const authorWith3DotsOnName = (array) => {
    // escreva seu código aqui
    const retorno = array.reduce(((acum, book) => {

    }), '');
  }

