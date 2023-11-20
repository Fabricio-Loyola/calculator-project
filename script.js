let output = document.getElementById('output');

function appendToInput(value) {
    output.value += value;
}

function clearOutput() {
    output.value = '';
}

function evaluateExpression() {
    try {
        output.value = eval(output.value);
    } catch (error) {
        output.value = 'Error';
    }
}
