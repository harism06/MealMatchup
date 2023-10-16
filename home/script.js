let allData = [
{
    id: 0,
    name: "Dominos",
    description: "fresh pizzas!",
    location: "123 main street",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Domino%27s_pizza_logo.svg"
    
},
{
    id: 1,
    name: "Pizza Hut",
    description: "pizzzas",
    location: "123abc main street",
    img: "https://www.theexaminernews.com/examiner-news/wp-content/uploads/2012/01/Pizza_Hut.png"
    
},
{
    id: 2,
    name: "McDonalds",
    description: "Fresh BigMacs!",
    location: "123 McStreet",
    ratings: "4.5",
    img: "https://upload.wikimedia.org/wikipedia/commons/3/36/McDonald%27s_Golden_Arches.svg"
},
{
    id: 3,
    name: "Chipotle",
    img: "https://cdn-fsly.yottaa.net/555a305b2bb0ac71b9002d22/4a6e24e07e33013b5e040ead9ecbf798.yottaa.net/v~4b.2eb.0.0/tenantlogos/7616.png"
},
// {
//     id: 3,
//     name: "Subway",
//     img: "https://i.insider.com/57b231c1db5ce94f008b6df4?width=500&format=jpeg&auto=webp"
// },
{
    id: 3,
    name: "Panda Express",
    img: "https://cdn.cookielaw.org/logos/fbcad385-5bbd-48ba-97d4-e5bcabcd10b9/67c1852a-0424-4c45-ae27-c587b2b01745/573a432a-97c1-4b6f-b44e-1911f400a20f/1200px-Panda_Express_logo.svg.png"
},
{
    id: 3,
    name: "Dairy Queen",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Dairy_Queen_logo.svg"
},
{
    id: 3,
    name: "Burger King",
    img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Burger_King_2020.svg"
},
{
    id: 3,
    name: "Whataburger",
    img: "https://upload.wikimedia.org/wikipedia/commons/9/94/Whataburger_logo.svg"
},
{
    id: 3,
    name: "Chick-fil-A",
    img: "https://www.krystalklean.com/wp-content/uploads/2020/04/png-transparent-chick-fil-a-logo-chicken-sandwich-chick-fil-a-breakfast-fast-food-50-food-text-fast-food-restaurant.png"
},
{
    id: 3,
    name: "The Cheesecake Factory",
    img: "https://www.thecheesecakefactory.com/assets/images/Cheesecake_blank_product.svg"
},
{
    id: 3,
    name: "Taco Bell",
    img: "https://upload.wikimedia.org/wikipedia/en/b/b3/Taco_Bell_2016.svg"
},
{
    id: 3,
    name: "KFC",
    img: "https://upload.wikimedia.org/wikipedia/en/5/57/KFC_logo-image.svg"
},
{
    id: 3,
    name: "Wendy's",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRINiC0VEj69xrRNKl52hIhXR82J5_iOZ2S3n3w_SIUwARJHL9t"
},
{
    id: 3,
    name: "Starbucks",
    img: "https://upload.wikimedia.org/wikipedia/de/8/8d/Starbucks_Logo_ab_2011.svg"
},
{
    id: 3,
    name: "Olive Garden",
    img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/353586253_642483044592124_4028098265590833151_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=K4sia0AocxMAX_7flg0&_nc_oc=AQne4_0gYKiPjOYw8TF4vG_niRZz7PGOP8ABBA9hZli0CRCkeqKAcvWgU_1D92dvDVcxntUGD2jkRnL_USdDCTKK&_nc_ht=scontent-hou1-1.xx&oh=00_AfAsIGt-uzbbYIicn5H7t0Oy8u3rXkAbvKBLOSFIyKYhRQ&oe=6530D6F3"
},
{
    id: 3,
    name: "IHOP",
    img: "https://upload.wikimedia.org/wikipedia/commons/a/ad/IHOP_logo.svg"
},
{
    id: 3,
    name: "Taco Cabana",
    img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/280534799_10159886331197156_1719447862838904904_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=KlOKIoFMykUAX9j9qeq&_nc_ht=scontent-hou1-1.xx&oh=00_AfAxoRgsbBxCk2lGG7nrlAMvqtnXsmZLEsLVFX3LVtGhOA&oe=652F9431"
},
{
    id: 3,
    name: "Cane's",
    img: "https://scontent-hou1-1.xx.fbcdn.net/v/t39.30808-6/370432579_10160273297339092_3702215518609665554_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=aNkcQiKcbO8AX9Q-S-D&_nc_ht=scontent-hou1-1.xx&oh=00_AfBtOaJBIOFpwYENxf1OXZxgIPkBmx_54dYKVeDCshqc3w&oe=652FD218"
},
{
    id: 3,
    name: "Popeyes",
    img: "https://upload.wikimedia.org/wikipedia/commons/7/73/Popeyes_logo.svg"
},

]

function loadCards() {
    allData.forEach((data)=>{
        let x = document.querySelector(".search-results")
        console.log(data)
        x.appendChild(getCard(data))})
}

function getCard(cardData) {
    let container = document.createElement("div")
    container.classList.add("restaurant-card")
    let img = document.createElement("img")
    img.classList.add("restaurant-img")
    let title = document.createElement("p")
    title.classList.add("restaurant-title")
    let ratings = document.createElement("p")
    ratings.classList.add("restaurant-ratings")
    let showRestaurantButton = document.createElement("button")
    showRestaurantButton.classList.add("restaurant-button")
    showRestaurantButton.onclick = ()=>{
        location.href = "../restaurant/restaurant-info.html"
    }

    img.setAttribute("src", cardData.img)
    container.appendChild(img)
    title.innerHTML = cardData.name
    container.appendChild(title)
    // ratings.innerHTML = cardData.ratings
    // I will add the rating later but i plan on using images (like stars)
    // so jus like copy paste the img boilerplate
    ratings.innerHTML = "[Ratings]"
    container.appendChild(ratings)
    showRestaurantButton.innerHTML = "View Restaurant"
    container.appendChild(showRestaurantButton)
    console.log(container)
    return container;

}

window.onload = loadCards