let piedra = 1

let papel = 1

let tijera = 1

piedra >+ tijera;

papel >+ piedra;

tijera >+ papel;

for(let i = 0; i < 3; i++){
    let respuesta = prompt('Elija piedra, papel, o tijera').toLowerCase()
    let random = Math.random(piedra, papel, tijera)* 3
    if(respuesta == 'piedra'){
        if(piedra > random){
            alert('Felicidades ganaste esta ronda tu oponente eligio tijera')
        }else if (piedra < random){
            alert('Perdiste la ronda tu oponente eligio papel')
        }
    }else if(respuesta == 'papel'){
        if(papel > random){
            alert('Felicidades ganaste esta ronda tu oponente eligio piedra')
        }else if (papel < random){
            alert('Perdiste la ronda tu oponente eligio tijera')
        }
    }else if(respuesta == 'tijera'){
        if(tijera > random){
            alert('Felicidades ganaste esta ronda tu oponente eligio papel')
        }else if (tijera < random){
            alert('Perdiste la ronda tu oponente eligio piedra')
        }
    }else{
        console.log('Ninguno de los valores ingresados es valido')
    }
}

alert('El programa a terminado')