"Use strict"
/**
 * @fileOverview este archivo contiene ejemplos de funciones con for
 * @author JuanRodriguez
 * @version 1.0
 */
/**
 * @description SumaArray suma los valores de un array
 * @param {Array} numeros array de numeros
 * @return number
 */
let b=[2,3,4,5]
 function SumaArray(numeros){
    let suma=0
    for (let a of numeros){
        suma=suma+a;
    }
    return suma
}
// let SumaValor= SumaArray(b);
// console.log(SumaValor)
function SumaARRAY2(numeros){
    let suma=0;
    for (let pos in numeros){
        suma=suma+numeros[pos];
    }
    return suma;

}
// let SumaValor= SumaARRAY2(b);
// console.log(SumaValor)
function SumaArray3(numeros){
    let suma=0
    for (let i=0;i<numeros.length;i++){
        suma=suma+numeros[i]
        
    }
    return suma
}
let SumaValor= SumaArray3(b);
console.log(SumaValor)
