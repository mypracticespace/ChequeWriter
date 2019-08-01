function convertAmountInWords(number) {

    var onesArray = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var tensArray = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    var scale = ['cents', '', 'thousand', ' million', 'billion', 'trillion'];

    
    var input = number.toString().split('.');
    var wholeNumber = input[0];
    var decimal = "";
    if (input.length > 1) {
        var threeDigitDecimal = (input[1] + "00").substring(0, 3);
        var numberForRounding = threeDigitDecimal.substring(0, 2) + '.' + threeDigitDecimal.substring(2, 3); // Added decimal point for rounding
        decimal = Math.round(parseFloat(numberForRounding));
    }
   
    var chunks = [decimal];
    while (wholeNumber.length !== 0) {
        var index = wholeNumber.length > 3 ? wholeNumber.length - 3 : 0;
        chunks.push(wholeNumber.slice(index, wholeNumber.length));
        wholeNumber = wholeNumber.slice(0, index);
    }

    var amount = "";
    for (let i = 0; i < chunks.length; i++) {
        var tens = chunks[i] % 100;
        var tensPlace = "";
        var hundredsPlace = "";

        if (tens < 20) {
            tensPlace = onesArray[tens];
        } else if (tens < 100) {
            tensPlace = `${tensArray[Math.trunc(tens / 10)]} ${onesArray[tens % 10]}`;
        }

        if (chunks[i] >= 100) {
            var digit = Math.trunc(chunks[i] / 100);
            hundredsPlace = `${onesArray[digit]} hundred `;
        }

        var chunkValue = hundredsPlace + tensPlace;
        var scaleValue = chunkValue ? ` ${scale[i]} ` : "";
        var decimalConnector = i === 0 && decimal && decimal !== "00" && Math.trunc(number) ? "and " : "";

        amount = decimalConnector + chunkValue + scaleValue + amount;
    }

    return amount.replace(/  +/g, ' ').trim();
}