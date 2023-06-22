/*
alert("Hello Cohort 39")
prompt("Ass your name: ")
document.write("We use the console for debug")
console.log("This is a text")
console.error("This is an error")
console.warn("This is a warning")
*/

var user = "Adrian";
var age = 99;
var isStudent = true;

var normalAge = age - 78;

document.write(`
<p><b>Name:</b> ${user}</p>
<p><b>Age:</b> ${normalAge}</p>
<p><b>Active Student:</b> ${isStudent}</p>
`);

document.write("<hr />");

let jobTitle = "IoT Engineer";
let geoLocation = "Tijuana";
let partnerName = "Lisa Manobal";
let numberChildren = 1;

document.write(`
    <p>You will be a <b>${jobTitle}</b> in <b>${geoLocation}</b>, 
    and married to <b>${partnerName}</b> with <b>${numberChildren}</b> kid</p>
`);

document.write("<hr />");

let userName = "Adrian";
let userEmail = "adrian.adame@uabc.edu.mx";
let userPass = "hello123";
let userAge = 21;
let userCountry = "Mexico";
let userMonSalary = 1000;
let userAnnualSalary = userMonSalary * 12;

console.log(userName, userEmail, userAnnualSalary);