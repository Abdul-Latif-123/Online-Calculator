resultValue = 0;

// Display a number on the text field
function displayNumber(num) {
    result.value += num
}

function clearText() {
    result.value = ""
}

function performOperation() {
    result.value = eval(result.value);
}

function backSpace() {
    result.value = result.value.slice(0, -1);
}