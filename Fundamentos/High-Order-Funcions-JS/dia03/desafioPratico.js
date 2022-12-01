// Fonte: <https://restcountries.com/v2/all>

const countries = [
    {
      name: 'Afghanistan',
      region: 'Asia',
      currencies: [{ code: 'AFN', name: 'Afghan afghani' }],
      capital: 'Kabul',
      population: 40218234,
      area: 652230
    },
    {
      name: 'Åland Islands',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Mariehamn',
      population: 28875,
      area: 1580
    },
    {
      name: 'Albania',
      region: 'Europe',
      currencies: [{ code: 'ALL', name: 'Albanian lek' }],
      capital: 'Tirana',
      population: 2837743,
      area: 28748
    },
    {
      name: 'Algeria',
      region: 'Africa',
      currencies: [{ code: 'DZD', name: 'Algerian dinar' }],
      capital: 'Algiers',
      population: 44700000,
      area: 2381741
    },
    {
      name: 'American Samoa',
      region: 'Oceania',
      currencies: [{ code: 'USD', name: 'United States Dollar' }],
      capital: 'Pago Pago',
      population: 55197,
      area: 199
    },
    {
      name: 'Andorra',
      region: 'Europe',
      currencies: [{ code: 'EUR', name: 'Euro' }],
      capital: 'Andorra la Vella',
      population: 77265,
      area: 468
    },
    {
      name: 'Angola',
      region: 'Africa',
      currencies: [{ code: 'AOA', name: 'Angolan kwanza' }],
      capital: 'Luanda',
      population: 32866268,
      area: 1246700
    },
    {
      name: 'Anguilla',
      region: 'Americas',
      currencies: [{ code: 'XCD', name: 'East Caribbean dollar' }],
      capital: 'The Valley',
      population: 13452,
      area: 91
    }
  ];

  const getPopulation = (array) => {
    // retorne o seu código aqui
    const retorno = array.reduce(((acum, countrie) => {
        acum = acum + countrie.population;
        return acum;
    }), 0);
    return retorno;
   }

   const getTotalArea = (array) => {
    const retorno = array.reduce(((acum, countrie) => {
        acum = acum + countrie.area;
        return acum;
    }), 0);
    return retorno;
    }

    const longestName = (array) => {
        const retorno = array.reduce(((acum, countrie) => {
            if (acum.name.length < countrie.name.length) {
                acum = countrie;
                return acum;
            } else {
                return acum;
            }
        }));
        return retorno;
      }

      const countA = (array) => {
        // retorne seu código aqui
        let contador = 0
        const arrayNomes = array.map((element) => element.name);
        const lowerCase = arrayNomes.map((element) => element.toLowerCase());
        const contandoLetras = lowerCase.forEach((element) => {
            const splitter = element.split('');
            const contando = splitter.forEach((element) => {
                if (element === 'a') {
                    contador += 1;
                }
            });
        });
        return contador;
      }
      console.log(countA(countries))