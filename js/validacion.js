var ntarjet=parseInt(prompt('ingrese los numeros de la tarjeta'));// preguntamos el n° de tarjeta y aseguramos que solo sea numeros.
var array = ntarjet.split();                                     //convertimos el string ingresado a array.

//creamos la funcion reverse que revierte los numeros que ingresamos en el array pero en el mismo array.
var reverse = function (array) {
   for (var i = 0; i < array.length; i++) {
     var item = array.pop();
      array.splice(i, 0, item);}
return array
}
//creamos la funcion para validar los numeros.
var isValidCard=function(array){
   
        for(var i=0; i<array.length; i=i+2) { //si la posicion del digito es par .
        var sum=array[i]*i+1;                 //multplicamos el digito por la posicion.
           if(sum[i]>=10){
               return sum[i]-1;     
            }
            else{
               return sum[i];
            }
                 }
    for(var i=1; i<array.length ; i=i+2) {// si la posicion de los digitos es impar solo se toma el digito.
    return array[i];

 }
  var suma=0;
   for(var i=0; i<array.length ; i++) {
           suma=sum[i]+array[i];//sumamos los digitos de las posiciones pares con impares.
           if(suma%10){ //si la suma de los digitos es divisble por 10 la tarjeta es valida.
                   return 'valida';
           }else{ return 'invalida';
           }
}
}
isValidCard()