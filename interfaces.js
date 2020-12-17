function show_error(error) {
    let errorSpan = document.getElementById('error')
    console.error(error)
    errorSpan.innerText = 'Error : ' + error    
}

function set_result(result) {
    let resultInput = document.getElementById('result')
    resultInput.value = result
}

export default { show_error, set_result }