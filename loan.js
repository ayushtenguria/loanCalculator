function computeLoan() {
    var amount = document.getElementById("amount").value;
    var interest = document.getElementById("interest").value;
    var month = document.getElementById("month").value;

    var interest = (amount * (interest_rate* .01))/ month;
    var payment = ((amount/month)*interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('payment').innerHTML = "Your Monthly Payment = "+payment;  
}   