function Conversion() {
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Result;
    if (From === 'USD' && To === "VND") {
        Result = 'Result: ' + (Amount * 23500) + ' Đồng';
    } else if (From === "VND" && To === "USD") {
        Result = 'Result: ' + (Amount / 23500) + ' $'
    } else if (From === "VND") {
        Result = 'Result: ' + (Amount) + ' Đồng'
    } else {
        Result = 'Result: ' + (Amount) + ' $'
    }
    document.getElementById("Result").innerHTML= Result;
}