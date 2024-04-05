function sum() {
    let a = Number(document.getElementById("num1").innerHTML);
    let b = Number(document.getElementById("num2").innerHTML);
    let price1 = 2999000;
    let price2 = 1499000;
    let sum = a * price1 + b * price2;
    document.getElementById('result1').innerHTML = sum.toLocaleString('vi-VN') + ' VNĐ';
    let x = document.getElementById('ship').value;
    if (x == 'Chuyển phát nhanh - 80.000VNĐ') {
        sum += 80000;
    } else sum += 120000;
    document.getElementById('result2').innerHTML = sum.toLocaleString('vi-VN') + ' VNĐ';
}
function changeNum1(type) {
    let a = Number(document.getElementById("num1").innerHTML);
    if (type == 'add') {
        a++;
    } else {
        if (a > 1) {
            a--;
        } else
            a = 1;
    }
    if (a < 10) {
        document.getElementById('num1').innerHTML = '0' + a;
    } else
        document.getElementById('num1').innerHTML = a;
    sum()
}
function changeNum2(type) {
    let a = Number(document.getElementById("num2").innerHTML);
    if (type == 'add') {
        a++;
    } else {
        if (a > 1) {
            a--;
        } else
            a = 1;
    }
    if (a < 10) {
        document.getElementById('num2').innerHTML = '0' + a;
    } else
        document.getElementById('num2').innerHTML = a;
    sum()
}
document.getElementById('ship').addEventListener('change', function () {
    sum()
});
document.getElementById('code').addEventListener('input', function () {
    if (this.value.toUpperCase() === 'HOAPHAT') {
        let result2Element = document.getElementById('result2');
        let currentValue = result2Element.innerHTML.replace(/\./g, '').replace(' VNĐ', '');
        console.log(currentValue);
        let newValue = currentValue * 0.9;
        result2Element.innerHTML = newValue.toLocaleString('vi-VN') + ' VNĐ';
    }
    else {
        sum();
    }
});