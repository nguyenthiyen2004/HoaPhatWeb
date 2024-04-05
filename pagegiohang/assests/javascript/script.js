function sum(){
    let a = Number(document.getElementById("num1").value);
    let b = Number(document.getElementById("num2").value);

    let sum = parseInt(a) * b;

    document.getElementById('result').innerHTML = sum;
}

  function changeNum1(type){
    let a = Number(document.getElementById("num1").value);
      let newValue = a;
  
      if(type == 'add'){
          newValue = parseInt(a) + 1;
    } else {
        newValue = parseInt(a) - 1;
    }
  
    document.getElementById('num1').value = newValue;
      sum()
}

