console.log(typeof Array, typeof new Array, typeof []); // O Array é uma estrutura Heterogênia. mas as boas práticas é trabalhar com ele Homogênia

let aprovados = new Array ('Bia', 'Carlos', 'Ana')
console.log(aprovados);
 
aprovados = ['Bia', 'Carlos', 'Ana'] // Reatribuir o array 
console.log(aprovados [0]); // O array é indexado a partir do 0
console.log(aprovados [1]);
console.log(aprovados [2]);
console.log(aprovados [3]);

aprovados[3] = 'Paulo' // Uma forma valida de adicionar elementos no array / é mais comundo substituir um elemento que já existe a partir do indice 
aprovados.push('Abia') // O metodo push é apropriado para adicionar um novo elemento dentro do array
console.log(aprovados.length); // o tamanho do array

aprovados[9] = 'Rafael' // todos os elementos entre indice 9 e 4 os 4 elementos do meio (5, 6, 7 e 8) vão ficar undefined
console.log(aprovados.length);
console.log(aprovados[8] === undefined); // os elementos 5, 6, 7 e 8 estão undefined

console.log(aprovados);
aprovados.sort() // vai alterar o array, ordenando
console.log(aprovados);

delete aprovados[1] // Excluir um elemento, mas não vai re-ordenar de forma alguma o array, ele só vai colocar undefined o indice 1
console.log(aprovados[1]);
console.log(aprovados[2]); // O indice 2 vai continuar sendo o indice 2

aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento 1', 'Elemento 2') // Da para remover e adicionar elementos, o primeiro numero aponta para o indice e o segundo é quantos indices vão ser removidos
console.log(aprovados);