let initialValue = document.getElementById('output')
let example = document.getElementById('example')
let result = ''
let output = ''
let clear = false
const argumentPoint = '.'

// Функция вычисления start

function evil(fn) {
    let func = new Function('return ' + fn)();
    return initialValue.innerText = func
}

// End

// Функция проверки start

function checking() {
    if (clear) {
        example.innerText = ''
        initialValue.innerText = ''

        clear = false
    }
}

function checkingForZero() {
    if (Number(initialValue.innerText[0]) === 0 && initialValue.innerText[1] !== '.') {
        initialValue.innerText = ''
    }
}

function checkingExample() {
    if (Boolean(example.innerText) === true) {
        example.innerText = ''
    }
}
// End

// Функции очистки поле ввода start

function clearAll() {
    result = ''
    output = ''
    initialValue.innerText = '';
    example.innerHTML = ''
}
function backSpace() {
    let value = initialValue.innerText.slice(0, -1);
    return initialValue.innerText = value;
}


// End

// Математические операции start

function funcPlus() {
    if (initialValue.innerText === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('plus').value;
        result = initialValue.innerText + calculationSign;
        initialValue.innerText = ''
    }
}
function funcMinus() {
    if (initialValue.innerText === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('minus').value;
        result = initialValue.innerText + calculationSign;
        initialValue.innerText = ''
    }
}
function funcMultiply() {
    if (initialValue.innerText === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('multiply').value;
        result = initialValue.innerText + calculationSign;
        initialValue.innerText = ''
    }
}
function funcShare() {
    if (initialValue.innerText === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('share').value;
        result = initialValue.innerText + calculationSign;
        initialValue.innerText = ''
    }
}
function funcPercent() {
    if (initialValue.innerText === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('share').value;
        result = initialValue.innerText + calculationSign;
        initialValue.innerText = ''
    }
}
function funkSum() {
    output = result + initialValue.innerText;
    initialValue.innerText = evil(output);
    example.innerText = output

    clear = true;
}

function negativeValues() {
    if (initialValue.innerText === '0') {
        example.innerText = 'Ноль не может быть отрицательным';
    } else if (initialValue.innerText.startsWith('-')) {
        initialValue.innerText = initialValue.innerText.substring(1);
    } else if (initialValue.innerText !== '') {
        initialValue.innerText = '-' + initialValue.innerText;
    } else if (initialValue.innerText === '') {
        initialValue.innerText = '-0';
    }
}

// End

// Добавление цифр start

function addPoint() {
    if (initialValue.innerText === '' || Boolean(example.innerText) === true) {
        checking()
        initialValue.innerText = 0
        const value = '.'
        return initialValue.innerText += value;
    } else if(Boolean(initialValue.innerText.includes('.')) === true) {

    } else {
        const value = '.'
        return initialValue.innerText += value;
    }
}
function addNumberZero() {
    checking()
    checkingForZero()
    const value = 0
    return initialValue.innerText += value
}
function addNumberOne() {
    checking()
    checkingForZero()
    const value = 1
    return initialValue.innerText += value
}
function addNumberTwo() {
    checking()
    checkingForZero()
    const value = 2
    return initialValue.innerText += value
}
function addNumberThree() {
    checking()
    checkingForZero()
    const value = 3
    return initialValue.innerText += value
}
function addNumberFour() {
    checking()
    checkingForZero()
    const value = 4
    return initialValue.innerText += value
}
function addNumberFife() {
    checking()
    checkingForZero()
    const value = 5
    return initialValue.innerText += value
}
function addNumberSix() {
    checking()
    checkingForZero()
    const value = 6
    return initialValue.innerText += value
}
function addNumberSeven() {
    checking()
    checkingForZero()
    const value = 7
    return initialValue.innerText += value
}
function addNumberEight() {
    checking()
    checkingForZero()
    const value = 8
    return initialValue.innerText += value
}
function addNumberNine() {
    checking()
    checkingForZero()
    const value = 9
    return initialValue.innerText += value
}

// End

