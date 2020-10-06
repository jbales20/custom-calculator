const speed = document.querySelector("#speed")
const page = document.querySelector("#pages")
const days = document.querySelector("#days")
const choice = document.querySelector("#options")
const words = document.querySelector("#wordsper")
const result = document.querySelector("#result")
words.addEventListener('input', calculate);
days.addEventListener('input', calculate);
page.addEventListener('input', calculate);
speed.addEventListener('input', calculate);
choice.addEventListener('input', calculate);

let aprox = 0
let minutes = 0
let hours = 0

function calculate(){
    var user_choice = choice.options[choice.selectedIndex].value;
    if(user_choice == 1){
        aprox = (page.value*words.value)/speed.value
        minutes = (aprox % 60).toFixed(2)
        hours = ((aprox - minutes)/60).toFixed(2)
        if(isNaN(hours) == false){
        result.innerHTML = `It will take you roughly ${hours} hours and ${minutes} minutes to read this book.`
        }
    }else{
        aprox = ((page.value*words.value)/speed.value)/days.value
        minutes = (aprox % 60).toFixed(2)
        hours = ((aprox - minutes)/60).toFixed(2)
        if(isNaN(hours) == false){
        result.innerHTML = `If you read for ${hours} hours and ${minutes} minutes a day, you will finish after ${days.value} days.`
        }
    }
}