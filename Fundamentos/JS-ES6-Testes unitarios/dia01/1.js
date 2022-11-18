  const student = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // 
  };

 function lerObjeto(event) {
    const key = Object.keys(event);    
    for (let i in key) { 
        console.log(`${key[i]}: Nível: ${Object.values(event)[i]}`)        
    }
 } 
 lerObjeto(student)