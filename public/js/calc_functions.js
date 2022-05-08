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
    if (btn.value == "( )") {
        display.value = addDentro(display.value)
    }
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

function addDentro(valor) {
    return "(" + valor + ")"
}

function calcularOperacao() {
    const display = document.getElementById('display');
    let valor2 = display.value;
    valor2 = VerificaRaiz(valor2)

    valor1 = eval(valor2);
    display.value = valor1;
    operador = '';
}

function manipularTeclado() {
    if (/[0-9]/.test(event.key))
        atualizarDisplay({ value: event.key });
}

function VerificaRaiz(string) {
    let newString = string
    while (newString.includes("√")) {
        var indiceRaiz = string.indexOf("√")
        if (verificaOperaçao(string) > indiceRaiz) {

            newString = string.replace(string.substr(indiceRaiz, verificaOperaçao(string)), Math.sqrt(string.substr(indiceRaiz + 1, verificaOperaçao(string) - 1)))

        } else {

            newString = string.replace(string.substr(indiceRaiz, string.length - 1), Math.sqrt(string.substr(indiceRaiz + 1, string.length - 1)))

        }
    }
    return newString
}





function verificaOperaçao(string) {
    if (string.includes("+") || string.includes("-") || string.includes("*") || string.includes("/")) {
        var indicemenor = 10000
        if (string.includes("-") == true && string.indexOf("-") < indicemenor) {
            indicemenor = string.indexOf("-")
        }
        if (string.includes("*") == true && string.indexOf("*") < indicemenor) {
            indicemenor = string.indexOf("*")
        }
        if (string.includes("/") == true && string.indexOf("/") < indicemenor) {
            indicemenor = string.indexOf("/")
        }
        if (string.includes("+") == true && string.indexOf("+") < indicemenor) {
            indicemenor = string.indexOf("+")
        }
    } else {
        indicemenor = string.length
    }
    return indicemenor;
}
