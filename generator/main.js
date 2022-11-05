let userMax = document.getElementById("max")
let userMin = document.getElementById("min")
let generateBtn = document.querySelector(".generate")
let resultWrap = document.querySelector(".result_wrap")
let userQuantity = document.querySelector("#amount")
let isRepeatedBtn = document.querySelector("#repeat")

function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;

}

function displayNumber(arrOfNums) {
    arrOfNums = generate()
    resultWrap.innerHTML = arrOfNums.join(" ")
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
    let arr = []
    while (arr.length < quantity) {
        let random = getRandom(min, max)
        if (!arr.includes(random)) {
            arr.push(random)
        }
    }
    return arr
}

console.log(generateNotRepeated(1, 5, 3));
generateBtn.addEventListener("click", displayNumber)