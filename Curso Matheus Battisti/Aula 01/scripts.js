


var minhaVariavel = "Ola, Mundo!";

console.log(minhaVariavel);

var meuNumero = 10;

console.log(meuNumero);

console.log(meuNumero + 5);

console.log("10" + 5);

console.log(typeof meuNumero);

var meuObjeto = {};
var meuArray = [];
var meuNull = null;
var meuUndefined = undefined;


console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);

let x = 10;
const y = 5;


console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);


console.log(x == y);
console.log(x != y);

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);

//Operadores logicos
console.log(10 > 5 && 20 > 5); //AND
console.log(10 > 5 || 20 > 5); //OR

//Conversao de Tipos

const meuNumero2 = "123";
const meuNumeroConvertido = Number(meuNumero2);

console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

//Estrutura de condicao - if, else, else if

const idade = 16;

if(idade < 13){
    console.log("Crianca");
}

    else if(idade<20){
        console.log("Adolescente");
}

 else {
    console.log("Adulto");
}

if(true){
    console.log("Isso executa");
}

//Switch

const fruta = "Mamao";

switch (fruta){
    case "Maca":
        console.log("Maca nao eh Banana!");
        break;
    case "Banana":
        console.log("Banana eh a fruta!");
        break;
    default:
        console.log("Fruta nao encontrada");
}

//Estruturas de repeticao 1,2,3,4 .....
//contador, condicao de limite, incremento

for(let i = 0; i < 5; i = i++) {
    console.log("O valor de i eh:" +i);

}







