function triangulos(alt){

    for (let j = 1; j <= alt; j++) {
        var linha="";
        for (let i = 0; i < j; i++) {
            linha+="*";
        }
        console.log(linha)
    }
}

triangulos(5);