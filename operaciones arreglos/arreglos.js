numeros = [1, 9, 2, 8, 3, 7, 4, 6, 5, 15, 11, 14, 13, 12, 10]

function buscar(arr, numero){
    const indice = arr.indexOf(numero);

    if(indice !== -1){
        console.log(`el número ${numero} esta en la posicion ${indice}`)
        return indice
    }else{
        console.log('Número no encontrado')
        return -1;
    }
}


function sumararreglo(arr){
    const suma = arr.reduce((total, num) => total + num, 0)

    console.log(`La suma total de todos los numeros del array son ${suma}`);
    return suma;
}



sumararreglo(numeros)
buscar(numeros, 9)


module.exports = {buscar, sumararreglo}