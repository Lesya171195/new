
window.onload = function () {
    let fullName = document.getElementById("fullName");
    let yourUsername = document.getElementById("yourUsername");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeatPassword");
    let checkbox = document.getElementById("checkboxBig");
    let button = document.getElementById("button");
    let button2 = document.getElementById("popupBtn");
    let link = document.getElementById("linkLogin");
    let title = document.getElementById("title");
    let tittle = document.getElementById("title");

    let inputs = [fullName.parentNode, email.parentNode, repeatPassword.parentNode, checkbox.parentNode, link];

    fullName.onkeydown = (e) => {
        let number = parseInt(e.key)
        if (!isNaN(number)) {
            return false;
        }
    }
    yourUsername.onkeydown = (e) => {
        if (e.key === "." || e.key ===",") {
            return false;
        }
    }

    button.addEventListener("click", signUp);


    function signUp() {
        if (fullName.value === "") {
            alert("Заполните поле Full Name")
            return false;
        } else if (yourUsername.value === "") {
            alert("Заполните поле Your username")
            return false;
        } else if (email.value === "") {
            alert("Заполните поле E-mail")
            return false;
        } else if (password.value === "") {
            alert("Заполните поле Password")
            return false;
        } else if (repeatPassword.value === "") {
            alert("Заполните поле Repeat Password")
            return false;
        } else if (password.value.length < 8) {
            alert("Введите пароль, содержащий не менее 8 символов")
            return false;
        } else if (password.value !== repeatPassword.value) {
            alert("К сожалению, введённые пароли не совпадают")
            return false;
        } else if (!checkbox.checked) {
            alert('Необходимо согласие с условиями обслуживания')
            return false;
        } else {
            document.getElementsByClassName("popup")[0].style.display = "block";
            document.getElementsByClassName("container")[0].style.display = "none";
        }
    }

    checkbox.onclick = function (event) {
        if (checkbox.checked) {
            console.log("Согласен")
        } else {
            console.log("Не согласен")
        }
    }
    function remove() {
        inputs.forEach(input => {
            input.remove();
        })
        button.removeEventListener("click", signUp);
        button.addEventListener("click", login);
    }

    button2.onclick = function (event) {
    document.getElementsByClassName("popup")[0].style.display = "none";
    document.getElementsByClassName("container")[0].style.display = "flex";
    addEventListener("click", remove);
    yourUsername.value = "";
    password.value = "";
    title.innerText = "Log in to the system";
    button.innerText = "Sign In"
    }
    function login() {
        if (yourUsername.value === "" || password.value === "") {
            alert("Заполните все поля, пожалуйста")
        } else {
            alert("Добро пожаловать, " + yourUsername.value)
        }
    }
}
