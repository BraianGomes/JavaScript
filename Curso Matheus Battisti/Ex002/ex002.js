//Avancando no Javascript

//Manipulacao de Arrays

const frutas = ["Maca", "Laranja"];

frutas.unshift("Acerola");

console.log(frutas);

frutas.shift();

console.log(frutas);

//map, filter, reduce -> arrow function

const numeros = [1,2,3,4,5,6];

//find => somente retorna o primeiro elemento do criterio
const numeroPar = numeros.find((num) => num % 2 === 0);

console.log(numeroPar);


const numerosPares = numeros.filter((num) => num % 2 === 0);

console.log(numerosPares);

//Manipulacao de Strings

const frase = " Ola, mundo !";

const palavras = frase.trim().split(" ");

console.log(frase);
console.log(palavras);

const frase2 = "JavaScript eh Incrivel!";

console.log(frase2.startsWith("java"));
console.log(frase2.endsWith("!"));

// Excecoes e tratamentos de erros

/*const idade = 15;

if (idade < 18) {
    throw new Error ("Voce deve ter pelo menos 18 anos!");
}
*/
try{
    const idade = 15;

if (idade < 18) {
    throw new Error ("Voce deve ter pelo menos 18 anos!");
}
} catch (error) {
    console.log(error);

}
console.log("continuando o programa.....");

// Callback => funcao

function cumprimentar (nome, Callback){
    console.log("Ola, " + nome);
    Callback();
}

function mostrarSaudacao(){
    console.log("Como voce esta?");
}

cumprimentar("Braian", mostrarSaudacao);

cumprimentar("Maria", function (){
    console.log("Voce esta bem?");
});

//settimeout => depois de um tempo executa algo, uma funcao JavaScript

function mostrarMensagem(){
    console.log("Essa mensagem sera exibida apos 3 segundos.");
}

setTimeout(mostrarMensagem, 3000);

setTimeout(function (){
    console.log("Oi");
},2000);







