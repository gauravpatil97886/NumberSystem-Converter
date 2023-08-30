        function updateResult(result) {
            const resultElement = document.getElementById("conversionResult");
            resultElement.innerHTML = result;
        }

        function convert() {
    const inputNumber = document.getElementById("inputNumber").value;
    const conversionType = document.getElementById("conversionType").value;
    const resultElement = document.getElementById("conversionResult");

    let result;
    switch (conversionType) {
        case "binaryToDecimal":
            result = parseInt(inputNumber, 2);
            break;
        case "binaryToOctal":
            result = parseInt(inputNumber, 2).toString(8);
            break;
        case "binaryToHexadecimal":
            result = parseInt(inputNumber, 2).toString(16).toUpperCase();
            break;
        case "decimalToBinary":
            result = parseInt(inputNumber, 10).toString(2);
            break;
        case "decimalToOctal":
            result = parseInt(inputNumber, 10).toString(8);
            break;
        case "decimalToHexadecimal":
            result = parseInt(inputNumber, 10).toString(16).toUpperCase();
            break;
        case "octalToDecimal":
            result = parseInt(inputNumber, 8);
            break;
        case "octalToBinary":
            result = parseInt(inputNumber, 8).toString(2);
            break;
        case "octalToHexadecimal":
            result = parseInt(inputNumber, 8).toString(16).toUpperCase();
            break;
        case "hexadecimalToDecimal":
            result = parseInt(inputNumber, 16);
            break;
        case "hexadecimalToBinary":
            result = parseInt(inputNumber, 16).toString(2);
            break;
        case "hexadecimalToOctal":
            result = parseInt(inputNumber, 16).toString(8);
            break;
        default:
            result = "Invalid conversion type";
            break;
    }

    if (!isNaN(result)) {
        resultElement.innerHTML = `Output: ${result}`;
    } else {
        resultElement.innerHTML = "Invalid input or conversion type";
    }
}



    
