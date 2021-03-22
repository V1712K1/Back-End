function contaletra(){

    var contador=0;
    var letra="b";
    var i;
    var frase="bobm diab";

    for(i=0; i<frase.length;i++){
        if(letra===frase[i]){
            contador++;
        }
    }
    console.log(contador)
}
contaletra()