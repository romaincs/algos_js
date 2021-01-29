export var intermediateFunctions = {
  /**
   * Return the sum of those two numbers plus the sum of all the numbers between them. 
   * The lowest number will not always come first
   * Ex : sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
   */
  sumAll: function(arr) {
    arr.sort((a, b) => a - b)
    let sum = arr[0] + arr[1]
    for(let i = arr[0] + 1; i < arr[1]; i++) {
      sum += i
    }  
    return sum
  },

  /**
   * Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
   * In other words, return the symmetric difference of the two arrays.
   */
  diffArray: function(arr1, arr2) {
    var newArr = [];
    let a = arr1.filter(e => arr2.indexOf(e) == -1)
    let b = arr2.filter(e => arr1.indexOf(e) == -1)
    return newArr.concat(a,b);
  },

  /**
   * You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. 
   * Remove all elements from the initial array that are of the same value as these arguments.
   */
  destroyer: function(arr, ...b) {
    return arr.filter(e => b.indexOf(e) == -1)
  },
  
  /**
   * Convert a string to spinal case. 
   * Spinal case is all-lowercase-words-joined-by-dashes.
   * Première version, en utilisant string.replace + regex 
   */
  spinalCaseReplace: function (str) {

    // Trouve miniscule suivi de majuscule et remplace avec des tirets 
    // Param 2 de replace : Référence au groupe avec $n
    str = str.replace(/([a-z])([A-Z])/g, '$1-$2')

    // Met la chaine en minuscule et remplace tous les espaces ou underscore par des tirets
    // "+" dans regex permet de également les multiples (ex plusieurs espaces)
    str = str.toLowerCase().replace(/\s+|_+/gi, '-')

    return str;
  },

  /**
   * Convert a string to spinal case. 
   * Spinal case is all-lowercase-words-joined-by-dashes.
   * Seconde version, en utilisant string.split + regex 
   */
  spinalCaseSplit: function (str) {

    // 1. Découpe la chaine sur les espaces, tirets et majuscules
    //    "?=" : Lookhead. Permet de matcher le caractère suivant (ici majuscule après minuscule)
    // 2. Réassemble la chaine avec des tirets
    // 3. Mets la chaine en minuscule
    return str.split(/_+|\s+|(?=[A-Z])/g)
      .join('-')
      .toLowerCase();
  }
}