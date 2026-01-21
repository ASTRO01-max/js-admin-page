// const adminLogin = "admin"
// const adminPass = "3009"

// let startLogin = prompt("Login kiriting:")
// let startPass = prompt("Parol kiriting:")

// if (startLogin !== adminLogin || startPass !== adminPass){
//     alert("Login yoki parol xato!");
// }

let form = document.querySelector(".form")
let products = document.querySelector(".products")

let storedProducts = JSON.parse(localStorage.getItem("products") || "[]")
if (products) {
    storedProducts.forEach(function(item) {
        products.innerHTML += `
            <li class="product">
                <img src="${item.img}" alt="mahsulot rasimi">
                <h3>${item.name}</h3>
                <p>${item.info}</p>
                <button>Ko'rish</button>
            </li>
        `
    })
}

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault()
        let imgLink = document.querySelector(".img-link")
        let productName = document.querySelector(".product-name")
        let productInfo = document.querySelector(".product-info")

        products.innerHTML += `
            <li class="product">
                <img src="${imgLink.value}" alt="mahsulot rasimi">
                <h3>${productName.value}</h3>
                <p>${productInfo.value}</p>
                <button>Ko'rish</button>
            </li>
        `

        storedProducts.push({
            img: imgLink.value,
            name: productName.value,
            info: productInfo.value
        })
        localStorage.setItem("products", JSON.stringify(storedProducts))
        
        imgLink.value = ""
        productName.value = ""
        productInfo.value = ""
    })
}
