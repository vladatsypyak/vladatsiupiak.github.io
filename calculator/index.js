let resultWindow = document.querySelector('.result')
let buttonsContainer = document.querySelector('.buttons-wrapper')
let historyDisplay = document.querySelector('.history-text')
let sign = '';
let firstNumber = ''
let secondNumber = ''

function count(a, b) {
    if (sign === "-") return a - b
    if (sign === "+") return +a + +b
    if (sign === "*") return a * b
    if (sign === "/") return a / b
    if (sign === "^") return Math.pow(a, b)
    if (sign === "%") return a / 100 * b
    return 0
}

function clearAll() {
    firstNumber = ''
    secondNumber = ""
    historyDisplay.innerHTML = ""
    resultWindow.innerHTML = '';
    sign = ""
}

function deleteOneSign() {
    resultWindow.innerHTML = resultWindow.innerHTML.slice(0, -1)
}

function checkIfPointCanBePut(str) {
    return !(str.includes(".") || !str.length || (/^\D/.test(str) && str.length === 1));

}


function clickHandler(e) {
    if (e.target.classList.contains('dot') && !checkIfPointCanBePut(resultWindow.innerHTML)) {
        return;
    }
    if (e.target.innerHTML === '0' && resultWindow.innerHTML === "0") {
        return;
    }
    if (e.target.classList.contains('number')) {
        let userNum = e.target.innerHTML
        if (resultWindow.innerHTML.length > 15) return;

        if (sign) {
            if (resultWindow.innerHTML === '-' && !firstNumber) {
                resultWindow.innerHTML = resultWindow.innerHTML + userNum;

            } else {
                secondNumber = secondNumber + userNum
                resultWindow.innerHTML = secondNumber
            }

        } else {

            resultWindow.innerHTML = resultWindow.innerHTML + userNum;
        }
    }
    if (e.target.classList.contains('sign')) {
        sign = e.target.innerHTML


        if (secondNumber) {
            let res = count(firstNumber, secondNumber)
            historyDisplay.innerHTML = res + e.target.innerHTML
            resultWindow.innerHTML = sign
            firstNumber = res
            secondNumber = ""
        } else if (resultWindow.innerHTML) {
            firstNumber = resultWindow.innerHTML
            historyDisplay.innerHTML = resultWindow.innerHTML + e.target.innerHTML
            resultWindow.innerHTML = sign;

        } else if (e.target.innerHTML === "-") {
            resultWindow.innerHTML = sign;
        }


    }
    if (e.target.classList.contains('equal')) {
        let res = count(firstNumber, secondNumber)
        resultWindow.innerHTML = res
        firstNumber = res
        secondNumber = ""
    }
    if (e.target.id === 'refresh') {
        clearAll()
    }

    if (e.target.classList.contains('delete')) {
        deleteOneSign()
    }
}

buttonsContainer.addEventListener('click', function (e) {

    clickHandler(e)
})


