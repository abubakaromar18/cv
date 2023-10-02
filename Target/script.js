function calculatePercentage() {
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    var total = num1 + num2;
    var percentage = (num2 / total) * 100;

    document.getElementById('result').innerHTML = "The percentage is: " + percentage.toFixed(2) + "%";
}