//Carnes - 400 gr por pessoa + de 6 horas - 650
//Bebidas - 1000ml por pessoa + 6 horas 1500ml
// Arroz de natal - 100 gr por pessoa + 6 horas - 250
// Maionese - 200gr por pessoa + 6 horas - 300gr
// Sobremesa - 100gr por pessoa + 6 horas - 150gr

// crianças valem por 0,5


let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function captureInf() {
    console.log("Calculando...")

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
 
    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    let qdtTotalArroz = arrozPP(duracao) * adultos + (arrozPP(duracao) / 2 * criancas);
    let qdtTotalMaionese = maionesePP(duracao) * adultos + (maionesePP(duracao) / 2 * criancas);
    let qdtTotalSobremesa = sobremesaPP(duracao) * adultos + (sobremesaPP(duracao) / 2 * criancas);
    

    resultado.innerHTML += `<p>${qdtTotalCarne / 1000} Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} Pet's 2L de Bebidas</p>`
    resultado.innerHTML += `<p>${qdtTotalArroz}g de Arroz de Natal</p>`
    resultado.innerHTML += `<p>${qdtTotalMaionese}g de Maionese</p>`
    resultado.innerHTML += `<p>${qdtTotalSobremesa}g de Sobremesa</p>` 
}

function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    }else{
        return 400;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6) {
        return 1500;
    }else{
        return 1000;
    }
}

function arrozPP(duracao){
    if(duracao >= 6) {
        return 250;
    }else{
        return 100;
    }
}

function maionesePP(duracao){
    if(duracao >= 6) {
        return 300;
    }else{
        return 200;
    }
}

function sobremesaPP(duracao){
    if(duracao >= 6) {
        return 150;
    }else{
        return 100;
    }
}










