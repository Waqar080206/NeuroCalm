var emoji = document.getElementById('emoji');
var mood = document.getElementById('mood');
var sliderValue = document.getElementById('range');

sliderValue.oninput = function() {
  var value = this.value;
  if (value <= 20) {
    emoji.innerHTML = '&#128543;'; 
    mood.innerHTML = 'Worried';
  } else if (value <= 40) {
    emoji.innerHTML = '&#128545;'; 
    mood.innerHTML = 'Sad';
  } else if (value <= 60) {
    emoji.innerHTML = '&#128532;'; 
    mood.innerHTML = 'Confused';
  } 
  else if (value <= 80) {
    emoji.innerHTML = '&#128522;'; 
    mood.innerHTML = 'Happy';
  } 
  else if (value <= 100) {
    emoji.innerHTML = '&#128514;'; 
    mood.innerHTML = 'Joyful';
  } 
}
const buttons = document.querySelectorAll('button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )