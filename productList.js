const products = [
    {
        name: "Cookies",
        price: 5,
        image: "media/cookies.jpg",
        category: "food"
    },
    {
        name: "Brownies",
        price: 7,
        image: "media/brownies.jpg",
        category: "food"
    },
    {
        name: "Milkshake",
        price: 8,
        image: "media/milkshake.jpg",
        category: "drink"
    },
    {
        name: "Cupcakes",
        price: 8,
        image: "media/cupcakes.jpg",
        category: "food"
    },
    {
        name: "Donuts",
        price: 6,
        image: "media/donuts.jpg",
        category: "food"
    },
    {
        name: "Coffee",
        price: 5,
        image: "media/coffee.jpeg",
        category: "drink"
    },
    {
        name: "Cake",
        price: 12,
        image: "media/cake.jpg",
        category: "food"
    },
    {
        name: "Tea",
        price: 4,
        image: "media/tea.jpeg",
        category: "drink"
    },
    {
        name: "Muffin",
        price: 4,
        image: "media/muffin.jpg",
        category: "food"
    }
]
let ordered = products;

function renderCards(data) {
    var list = document.querySelector('#products');
    list.innerHTML = "";
    var cards = data.map((product) => 
        `<div class="card">
        <img src=${product.image}>
        <h4>${product.name}: $${product.price}</h4>
    </div>`)

    cards.forEach((card) => {
        list.innerHTML += card;
    })
}

orderCards(document.getElementById("orderBy"))

function orderCards(e) {
    order = document.getElementById(e.id).value;
    console.log(e)
    if(e.id == "orderBy"){
        switch(order) {
            case "lowHigh":
                ordered = products.sort((a, b) => a.price - b.price)
                break;
            case "highLow":
                ordered = products.sort((a, b) => b.price - a.price)
                break;
            case "name":
                ordered = products.sort((a, b) => (a.name.toUpperCase() > b.name.toUpperCase()) ? 1 : -1)
                break;
            default:
                break;
        }
    } else {
        switch(order) {
            case "5>":
                ordered = products.filter((product) => product.price < 5)
                break;
            case "5-10":
                ordered = products.filter((product) => product.price >= 5 && product.price <= 10 )
                break;
            case ">10":
                ordered = products.filter((product) => product.price > 10)
                break;
            case "food":
                ordered = products.filter((product) => product.category == "food")
                break;
            case "drink":
                ordered = products.filter((product) => product.category == "drink")
                break;
            default:
                ordered = products
                break;
        }
    }
    console.log(order)
    renderCards(ordered)
}