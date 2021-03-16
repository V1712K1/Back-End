function multiplos(num){

    var i = 1
    while ((num * i) < 20){

        var mult = num * i
        console.log(mult)
        i++
    }
}
console.log(multiplos(5))