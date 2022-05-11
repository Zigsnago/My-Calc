function atualizarDisplay(btn) {
    const display = document.getElementById('display');
    if (display.value.length === 11) return;
    if (display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay() {
    document.getElementById('display').value = '0';
}

var operador = ''
var valor1
function atualizarOperacao(btn) {
    const display = document.getElementById('display');

    if (btn.value == "√") {
        if (display.value == "0") {
            display.value = "√"
        } else {
            display.value += "√"
        }
    }
    else {
        operador = btn.value;
        valor1 = display.value;
        display.value += btn.value;
    }

}



function calcularOperacao() {
    const display = document.getElementById('display');
    let valor2 = display.value;
    

    valor1 = eval(fazRaiz(valor2));
    display.value = valor1;
    operador = '';
}

function manipularTeclado() {
    if (/[0-9]/.test(event.key))
        atualizarDisplay({ value: event.key });
}


function fazRaiz(string){
    return string.replace(/√([0-9]+)/g, "Math.sqrt($1)").replace(/√\(/, "Math.sqrt(")
}


