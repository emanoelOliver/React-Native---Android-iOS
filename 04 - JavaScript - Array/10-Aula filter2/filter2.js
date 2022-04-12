// Foreach : Percorrer um array
// Map : Transformar um array em outro
// Filter : Semppre que precisar filtrar uma array

Array.prototype.filter2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'iPad Pro', preco: 4119, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.99, fragil: false},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false},
]

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil // O proprio (Fragil) já retorna true ou false sem precisar fazer comparação

console.log(produtos.filter2(caro).filter2(fragil));
