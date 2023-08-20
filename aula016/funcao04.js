/* 5! = 5 *4 *3 * 2 *1 */

function fatorial(n) {

let fator = 1
for(let contador = n; contador > 1; contador --){
    fator *= contador
  }
  return fator
}

console.log(fatorial(5))