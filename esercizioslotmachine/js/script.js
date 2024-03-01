// '🃏'
// '🍒'
// '🍊'
// '🍇'
// '🍓'
// '🍉'



//creare variabili sulla carta e sul bottone
// al click si generano 3 diverse immagini
// tutte uguali hai vinto, 2 piu jolly hai vinto , diverse hai perso


addEventListener("DOMContentLoaded", function() {



const firstSlot = document.getElementById('first-slot');

const secondSlot = document.getElementById('second-slot');

const thirdSlot = document.getElementById('third-slot');

const start = document.getElementById('start');

const reset = document.getElementById('reset');

const message = document.getElementById('message');





function generaNumeroCasuale() {
    return Math.floor(Math.random() * 6) + 1;
}

function numeroToEmoji(numero) {
    if (numero === 1) {
        return '🃏';
    } else if (numero === 2) {
        return '🍒';
    } else if (numero === 3) {
        return '🍊';
    } else if (numero === 4) {
        return '🍇';
    } else if (numero === 5) {
        return '🍓';
    } else if (numero === 6) {
        return '🍉';
    } else {
        return '❓';
    }
}

function mostraSlot(machine, numero) {
    machine.innerHTML = numeroToEmoji(numero);
}


start.addEventListener('click', function() 

{

    const number1 = generaNumeroCasuale();
    const number2 = generaNumeroCasuale();
    const number3 = generaNumeroCasuale();
    
    mostraSlot(firstSlot, number1);
    mostraSlot(secondSlot, number2);
    mostraSlot(thirdSlot, number3);



     message.innerHTML = ''


     if ((number1 == number2 && number2 == number3 && number3 == number1) || (number1 == 1 && number2 == number3) || (number2 == 1 && number1 == number3) || (number3 == 1 && number1 == number2))

     {
        message.innerHTML = 'HAI VINTO!'
        console.log('Hai Vinto');
        message.style.color = 'Green'
        start.style.border = '3px solid green'
     }

     else {
        message.innerHTML = 'HAI PERSO!'
        console.log('Hai perso!');
        message.style.color = 'Red'
        start.style.border = '3px solid red'
     }
  
     
})




reset.addEventListener('click', function()

{
    firstSlot.innerHTML = '';
    secondSlot.innerHTML = '';
    thirdSlot.innerHTML = '';
    message.innerHTML = '';
    start.style.border = '3px solid black'

}

)
})





