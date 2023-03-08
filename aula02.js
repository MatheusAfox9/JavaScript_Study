let contador = 0;
let alturaFeminina = [];
let alturaMasculina = [];
var quantMulheres = 0;
var quantHomens = 0;
var somaAlturaHomens = 0;
var menorAltura = Infinity;
var maiorAltura = -Infinity;

while (contador < 5){
    var altura = parseInt(prompt("Qual a altura em centímetros?"));
    var sexo = prompt("F ou M?");
    if(sexo == "M"){
        somaAlturaHomens += altura;
        quantHomens++
    }else if(sexo == "F"){
        alturaFeminina.push(altura)
        quantMulheres ++;
    }
    if (altura > maiorAltura){
       maiorAltura = altura;
    }

    if (altura < menorAltura){
      menorAltura = altura;
    }
    contador++;
}

var mediaAlturaHomens = somaAlturaHomens / (contador - quantMulheres);



alert(`A maior altura é ${maiorAltura}`)
alert(`A menor altura é ${menorAltura}`)
alert(`A média de altura dos homens é ${mediaAlturaHomens.toFixed(2)}cm`)
alert(`O número de mulheres é ${quantMulheres}`)