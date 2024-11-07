var gramos=prompt("ingrese el numero a conversar")
var kilogramos=prompt("ingrese el numero a conversar")
var libras=prompt("ingrese el numero a conversar")



//gramos a kilogramos
function GramosKilogramos(valor=gramos/1000){
    console.log("el resultado de gramos a kilogramos es:" + valor + "kilogramos");
}
//de kilometros a millas
function KilogramosLibras(conversion= kilogramos*2.20462){
    console.log("el resultado de kilogramos a millas es:" + conversion + "libras");
}
//de millas a metros
function LibrasGramos(conversionM= libras/2.20462){
    console.log("el resultado de libras a gramos es:" + conversionM + "gramos");
}



