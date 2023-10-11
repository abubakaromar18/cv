function calculatePercentage() {
    var amountNeeded = parseFloat(document.getElementById('num1').value);
    var amountFilled = parseFloat(document.getElementById('num2').value);

    if (isNaN(amountFilled) || isNaN(amountNeeded)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        return;
    }

    var total = amountNeeded + amountFilled;
    var percentage = (amountFilled / total) * 100;
    var amountLeft = (total * .8) - amountFilled;

    if (percentage >= 80){
        document.getElementById('container').style.backgroundColor = "green";
        document.getElementById('result').innerHTML = "The percentage is: " + percentage.toFixed(2) + "%";
        document.getElementById('need').innerHTML = "";
    }
    else{
        document.getElementById('container').style.backgroundColor = "red";
        document.getElementById('result').innerHTML = "The percentage is: " + percentage.toFixed(2) + "%";
        document.getElementById('need').innerHTML = Math.round(amountLeft) + " units left to reach goal";
    }
}