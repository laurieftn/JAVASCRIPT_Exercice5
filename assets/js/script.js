document.getElementById('button_valider').onclick = showAlert;

function showAlert(){
var number1 = document.getElementById("number1").value;
var number2 = document.getElementById("number2").value;

alert('Résultat : ' + number1 / number2)
}