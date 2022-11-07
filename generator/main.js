let userMax = document.getElementById("max")
let userMin = document.getElementById("min")
let generateBtn = document.querySelector(".generate")
let resultWrap = document.querySelector(".result")
let userQuantity = document.querySelector("#amount")
let isRepeatedBtn = document.querySelector("#repeat")
let copyBtn = document.querySelector('.js-copy-btn')

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function displayNumber(arrOfNums) {
    arrOfNums = generate()
    if(arrOfNums){
        resultWrap.innerHTML = arrOfNums.join(" ")
    }
}

function copyTextToClipboard(text) {

    navigator.clipboard.writeText(text).then(function() {
        console.log('Copying to clipboard was successful!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}


function generate() {
    let min = +userMin.value
    let max = +userMax.value
    let isRepeated = isRepeatedBtn.checked
    let quantity = +userQuantity.value

    let arrOfGeneratedNums = []
    if (isRepeated) {
        arrOfGeneratedNums =generateRepeated(quantity, min, max);
    } else {
        arrOfGeneratedNums = generateNotRepeated(min, max, quantity)
    }
    return arrOfGeneratedNums
}
function generateRepeated(quantity, min, max) {

    let arr = []
    for (let i = 0; i < quantity; i++) {
        arr.push(getRandom(min, max))
    }
    return arr
}

function generateNotRepeated(min, max, quantity) {
    if (max- min < quantity){
        alert("Для даного діапазону введена занадто мала кількість")
        return
    }
    let arr = []
    while (arr.length < quantity) {
        let random = getRandom(min, max)
        if (!arr.includes(random)) {
            arr.push(random)
        }
    }
    return arr
}

generateBtn.addEventListener("click", displayNumber)

copyBtn.addEventListener('click', function(event) {
    copyTextToClipboard(resultWrap.innerHTML);
});


