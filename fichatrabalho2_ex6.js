function retangulo(larg,alt){

    for (let j = 0; j < alt; j++) {
        var linha="";
        for (let i = 0; i < larg; i++) {
            linha+="*";
        }
        console.log(linha)
    }
}

retangulo(20,5);