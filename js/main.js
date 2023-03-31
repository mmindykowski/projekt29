let myParagraph = document.getElementById('tekst');


let myButton = document.getElementById('dodaj');

let myButton2 = document.getElementById('usuń')

document.getElementById('dodaj').onclick = function() {
    myParagraph.textContent = 'Przykładowy tekst na temat paragrafu.';
}

document.getElementById('usuń').onclick = function() {
    myParagraph.textContent = '';
}