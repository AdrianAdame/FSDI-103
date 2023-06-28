function calculate(){
    let a = parseInt(document.getElementById("number-a").value);
    let op = document.getElementById("operation").value
    let b = parseInt(document.getElementById("number-b").value);

    let res = 0

    if(op == "+"){
        res = a +b;
    }

    if(op == "-"){
        res= a - b;
    }

    if(op == "*"){
        res = a * b;
    }

    if(op == "/"){
        res = b != 0 ? a / b : "Can't divide by zero";
    }

    let results = document.getElementById("results")

    results.innerHTML += `
        <p>${a} ${op} ${b} = ${res}</p>
    `
}