const errorMsg = (type, msg) => {
    document.body.innerHTML += `<p>You had an error of the type: ${type}</p>`
    document.body.innerHTML += msg
    //document.write(`<p>You had an error of the type: ${type}</p>`);
    //document.write(msg);
}



const getUserAge = (bornYear) => {
    const currentYear = new Date().getFullYear();
    const age = (currentYear - parseInt(bornYear));
    document.body.innerHTML += `<p>Age: ${age} </p>`;
    //document.write(`<p>Age: ${age} </p>`);
    errorMsg("No all data consideration", "We are not considering the birth month");
    return age;
}

const calculateSum = () => {
    const a = prompt("Enter number 1: ")
    const b= prompt("Enter number 2: ")
    const sum = parseInt(a) + parseInt(b);
    document.body.innerHTML += `<p>${a} + ${b} = ${sum}</p>`
    return sum
}

/*
let userName = prompt("Enter your name: ");
let userEmail = prompt("Enter your email: ");
let userPass = prompt("Enter your pass: ");
let userAge = prompt("Enter your Age");
let userCountry = prompt("Enter your Country: ");
let userMonSalary = prompt("Enter your Monthly Salary: ");
let userAnnualSalary = userMonSalary * 12;

let todayDate = new Date();


// document.write(`
// <p>Name: ${userName}</p>
// <p>Email: ${userEmail}</p>
// <p>Yearly Salary: ${userAnnualSalary}</p>
// `);
*/