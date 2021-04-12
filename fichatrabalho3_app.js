function started(){
    console.log("Download começou!");

}

function update(percentagem){
    console.log( percentagem + "% de download");
}


function completed(){
    console.log("Fim de download!");
}

function performDownload(){

    started();

    i = 0;
    for (let i = 0; i<= 100; i+=4){
        update(i);
    }

    completed();

}

performDownload(started,update,completed)

// até aqui e a app

// a partir de aqui, ja tem a haver com o array, ou seja, o outro documento

var arrayUtils=require("./fichatrabalho3_array.js"); 
// require(), e a ligação ao documento que queres
var array=[12,4,6,88,9,0];
var otherArray=[7,10];

// nestas tres linhas, defines a ligação, e defines os arrays com valores que queres utilizar
// daqui para baixo, e so a ver se as funções do outro ficheiro funcionam


console.log("O array esta vazio? "+arrayUtils.isEmpty(array));
console.log("O maximo do array é: "+arrayUtils.maximo(array));
console.log("O minimo do array é: "+arrayUtils.minimo(array));
console.log("A media do array é: "+arrayUtils.media(array));

var value=6;
console.log("O valor é: "+ value +" e o seu index é:"+arrayUtils.index(array,value));

var subArray=arrayUtils.subarray(array,3,5);
console.log("O sub array é: "+subArray)

var sameSize= arrayUtils.mesmotamanho(array,segarray)
console.log("Os array sao do mesmo tamanho?: "+sameSize);

var invertedArray=arrayUtils.ordemcontraria(array);
console.log("O array invertido fica: "+invertedArray)

var swappedArray=arrayUtils.trocaarray(array,0,4);
console.log("O array alterado é: "+swappedArray)

console.log("O contem o valor "+value+"? "+ arrayUtils.contains(array,value));

var concatArray=arrayUtils.concatenar(array,otherArray);
console.log("O array concatenado é: "+concatArray);