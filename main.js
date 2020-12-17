import functions from './functions.js'
import interfaces from './interfaces.js'

let calculateButton = document.getElementById('calculate')
calculateButton.addEventListener('click', () => {

    let sumDigit = null
    try {
        let input = document.getElementById('input')
        sumDigit = functions.sum_items(input.value)
    }
    catch (error) {
        interfaces.show_error(error)
    }

    interfaces.set_result(sumDigit)
})

console.log(functions.reverse_string("hello"))