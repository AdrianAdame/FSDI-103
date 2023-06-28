var passwordDB = "Test1234";

const login = () => {
    let password = document.getElementById("txtPassword").value

    if(password == passwordDB){
        alert("Welcome, User")
        window.location = "./Assignment 2/index.html"
    }else{
        document.getElementById("error").innerHTML = "Error"

    }
}