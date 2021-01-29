import { basicFunctions } from './basic_alogirthm_scripting'
import { intermediateFunctions } from './intermediate_algorithm_scripting'
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

console.log(basicFunctions.reverse_string("hello world"))

console.log(intermediateFunctions.spinalCaseSplit("HelloWorld"))