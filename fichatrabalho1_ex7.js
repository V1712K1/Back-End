function operacoes(num1,num2,opr)
{
    if(opr == "+"){
        soma = num1 + num2
        return soma
    }
    else if(opr == "-"){
        subtrai = num1 - num2
        return subtrai 
    }
    else if(opr == "*"){
        multiplicacao = num1 * num2
        return multiplicacao 
    }
    else if(opr == "/"){
        divide = num1 / num2
        return divide 
    }
    else if(opr == "^"){
        potencia = num1 ** num2
        return potencia 
    }
}
console.log(operacoes(5,2,"/"))