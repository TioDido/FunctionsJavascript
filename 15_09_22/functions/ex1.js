
function imc(peso, altura ){
    let imc = peso/(altura**2)
    return imc.toFixed(2)
}
console.log(imc(80, 1.80));