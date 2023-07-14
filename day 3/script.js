function calculateEMI() {
    var principal = parseFloat(document.getElementById("principal").value);
    var interest = parseFloat(document.getElementById("interest").value);
    var tenure = parseFloat(document.getElementById("tenure").value);

    var monthlyInterest = interest / 12 / 100;
    var emi = (principal * monthlyInterest * Math.pow(1 + monthlyInterest, tenure)) / (Math.pow(1 + monthlyInterest, tenure) - 1);
    
    document.getElementById("result").innerHTML = "EMI: " + emi.toFixed(2);
}
