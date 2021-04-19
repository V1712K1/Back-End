var array1 = [];

array1.push(function(){

    console.log("Hello World 1");
});

array1.push(function(){

    console.log("Hello World 2");
});

array1.push(function(){

    console.log("Hello World 3");
});

// for (i=0; i<array1.length ; i++){

//     array1[i]();
//     // ao colocar parenteses, vai buscar as funções pretendidas que estão no array
// }

array1.forEach(element => {

    element();
});