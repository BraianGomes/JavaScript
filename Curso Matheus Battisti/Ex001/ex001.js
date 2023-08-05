//Exercicio Number01
//Criar um script que imprime "Ola, Mundo!"

console.log("Ola, Mundo!");

const valorString = "123456";
const valorNumber = Number(valorString);

console.log(typeof valorNumber);

const minhaString = "JavaScript eh incrivel";
const numeroDeCaracteres = minhaString.length
const numeroDePalavras = minhaString.split(" ").length;

console.log(`O Numero de Caracteres eh: ${numeroDeCaracteres}`);
console.log(`O numero de Palavras eh: ${numeroDePalavras}`);

const nomes = ["Braian", "Erica", "Cristal", "Yuri", "Loky"];

for(let i = 0; i < nomes.length; i++) {
    console.log(nomes[i]);
}



function converterHorario(horario24){

    const [hora,minuto] = horario24.split(":");
    const hora12 = hora % 12 || 12; 

    let periodo = "AM";

    if(hora > 12){
        periodo = "PM";
    }

    if(hora == 12){
        periodo = "PM";
    }

console.log(`${hora12}:${minuto} ${periodo}`);
}


converterHorario("15:16");
converterHorario("9:46");
converterHorario("00:23")
converterHorario("12:33")