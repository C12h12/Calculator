// Append a value to the result field
function appendToResult(value) {
    document.getElementById("result").value += value;
}

// Clear the result field
function clearResult() {
    document.getElementById("result").value = '';
}

// Calculate the result
function calculateResult() {
    const resultField = document.getElementById("result");
    try {
        resultField.value = eval(resultField.value); // Evaluate the expression
    } catch (error) {
        resultField.value = 'Error'; // Display error if the input is invalid
    }
}
