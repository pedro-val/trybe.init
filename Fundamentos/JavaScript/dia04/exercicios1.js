//   console.log('Bem vinda ao time' + ' ' + info.personagem + '.')
//   for ( let key in info) {
//     console.log(key)
//   }
//   for ( let key in info) {
//     console.log(info[key])
//   }
// for (let k1 in info) {
//     for (let k2 in info2) {
//         if (info[k1] !== info2[k2]){
//             console.log(info[k1] + ' e ' + info2[k2])
//         } else {
//             console.log('Ambos recorrentes.')
//         }     
//     }
// }
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'SIM',
  };
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    recorrente: 'SIM',
  };
  console.log(info.personagem + ' e ' + info2.personagem)
  console.log(info.origem + ' e ' + info2.origem)
  console.log(info.nota + ' e ' + info2.nota)
  console.log('Ambos Recorrentes')