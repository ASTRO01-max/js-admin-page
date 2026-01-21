let form = document.querySelector(".form")

form.addEventListener("submit", function(e) {
    e.preventDefault()
    let imgLink = document.querySelector(".img-link")
    let productName = document.querySelector(".product-name")
    let productInfo = document.querySelector(".product-info")
    let products = document.querySelector(".products")

    products.innerHTML += `
        <li class="product">
            <img src="${imgLink.value}" alt="mahsulot rasimi">
            <h3>${productName.value}</h3>
            <p>${productInfo.value}</p>
            <button>Ko'rish</button>
        </li>
    `
    
    imgLink.value = ""
    productName.value = ""
    productInfo.value = ""

})