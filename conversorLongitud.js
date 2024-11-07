var metros=prompt("ingrese el numero a conversar")
var kilometro=prompt("ingrese el numero a conversar")
var milla=prompt("ingrese el numero a conversar")



//de metros a kilometros
function metrosKilometros(valor=metros/10000){
    console.log("el resultado de metros a km es:" + valor + "km");
}
//de kilometros a millas
function KilómetrosMillas(conversion= kilometro/1.609){
    console.log("el resultado de kilometros a millas es:" + conversion + "millas");
}
//de millas a metros
function MillasMetros(conversionM= milla*1609){
    console.log("el resultado de kilometros a millas es:" + conversionM + "millas");
}




