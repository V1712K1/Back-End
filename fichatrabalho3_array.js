var arrayUtils = {
    isEmpty: function (array) {
      if (array != undefined && array != null) {
        return array.length == 0;
      } 
      else {
        return 'Array is undefined';
      }
    },
    // verificar se o array esta vazio
    
    maximo: function (array) {
      if (this.isEmpty(array)) return 'array vazio';
      var max = array[0];
      // criar variavel para depois comparar
      for (let i = 1; i < array.length; i++) {
        // percorre o array com o for
        if (array[i] > max) {
          max = array[i];
          // aqui ele guarda o valor maximo dentro do array
        }
      }
      return max;
    },

    // verifica o valor maximo do array -----------------
    
    minimo: function (array) {
      if (this.isEmpty(array)) return 'array vazio';
      var min = array[0];
      // criar variavel para depois comparar
      for (let i = 0; i < array.length; i++) {
        // percorre o array com o for
        if (array[i] < min) {
          min = array[i];
          // aqui ele guarda o valor minimo dentro do array
        }
      }
      return min;
    },

    // verifica o valor minimo do array -----------------

    media: function(array){
      var sum=0
      // criar variavel para guardar a soma de todos os valores
      for (let i = 0; i < array.length; i++) {                    
          sum+=array[i];
          // como vês, aqui ele vai somando
      }
      var avg=sum/array.length;
      // esta variavel e que faz a media, poeo valor da soma total a dividir pelo tamanho do array
      return avg;
    },

    // faz a media dos valores do array -----------------

    index: function(array,value){
      for (let i = 0; i < array.length; i++) {
        // percorre o array
          if(value==array[i]){
              return i;
              // retorna o index
          }
      }
 
      return -1;
    },

    // retorna o valor do index do valor do array selecionado

    subarray: function(array,sIndex,fimIndex){
      var a=[];
      for (let i = sIndex; i <= fimIndex; i++) {
          a.push(array[i]);
      }
      return a;
    },

    // este eu nao percebi mt bem -.-"

    mesmotamanho: function(array,segarray){
      return array.length==segarray.length
    },

    // compara dois array, e vê se têm o mesmo tamanho

    ordemcontraria: function(array){
      var r=[];
      for (let i = array.length-1; i >= 0; i--) {
        // o -1 faz com que ele leia o array, da direita para a esquerda
          r.push(array[i]);
          // lança para o novo array
      }
      return r;
    },

    // retorna um array, do avesso XD ------------------

    trocaarray: function(array,index1,index2){
        
      var val1=array[index1];
      var val2=array[index2];

      array[index1]=val2;
      array[index2]=val1;

      return array;
    },

    // troca dois valores escolhidos -----------

    contains: function(array,value){
      for (let i = 0; i < array.length; i++) {
          if(value==array[i]){
              return true;
          }
      }
      return false;

    },

    // verifica se o valor inserido pertence ao array

    concatenar: function(array,otherArray){
      var concatArray=array;
      for (let i = 0; i < otherArray.length; i++) {
          concatArray.push(otherArray[i])
        
      }
      return concatArray;
    },

    // juntar dois arrays

};    
    
module.exports = arrayUtils;