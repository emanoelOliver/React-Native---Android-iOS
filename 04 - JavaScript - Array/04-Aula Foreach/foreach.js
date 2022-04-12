const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) { // Internamento dentro dessa função tem um for
    console.log(`${indice + 1}) ${nome}`); // O indice é sempre passado como 2 paramentro e nunca como o primeiro
   // console.log(array);
})

aprovados.forEach(nome => console.log(nome)) // ArrowFunction com apenas 1 paramentro

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados)