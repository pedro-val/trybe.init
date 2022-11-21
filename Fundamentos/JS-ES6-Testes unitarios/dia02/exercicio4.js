const arr = [];
const n = 'Lucas';

function techList(array, nome) {
    if (array.length !== 0) {
        const newArray = array.sort();
        const finalObj = [];
        for (let i of newArray) {
            const newObj = {};
            newObj.tech = i;
            newObj.name = nome;
            finalObj.push(newObj);           
          }
          return finalObj;                
    } else {
        return 'Vazio!'; 
   } 
}

module.exports = techList;