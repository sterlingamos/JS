const form = document.getElementById("contactForm");
const nameField = document.getElementById("Name");
const emailField = document.getElementById("Email");
const errname = document.getElementById("errorName");
const erremail = document.getElementById("errorEmail");


const user = document.getElementById("Name");
const pwd = document.getElementById("Email");
const msg = document.getElementById("Message")

user.addEventListener("change", function() {
    this.style.backgroundColor = "rgb(50,22,22)"
    this.style.color = "rgb(255,255,255)"
    this.style.fontStyle = "bold"
    this.style.fontSize = "1.2em"
})

pwd.addEventListener("change", function() {
    this.style.backgroundColor = "rgb(50,22,22)"
    this.style.color = "rgb(255,255,255)"
    this.style.fontStyle = "bold"
    this.style.fontSize = "1.2em"
})

msg.addEventListener("change", function() {
    this.style.backgroundColor = "rgb(50,22,22)"
    this.style.color = "rgb(255,255,255)"
    this.style.fontStyle = "bold"
    this.style.fontSize = "1.2em"
})

form.addEventListener('input', function (e) {
    switch (e.target.id) {
        case 'Name':
            checkName();
            break;
        case 'Email':
            checkEmail();
            break;
    }
});


function checkName() {
    if( nameField.value == "") {
        errname.textContent ="Please enter your name";
    } else {
        errname.textContent ="";
    }
    
}

function checkEmail() {
    if( emailField.value == "") {
        erremail.textContent ="Please enter your email";
    } else {
        erremail.textContent ="";
    }
}

form.addEventListener('submit', function (e) {
    document.write("Thank you for submitting. We'll be in touch soon.")

});







