var arrayUtils = {
    isEmpty: function (array) {
      if (array != undefined && array != null) {
        return array.length == 0;
      } 
      else {
        return 'Array is undefined';
      }
    },
    
    max: function (array) {
      if (this.isEmpty(array)) return 'array vazio';
      var max = array[0];
      for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
          max = array[i];
        }
      }
      return max;
    },
    
    min: function (array) {
      if (this.isEmpty(array)) return 'array vazio';
      var min = array[0];
      for (let i = 0; i < array.length; i++) {
        if (array[i] < min) {
          min = array[i];
        }
      }
      return min;
    },
};    
    
module.exports = arrayUtils;