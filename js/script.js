function validate() {
    var email = document.forms["loginForm"]["email"].value;
    var pass = document.forms["loginForm"]["password"].value;
    if (email === "niki@mail.com" && pass === "niki123") {
        if(pass === "niki123") {}
        alert("Welcome Niki");
        // localStorage.setItem("auth", 1)
        window.location.replace("index.html")
    }
    else {
        alert("Please enter the valid Email & Password")
    }
}

let changeIcon = function(icon) {
    icon.classList.toggle('bi-x')
}

function borrow() {
    let transform = document.getElementById('borrow')
    transform.style.backgroundColor = 'rgba(153, 216, 21, 1)'
    transform.innerHTML = 'Borrowed'
}