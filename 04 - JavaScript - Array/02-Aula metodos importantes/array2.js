const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // Remove o ultimo elemento do array
console.log(pilotos);

pilotos.push('Verstappen') // Adiciona um elemento na ultima posição
console.log(pilotos);

pilotos.shift() // Remove o primeiro elemento do array
console.log(pilotos);

pilotos.unshift('Hamilton') // Adiciona um elemento na primeira posição
console.log(pilotos);

// splice pode adicionar e remover elementos

// Adicionar
pilotos.splice(2, 0, 'Bottas', 'Massa')
console.log(pilotos);

// Remover
pilotos.splice(3, 1)

const algunsPilotos1 = pilotos.slice(2) // novo array a partir do indice (2) 
console.log(algunsPilotos1);

const algunsPilotos2 = pilotos.slice(1, 4) // Começa no indice (1) e vai até o (4) só que o indice (4) nao entra
console.log(algunsPilotos2);