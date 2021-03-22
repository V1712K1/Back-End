function imc(p,a)
{
    var imc = p/(a*a);

    if (imc < 18.5){

        console.log("Abaixo do peso");
    }
    else if(imc >= 18.5 && imc < 25 ){

        console.log("Peso normal");
    }
    else if(imc >=25  && imc < 30 ){

        console.log("Acima de peso");
    }
    else if(imc >= 30 ){

        console.log("Obeso");
    }

}

console.log(imc(90 , 1.83))