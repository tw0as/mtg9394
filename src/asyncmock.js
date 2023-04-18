const products = [
    {name: "Abu Ja Far", price: 73.65, id: "arn1", idCat: "white", img: "../img/arn1.jpg", oracle: "When Abu Ja'far dies, destroy all creatures blocking or blocked by it. They can’t be regenerated."},
    {name: "Army of Allah", price: 22.70, id: "arn2", idCat: "white", img: "../img/arn2.jpg"},
//    {name: "Camel", price: 10.34, id: 3, idCat: "white", img: "./img/arn3.jpg"},
//    {name: "Eye for an Eye", price: 40.85, id: 4, idCat: "white", img: "./img/arn4.jpg"},
//    {name: "", price: , id: 5, idCat: white, img: "./img/arn5.jpg"},
//    {name: "", price: , id: 6, idCat: white, img: "./img/arn6.jpg"},
//    {name: "", price: , id: 7, idCat: white, img: "./img/arn7.jpg"},
//    {name: "", price: , id: 8, idCat: white, img: "./img/arn8.jpg"},
//    {name: "", price: , id: 9, idCat: white, img: "./img/arn9.jpg"},
//   {name: "", price: , id: 10, idCat: white, img: "./img/arn10.jpg"},
//    {name: "", price: , id: 11, idCat: white, img: "./img/arn11.jpg"},
    {name: "Dandân", price: 17.66, id: "arn12", idCat: "blue", img: "../img/arn12.jpg"},
    {name: "Fishliver Oil", price: 5.89, id: "arn13", idCat: "blue", img: "../img/arn13.jpg"},
//    {name: "", price: , id: 14, idCat: blue, img: "./img/arn14.jpg"},
//    {name: "", price: , id: 15, idCat: blue, img: "./img/arn15.jpg"},
//    {name: "", price: , id: 16, idCat: blue, img: "./img/arn16.jpg"},
//    {name: "", price: , id: 17, idCat: blue, img: "./img/arn17.jpg"},
//    {name: "", price: , id: 18, idCat: blue, img: "./img/arn18.jpg"},
//   {name: "", price: , id: 19, idCat: blue, img: "./img/arn19.jpg"},
//    {name: "", price: , id: 20, idCat: blue, img: "./img/arn20.jpg"},
//    {name: "", price: , id: 21, idCat: blue, img: "./img/arn21.jpg"},
//    {name: "", price: , id: 22, idCat: blue, img: "./img/arn22.jpg"},
    {name: "Cuombajj Witches", price: 15.11, id: "arn23", idCat: "black", img: "../img/arn23.jpg"},
    {name: "El-Hajjâj", price: 58, id: "arn24", idCat: "black", img: "../img/arn24.jpg"},
//    {name: "", price: , id: 25, idCat: black, img: "./img/arn25.jpg"},
//    {name: "", price: , id: 26, idCat: black, img: "./img/arn26.jpg"},
//    {name: "", price: , id: 27, idCat: black, img: "./img/arn27.jpg"},
//    {name: "", price: , id: 28, idCat: black, img: "./img/arn28.jpg"},
//    {name: "", price: , id: 29, idCat: black, img: "./img/arn29.jpg"},
//    {name: "", price: , id: 30, idCat: black, img: "./img/arn30.jpg"},
//    {name: "", price: , id: 31, idCat: black, img: "./img/arn31.jpg"},
//    {name: "", price: , id: 32, idCat: black, img: "./img/arn32.jpg"},
//    {name: "", price: , id: 33, idCat: black, img: "./img/arn33.jpg"},
//    {name: "", price: , id: 34, idCat: red, img: "./img/arn34.jpg"},
//    {name: "", price: , id: 35, idCat: red, img: "./img/arn35.jpg"},
//    {name: "", price: , id: 36, idCat: red, img: "./img/arn36.jpg"},
//    {name: "", price: , id: 37, idCat: red, img: "./img/arn37.jpg"},
//    {name: "", price: , id: 38, idCat: red, img: "./img/arn38.jpg"},
//    {name: "", price: , id: 39, idCat: red, img: "./img/arn39.jpg"},
//    {name: "", price: , id: 40, idCat: red, img: "./img/arn40.jpg"},
//    {name: "", price: , id: 41, idCat: red, img: "./img/arn41.jpg"},
//    {name: "", price: , id: 42, idCat: red, img: "./img/arn42.jpg"},
//    {name: "", price: , id: 43, idCat: red, img: "./img/arn43.jpg"},
//    {name: "", price: , id: 44, idCat: red, img: "./img/arn44.jpg"},
//    {name: "", price: , id: 45, idCat: green, img: "./img/arn45.jpg"},
//    {name: "", price: , id: 46, idCat: green, img: "./img/arn46.jpg"},
//    {name: "", price: , id: 47, idCat: green, img: "./img/arn47.jpg"},
//    {name: "", price: , id: 48, idCat: green, img: "./img/arn48.jpg"},
//    {name: "", price: , id: 49, idCat: green, img: "./img/arn49.jpg"},
//    {name: "", price: , id: 50, idCat: green, img: "./img/arn50.jpg"},
//    {name: "", price: , id: 51, idCat: green, img: "./img/arn51.jpg"},
//    {name: "", price: , id: 52, idCat: green, img: "./img/arn52.jpg"},
//    {name: "", price: , id: 53, idCat: green, img: "./img/arn53.jpg"},
//    {name: "", price: , id: 54, idCat: green, img: "./img/arn54.jpg"},
//    {name: "", price: , id: 55, idCat: green, img: "./img/arn55.jpg"},
//    {name: "", price: , id: 56, idCat: brown, img: "./img/arn56.jpg"},
//    {name: "", price: , id: 57, idCat: brown, img: "./img/arn57.jpg"},
//    {name: "", price: , id: 58, idCat: brown, img: "./img/arn58.jpg"},
//    {name: "", price: , id: 59, idCat: brown, img: "./img/arn59.jpg"},
//    {name: "", price: , id: 60, idCat: brown, img: "./img/arn60.jpg"},
//    {name: "", price: , id: 61, idCat: brown, img: "./img/arn61.jpg"},
//    {name: "", price: , id: 62, idCat: brown, img: "./img/arn62.jpg"},
//    {name: "", price: , id: 63, idCat: brown, img: "./img/arn63.jpg"},
//    {name: "", price: , id: 64, idCat: brown, img: "./img/arn64.jpg"},
//    {name: "", price: , id: 65, idCat: brown, img: "./img/arn65.jpg"},
//    {name: "", price: , id: 66, idCat: brown, img: "./img/arn66.jpg"},
//    {name: "", price: , id: 67, idCat: brown, img: "./img/arn67.jpg"},
//    {name: "", price: , id: 68, idCat: brown, img: "./img/arn68.jpg"},
//    {name: "", price: , id: 69, idCat: brown, img: "./img/arn69.jpg"},
//    {name: "", price: , id: 70, idCat: none, img: "./img/arn70.jpg"},
//    {name: "", price: , id: 71, idCat: none, img: "./img/arn71.jpg"},
//    {name: "", price: , id: 72, idCat: none, img: "./img/arn72.jpg"},
//    {name: "", price: , id: 73, idCat: none, img: "./img/arn73.jpg"},
//    {name: "", price: , id: 74, idCat: none, img: "./img/arn74.jpg"},
//    {name: "", price: , id: 75, idCat: none, img: "./img/arn75.jpg"},
//    {name: "", price: , id: 76, idCat: none, img: "./img/arn76.jpg"},
//    {name: "", price: , id: 77, idCat: none, img: "./img/arn77.jpg"},
//    {name: "", price: , id: 78, idCat: none, img: "./img/arn78.jpg"},

]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products);
        }, 1000)
    } )
}

export const getAProduct = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const product = products.find(prod => prod.id === id)
        }, 1000)
    })
}

export const getProductsByCat = (idCategory) => {
    return new Promise( resolve => {
        setTimeout( ()=> {
            const prodsCat = products.filter(prod => prod.idCat === idCategory);
            resolve(prodsCat);
        }, 1000)
    })
}