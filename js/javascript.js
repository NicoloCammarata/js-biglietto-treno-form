//let km = prompt("qunti km percorrerai?")
//let età = prompt("quanti anni hai?")


// sezione chilometraggio
let km = document.getElementById("chilometraggio");


// sezione età
let età = document.getElementById("age");


// bottne 

const myButton = document.getElementById('genera');

myButton.addEventListener('click', function() {
    const kmInput = document.getElementById('chilometraggio');
    const kmInputValue = parseInt(kmInput.value);

    console.log('kmInput', kmInput, typeof kmInput);
    console.log('kmInputValue', kmInputValue, typeof kmInputValue);

    const ageInput = document.getElementById('age');
    const ageInputValue = parseInt(ageInput.value);

    console.log('ageInput', ageInput, typeof ageInput);
    console.log('ageInputValue', ageInputValue, typeof ageInputValue);

    if (kmInputValue == 1 && ageInputValue >= 18 && ageInputValue <= 65) {
        console.log("hai speso 0.21 €")
        console.log ("no sconto")
      
    }
    else if (kmInputValue == 1 && ageInputValue >= 65 ) {
        console.log(0.21 * 0.6)
      
    }
    else if (kmInputValue == 1 && ageInputValue < 18 ) {
        console.log(0.21 * 0.8)
    
      
    }
    else if (kmInputValue != 1 && ageInputValue >= 18 && ageInputValue <= 65){
        console.log(kmInputValue * 0.21)
        
        
    }
    else if (kmInputValue != 1 && ageInputValue < 18 ){
        console.log(kmInputValue * 0.21 * 0.8)
        
    }
    else if (kmInputValue != 1 && ageInputValue >= 65 ){
        console.log(kmInputValue * 0.21 * 0.6)
        
    }
   

    
});


