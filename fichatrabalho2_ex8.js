function caixa(lado){

    for (var j = 0; j < lado; j++) {
        var linha="";
        for (var i = 0; i < lado; i++) {
            
            if( j == 0 || j == lado -1 || i == 0 || i == lado -1){
                
                linha += "*";
            
            }

            else {

                linha += " ";
            
            }

        }
        console.log(linha);
    }
}

caixa(10);