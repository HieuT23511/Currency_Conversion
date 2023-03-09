function Conversion() {
    let Amount = document.getElementById('Amount').value;
    let From = document.getElementById('From').value;
    let To = document.getElementById('To').value;
    let Result;
    if (From === 'USD' && To === "VND") {
        Result = 'Kết quả là: ' + (Amount * 23500) + ' Đồng';
    } else if (From === "VND" && To === "USD") {
        Result = 'Kết quả là: ' + (Amount / 23500) + ' $'
    } else if (From === "VND") {
        Result ='Kết quả là: ' + (Amount) + ' Đồng'
    } else {
        Result ='Kết quả là: ' + (Amount) + ' $'
    }
    document.getElementById("Result").innerHTML= Result;
}