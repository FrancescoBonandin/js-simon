// 1.Creo un array di numeri random e stampo tutti gli elementi scorrendo l'array.
// 2.setto un timeout a 30.000ms.
//  Dopo 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta,
//  i numeri che ha visto precedentemente, tramite il prompt().
// 3.Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da 
//   indovinare sono stati individuati.


function RandomNumberArray(arrLen,max){
    let arr = [];

    for(let index = 0;index < arrLen;index++){

        aNumber = randomNumber(1, max);

       arr.push(aNumber);
    }
    return arr;
}


function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function stringAssembler(array){

    let message = "";
    for(let i = 0; i < array.length; i++){
      message += ` ${array[i] + 1}`

    }

    return message;

}

let timerBlock = document.querySelector(".timer");

let simonSaysArr = RandomNumberArray(5,10);

const simonSaysDisplay = document.querySelector(".simon-says-display");

for(let i = 0;i < simonSaysArr.length;i++){
    
    const cell = document.createElement("div");
    simonSaysDisplay.append(cell);
    cell.append(simonSaysArr[i]);
}

let userSaysArr = [];

let timer = 30;

timerBlock.innerHTML = timer;

let clock = setInterval(function(){

    timer--;

    if (timer < 10 && timer > 0){
        timerBlock.innerHTML = `0${timer}`
    }

    else if(timer == 0){
        timerBlock.innerHTML = `0${timer}`
        clearInterval(clock)
        
    }

    else{
        timerBlock.innerHTML = `${timer}`
    }



},1000
)

setTimeout(function(){

    simonSaysDisplay.classList.add("hide");

},30*1000)



let guessedRight = 0 ;
let guessedArray = [];
setTimeout(function(){


    for(let i = 0;i < simonSaysArr.length;i++){

        userSaysArr.push( parseInt(prompt(`dimmi il ${i+1}° numero `)));

    }

    for(let i = 0; i < simonSaysArr.length; i++){

        if(userSaysArr[i] == simonSaysArr[i]){

            guessedArray.push(i)

            guessedRight ++
            
        }
        console.log(userSaysArr,simonSaysArr,guessedRight)
    }

    if(guessedRight > 0){

        
        alert(`Hai indovinato ${guessedRight} numeri`+"\n hai indovinato il"+`${stringAssembler(guessedArray)}` + " numero")
    }

    else{
        alert(`Non ne hai indovinato nessuno, sei scarso`)
    }

}, 30 * 1000 + 300)
