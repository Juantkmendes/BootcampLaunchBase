// Calculo do IMC

const nome = "Carlos";
const peso = 84;
const altura = 1.88;
const sexo = "Masculino";

const imc = peso / (altura * altura)

if (imc >= 30) {
     console.log("Carlos você está acima do peso")
} else {
     console.log("Carlos você não está acima do peso")
}

// Cálculo de aposentadoria

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuição = 23;

const aposentadoria = idade + contribuição

if (sexo == "F") {
    if (contribuição >= 30 && aposentadoria >= 85 ) {
        console.log('Silvana, você pode se aposentar!')
    } else {
        console.log('Silvana, você ainda não pode se aposentar')
    } 
} else {
    console.log("Outra conta de aposentadoria")
} 
