document.addEventListener('DOMContentLoaded', function() {

    function soma (a , b) {
        return a + b;
    }

    function subtrai (a , b) {
        return a - b;
    }

    function multiplica (a , b) {
        return a * b;
    }

    function divide (a , b) {
        return a / b;
    }

    function reset (a , b) {
        return 0;
    }


     let valor1 = document.getElementById('valor1')
    let valor2 = document.getElementById('valor2')
    let caixaResultado = document.getElementById('resultado')


    document.querySelector('.btnSomar').addEventListener('click', function() { 
         let resultado = soma(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado;
    });

    document.querySelector('.btnSubitrair').addEventListener('click', function() {
        let resultado = subtrai(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado;
    });

    document.querySelector('.btnMultiplicar').addEventListener('click', function() {
         let resultado = multiplica(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado;
    });

    document.querySelector('.btnDividir').addEventListener('click', function() {
         let resultado = divide(Number(valor1.value), Number(valor2.value));
        caixaResultado.textContent = resultado;
    });

    document.querySelector('.btnReset').addEventListener('click', function() {
        caixaResultado.textContent = "0";
        valor1.value = "";
        valor2.value = "";
    });
})
