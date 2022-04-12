const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia'} // Apartir de um objet podemos ter mais ou menos uma estrutura Array (PseudoArray)
console.log(quaseArray);

Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})

console.log(quaseArray [0]); // Notação parecida com Array

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray);