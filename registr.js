let regist = document.querySelector(".regist")
let startLogin = document.querySelector(".login")
let startPass = document.querySelector(".password")

const adminLogin = "admin"
const adminPass = "3009"

regist.addEventListener("submit", function (e) {
    e.preventDefault()

    let loginValue = startLogin.value.trim()
    let passValue = startPass.value.trim()

    if (loginValue === adminLogin && passValue === adminPass) {
        window.location.href = "./admin.html"
    } else {
        alert("Login yoki parol xato!")
    }
})
