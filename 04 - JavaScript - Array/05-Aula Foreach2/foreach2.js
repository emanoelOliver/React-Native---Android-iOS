Array.prototype;forEach2 = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this)
    }
}

const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice, array) { // Internamento dentro dessa função tem um for
    console.log(`${indice + 1}) ${nome}`); // O indice é sempre passado como 2 paramentro e nunca como o primeiro
   // console.log(array);
})

