function calc() {


    var altura;
    var peso;
    var resultado;

    altura = parseFloat(document.getElementById('valor1').value);
    peso = parseFloat(document.getElementById('valor2').value);

    resultado = peso/(altura*altura);


    if(resultado >=25)
    {
        document.getElementById('titulo').innerHTML="Seu IMC é = "+resultado.toFixed(2);
        document.getElementById('iimg').src="components/Tarefa/Figura5.png";
    }
    else if(resultado <25 && resultado>= 18.5)
    {
        document.getElementById('titulo').innerHTML="Seu IMC é = "+resultado.toFixed(2);
        document.getElementById('iimg').src="components/Tarefa/Figura4.png";
    }
    else
    {
        document.getElementById('titulo').innerHTML="Seu IMC é = "+resultado.toFixed(2);
        document.getElementById('iimg').src="components/Tarefa/Figura3.png";
    }
}