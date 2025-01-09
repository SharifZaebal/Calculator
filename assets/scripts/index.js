let initialValue = document.getElementById('output')

function clearAll() {
    initialValue.value = '';
}
function backSpace() {
    let value = initialValue.value.slice(0, -1);
    return initialValue.value = value;
}

function addPoint() {
    const value = document.getElementById('point').value;
    return initialValue.value += value;
}
function addNumberZero() {
    const value = document.getElementById('0').value;
    return initialValue.value += value;
}
function addNumberOne() {
    const value = document.getElementById('1').value;
    return initialValue.value += value;
}
function addNumberTwo() {
    const value = document.getElementById('2').value;
    return initialValue.value += value;
}
function addNumberThree() {
    const value = document.getElementById('3').value;
    return initialValue.value += value;
}
function addNumberFour() {
    const value = document.getElementById('4').value;
    return initialValue.value += value;
}
function addNumberFife() {
    const value = document.getElementById('5').value;
    return initialValue.value += value;
}
function addNumberSix() {
    const value = document.getElementById('6').value;
    return initialValue.value += value;
}
function addNumberSeven() {
    const value = document.getElementById('7').value
    return initialValue.value += value
}
function addNumberEight() {
    const value = document.getElementById('8').value
    return initialValue.value += value
}
function addNumberNine() {
    const value = document.getElementById('9').value
    return initialValue.value += value
}

