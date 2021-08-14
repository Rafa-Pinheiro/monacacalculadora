// This is a JavaScript file

window.onload = function(){
  const valor1 = document.querySelector("#valor1");

  const valor2 = document.querySelector("#valor2");

  const somar = document.querySelector("#somar");

  somar.addEventListener("click", function(){
    let resultado = parseFloat(valor1.value) + parseFloat (valor2.value);
    document.querySelector("#result").value = resultado;
  });
}