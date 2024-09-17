document.getElementById('button').onclick = function(){
    let number1 = Number(document.getElementById('number1').value);
    let signal = document.getElementById('signal').value.trim();
    let number2 = Number(document.getElementById('number2').value);

    if (signal == "+"){
        let resultado = number1 + number2;
        alert(resultado);
    }else if (signal == "-"){
        let resultado = number1 - number2;
        alert(resultado);
    }else if (signal == "*"){
        let resultado = number1 * number2;
        alert(resultado);
    }else if (signal == "/"){
        let resultado = number1 / number2;
        alert(resultado);
    }
}
