function contavogais(){

    var contador=0;
    var vogais=['a','e','i','o','u'];
    var i;
    var frase="bom dia";

    for(i=0; i<frase.length;i++){
        if(vogais.indexOf(frase[i])!=-1){
            contador++;
        }
    }
    console.log(contador)
}
contavogais()