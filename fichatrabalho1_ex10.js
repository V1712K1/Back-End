function fact(num){
    var result=1;

    if (num==0||num==1){
    return result;
    }else{

        for(var i=num;i>=1;i--){
    result=result*i;
    }
    return result;
    } 
    }

    result=fact(5)
    console.log(result);