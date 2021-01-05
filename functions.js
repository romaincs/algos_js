function sum_items(items) {

    if(isNaN(items) || items < 0)
        throw 'Input must be a positive integer value'
    
    let return_value = 0
    for (var i = 0; i < items.toString().length; i++) {
        return_value += parseInt(items.toString().charAt(i))
    }

    if(return_value >= 10)
        return sum_items(return_value)
    else 
        return return_value
}

function reverse_string(input) {
    let output = '',
        i = input.length-1
    
    while(i >= 0) {
        output += input.charAt(i)
        i--
    }

    return output
}

function findElement(arr, func) {
    return arr.find(func);
}

function truncateString(str, num) {
    return (num < str.length) ? str.substring(0, num) + "..." : str;
}

function repeatStringNumTimes(str, num) {
    let output = ''
    while(num > 0) {
        output = output + str
        num--
    }
    return output
}

function confirmEnding(str, target) {
    return str.lastIndexOf(target) === str.length - target.length;
}

function largestOfFour(arr) {
    return arr.map(
        (e) => e.sort(
            (a,b) => b - a
        )[0]
    )
}

function booWho(bool) {
    return typeof(bool) == 'boolean';
}

function titleCase(str) {
    return str.toLowerCase()
              .split(' ')
              .map(a => a[0].toUpperCase() + a.slice(1))
              .join(' ');
}

function frankenSplice(arr1, arr2, n) {
    return [...arr2.slice(0, n), 
            ...arr1, 
            ...arr2.slice(n)];
}  

function bouncer(arr) {
    return arr.filter(a => a);
}
  
  

export default {sum_items, reverse_string}