
const getNumbers = () => {
    const numOne = document.getElementById('num1')
    const numTwo = document.getElementById('num2')
    const getOper = document.getElementById('opr')

    const num_1 = Number(numOne.value)
    const num_2 = Number(numTwo.value)
    const oper = getOper.value

    const result = document.getElementById('result')

    if (oper == '+') {
        const equal = num_1 + num_2
        result.textContent = equal
    } 
    else if (oper == '-') {
        equal = num_1 - num_2
        result.textContent = equal
    } 
    else if (oper == '*') {
        equal = num_1 * num_2
        result.textContent = equal
    } 
    else if (oper == '/') {
        equal = num_1 / num_2
        result.textContent = equal
    }
    
}

const getMeasure = document.getElementById('calc')
getMeasure.addEventListener('click', getNumbers)