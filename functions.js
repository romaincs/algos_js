function sum_items(items) {

    if(isNaN(items) || items < 0)
        throw "Input must be a positive integer value"
    
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

export default {sum_items, reverse_string}