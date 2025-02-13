
function calcular(event){
    event.preventDefault(); // Evita o recarregamento da página

    let n1 = parseFloat(document.getElementById("n1").value)
    let n2 = parseFloat(document.getElementById("n2").value)
    let selector = document.getElementById("selector").value

    let calculo;
    let msg = "";

    switch(selector){
        case "+":
            calculo = Math.round((n1 + n2));
            msg = "Resultado:  " + n1 + " + " + n2 + " = " + calculo;
            break;

        case "-":
            calculo = Math.round((n1 - n2));
            msg = "Resultado = " + n1 + " - " + n2 + " = " + calculo;
            break;

        case "*":
            calculo = Math.round((n1 * n2));
            msg = "Resultado = " + n1 + " * " + n2 + " = " + calculo;
            break;
            
        case "/":
            calculo = Math.round((n1 / n2));
            msg = "Resultado = " + n1 + " / " + n2 + " = " + calculo;
            break;

    }

    document.getElementById("resultado").innerHTML = msg; 
}

document.getElementById("form").addEventListener("submit", calcular);
