function atualizarDisplay(btn){
    const display = document.getElementById('display');
    if(display.value.length === 9) return;
    if(display.value === '0') display.value = btn.value;
    else display.value += btn.value;
}

function limparDisplay(){
    document.getElementById('display').value = '0';
}

var operador = ''
var valor1 
function atualizarOperacao(btn){
    const display = document.getElementById('display');
    if(btn.value == "( )"){
        display.value = addDentro(display.value)
    }
    if(btn.value == "√"){
        display.value = "√"
     }
    else{
        operador = btn.value;
        valor1 = display.value;
        display.value += btn.value;
    }
    
}

function addDentro(valor){
    return "("+valor+")"
}

function calcularOperacao(){
    const display = document.getElementById('display');
    let valor2 = display.value;
    if(valor2.includes("√")){
        let resultado = Math.sqrt(valor2.substr(valor2.indexOf("√")+1, verificaOperaçao(valor2)-1)).toFixed(2)
        var aposSinal = ""
        if(verificaOperaçao(valor2) != valor2.length){
            aposSinal = valor2.substr(verificaOperaçao(valor2), valor2.length)
            console.log(aposSinal)
        }
        valor2 = resultado+aposSinal
        console.log(valor2)
    }
    valor1 = eval(valor2);
    display.value = valor1;
    operador = '';
}       

function manipularTeclado(){
    if(/[0-9]/.test(event.key))
        atualizarDisplay({value: event.key});
}

function verificaOperaçao(string){
    if(string.includes("+") == true){
        return string.indexOf("+")
    }else if(string.includes("-") == true){
        return string.indexOf("-")
    }else if(string.includes("*") == true){
        return string.indexOf("*")
    }else if(string.includes("/") == true){
        return string.indexOf("/")
    }else{
        return string.length;
    }
}