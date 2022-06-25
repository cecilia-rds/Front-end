const area = prompt('Você quer seguir para front ou banckend?')
console.log("Ok, será " + area + " então");

let aprenderMais = ''

function vaiAprenderMais () {

    aprenderMais = prompt('Você quer aprender mais alguma tecnologia? sim ou não');
}

if (area == 'frontend'){
    const respostaFront = prompt('Você quer aprender Vue ou React ?');
    console.log(respostaFront + " Leagl!");
} else if (area == 'backend') {
    const respostaBack = prompt('Você quer aprender C# ou Java ?')
    console.log(respostaBack + "É uma otima area");
} else {
    console.log('Opção invalida');
}

const depois = prompt("E depois? Digite 1 para continuar estudando " + area + " ou vai seguir pra Fullstack? Nesse caso digite 2" );

if (depois == 1){
    console.log("Boa! bons estudos...");
} else if (depois == 2) {
    console.log("Bons estudos e sucesso no apredizado");
} else {
    console.log('Opção invalida');
}

vaiAprenderMais ();

    while (aprenderMais == 'sim') {
     
        nomeTecnologia = prompt("Qual será? ");
        console.log(nomeTecnologia);
        vaiAprenderMais ();
    } 
    if (aprenderMais != "sim") {
        alert("fim");
    }

