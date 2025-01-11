let initialValue = document.getElementById('output')
let example = document.getElementById('example')
let result = ''
let output = ''
let clear = false

// Функция вычисления start

function evil(fn) {
    return new Function('return ' + fn)();
}

// End

// Функция проверки start

function checking() {
    if (clear) {
        example.innerText = ''
        initialValue.value = ''

        clear = false
    }
}

function checkingForZero() {
    if (Number(initialValue.value[0]) === 0 && initialValue.value[1] !== ',') {
        initialValue.value = ''
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
    initialValue.value = '';
    example.innerHTML = ''
}
function backSpace() {
    let value = initialValue.value.slice(0, -1);
    return initialValue.value = value;
}


// End

// Математические операции start

function funcPlus() {
    if (initialValue.value === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('plus').value;
        result = initialValue.value + calculationSign;
        initialValue.value = ''
    }
}
function funcMinus() {
    if (initialValue.value === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('minus').value;
        result = initialValue.value + calculationSign;
        initialValue.value = ''
    }
}
function funcMultiply() {
    if (initialValue.value === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('multiply').value;
        result = initialValue.value + calculationSign;
        initialValue.value = ''
    }
}
function funcShare() {
    if (initialValue.value === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('share').value;
        result = initialValue.value + calculationSign;
        initialValue.value = ''
    }
}
function funcPercent() {
    if (initialValue.value === '') {
        example.innerText = 'Введите число'
    } else {
        checkingExample()
        let calculationSign = document.getElementById('share').value;
        result = initialValue.value + calculationSign;
        initialValue.value = ''
    }
}
function funkSum() {
    output = result + initialValue.value;
    initialValue.value = evil(output);
    example.innerText = output

    clear = true;
}

function negativeValues() {
    if (initialValue.value === '0') {
        example.innerText = 'Ноль не может быть отрицательным';
    } else {
        let sign = '-'
        let value = sign + initialValue.value;
        return initialValue.value = value;
    }
}

// End

// Добавление цифр start

function addPoint() {
    if (initialValue.value === '' || Boolean(example.innerText) === true) {
        checking()
        initialValue.value = 0
        const value = document.getElementById('point').value;
        return initialValue.value += value;
    } else {
        const value = document.getElementById('point').value;
        return initialValue.value += value;
    }


}
function addNumberZero() {
    checking()
    checkingForZero()
    const value = document.getElementById('0').value;
    return initialValue.value += value;
}
function addNumberOne() {
    checking()
    checkingForZero()
    const value = document.getElementById('1').value;
    return initialValue.value += value;
}
function addNumberTwo() {
    checking()
    checkingForZero()
    const value = document.getElementById('2').value;
    return initialValue.value += value;
}
function addNumberThree() {
    checking()
    checkingForZero()
    const value = document.getElementById('3').value;
    return initialValue.value += value;
}
function addNumberFour() {
    checking()
    checkingForZero()
    const value = document.getElementById('4').value;
    return initialValue.value += value;
}
function addNumberFife() {
    checking()
    checkingForZero()
    const value = document.getElementById('5').value;
    return initialValue.value += value;
}
function addNumberSix() {
    checking()
    checkingForZero()
    const value = document.getElementById('6').value;
    return initialValue.value += value;
}
function addNumberSeven() {
    checking()
    checkingForZero()
    const value = document.getElementById('7').value
    return initialValue.value += value
}
function addNumberEight() {
    checking()
    checkingForZero()
    const value = document.getElementById('8').value
    return initialValue.value += value
}
function addNumberNine() {
    checking()
    checkingForZero()
    const value = document.getElementById('9').value
    return initialValue.value += value
}

// End

