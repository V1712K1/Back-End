function notafinal(prat, teo)
{
    var media = (prat + teo)/2;

    if (media < 9.5)
    {
        return "Reprovado";
    }        
    else
    {
       return "Aprovado"; 
    }
              
}

console.log(notafinal(10,8))