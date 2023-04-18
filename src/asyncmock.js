const products = [
    {name: "Abu Ja'far", price: 73.65, id: "arn1", idCat: "white", img: "../img/arn1.jpg"},
    {name: "Army of Allah", price: 22.70, id: "arn2", idCat: "white", img: "../img/arn2.jpg"},
    {name: "Camel", price: 10.34, id: "arn3", idCat: "white", img: "../img/arn3.jpg"},
    {name: "Eye for an Eye", price: 40.85, id: "arn4", idCat: "white", img: "../img/arn4.jpg"},
    {name: "Jihad", price: "Out of Stock", id: "arn5", idCat: "white", img: "../img/arn5.jpg"},
    {name: "King Suleiman", price: 181.24, id: "arn6", idCat: "white", img: "../img/arn6.jpg"},
    {name: "Moorish Cavalry", price: 8.58, id: "arn7", idCat: "white", img: "../img/arn7.jpg"},
    {name: "Piety", price: 5.74, id: "arn8", idCat: "white", img: "../img/arn8.jpg"},
    {name: "Repentant Blacksmith", price: 86.99, id: "arn9", idCat: "white", img: "../img/arn9.jpg"},
    {name: "Shahrazad", price: 552.85, id: "arn10", idCat: "white", img: "../img/arn10.jpg"},
    {name: "War Elephant", price: 8.38, id: "arn11", idCat: "white", img: "../img/arn11.jpg"},
    {name: "Dandân", price: 17.66, id: "arn12", idCat: "blue", img: "../img/arn12.jpg"},
    {name: "Fishliver Oil", price: 5.89, id: "arn13", idCat: "blue", img: "../img/arn13.jpg"},
    {name: "Flying Men", price: 18.05, id: "arn14", idCat: "blue", img: "../img/arn14.jpg"},
    {name: "Giant Tortoise", price: 5.69, id: "arn15", idCat: "blue", img: "../img/arn15.jpg"},
    {name: "Island Fish Jasconius", price: 75.99, id: "arn16", idCat: "blue", img: "../img/arn16.jpg"},
    {name: "Merchant Ship", price: 51.14, id: "arn17", idCat: "blue", img: "../img/arn17.jpg"},
    {name: "Old Man of the Sea", price: 462.62, id: "arn18", idCat: "blue", img: "../img/arn18.jpg"},
    {name: "Serendib Djinn", price: 210.94, id: "arn19", idCat: "blue", img: "../img/arn19.jpg"},
    {name: "Serendib Efreet", price: 699, id: "arn20", idCat: "blue", img: "../img/arn20.jpg"},
    {name: "Sindbad", price: 40.66, id: "arn21", idCat: "blue", img: "../img/arn21.jpg"},
    {name: "Unstable Mutation", price: 6.67, id: "arn22", idCat: "blue", img: "../img/arn22.jpg"},
    {name: "Cuombajj Witches", price: 15.11, id: "arn23", idCat: "black", img: "../img/arn23.jpg"},
    {name: "El-Hajjâj", price: 58, id: "arn24", idCat: "black", img: "../img/arn24.jpg"},
    {name: "Erg Raiders", price: 6.26, id: "arn25", idCat: "black", img: "../img/arn25.jpg"},
    {name: "Guardian Beast", price: 648.17, id: "arn26", idCat: "black", img: "../img/arn26.jpg"},
    {name: "Hasran Ogress", price: 6.71, id: "arn27", idCat: "black", img: "../img/arn27.jpg"},
    {name: "Junún Efreet", price: 81, id: "arn28", idCat: "black", img: "../img/arn28.jpg"},
    {name: "Juzám Djinn", price: "Out of Stock", id: "arn29", idCat: "black", img: "../img/arn29.jpg"},
    {name: "Khabál Ghoul", price: 134.97, id: "arn30", idCat: "black", img: "../img/arn30.jpg"},
    {name: "Oubliette", price: 33.44, id: "arn31", idCat: "black", img: "../img/arn31.jpg"},
    {name: "Sorceress Queen", price: 245.83, id: "arn32", idCat: "black", img: "../img/arn32.jpg"},
    {name: "Stone-Throwing Devils", price: "Out of Stock", id: "arn33", idCat: "black", img: "../img/arn33.jpg"},
    {name: "Aladdin", price: 110.97, id: "arn34", idCat: "red", img: "../img/arn34.jpg"},
    {name: "Ali Baba", price: 32.08, id: "arn35", idCat: "red", img: "../img/arn35.jpg"},
    {name: "Ali from Cairo", price: 444.92, id: "arn36", idCat: "red", img: "../img/arn36.jpg"},
    {name: "Bird Maiden", price: 12.90, id: "arn37", idCat: "red", img: "../img/arn37.jpg"},
    {name: "Desert Nomads", price: 10.82, id: "arn38", idCat: "red", img: "../img/arn38.jpg"},
    {name: "Hurr Jackal", price: 5.61, id: "arn39", idCat: "red", img: "../img/arn39.jpg"},
    {name: "Kird Ape", price: 11.67, id: "arn40", idCat: "red", img: "../img/arn40.jpg"},
    {name: "Magnetic Mountain", price: 21.76, id: "arn41", idCat: "red", img: "../img/arn41.jpg"},
    {name: "Mijae Djinn", price: 74.09, id: "arn42", idCat: "red", img: "../img/arn42.jpg"},
    {name: "Rukh Egg", price: 31.37, id: "arn43", idCat: "red", img: "../img/arn43.jpg"},
    {name: "Ydwen Efreet", price: 107.16, id: "arn44", idCat: "red", img: "../img/arn44.jpg"},
    {name: "Cyclone", price: 29.89, id: "arn45", idCat: "green", img: "../img/arn45.jpg"},
    {name: "Desert Twister", price: 53.09, id: "arn46", idCat: "green", img: "../img/arn46.jpg"},
    {name: "Drop of Honey", price: 724.44, id: "arn47", idCat: "green", img: "../img/arn47.jpg"},
    {name: "Erhnam Djinn", price: 349.98, id: "arn48", idCat: "green", img: "../img/arn48.jpg"},
    {name: "Ghazbán OGre", price: 5.84, id: "arn49", idCat: "green", img: "../img/arn49.jpg"},
    {name: "Ifh-Bíff Efreet", price: 155, id: "arn50", idCat: "green", img: "../img/arn50.jpg"},
    {name: "Metamorphosis", price: 5.93, id: "arn51", idCat: "green", img: "../img/arn51.jpg"},
    {name: "Nafs Asp", price: 5.68, id: "arn52", idCat: "green", img: "../img/arn52.jpg"},
    {name: "Sandstorm", price: 7.65, id: "arn53", idCat: "green", img: "../img/arn53.jpg"},
    {name: "Singing Tree", price: 252.63, id: "arn54", idCat: "green", img: "../img/arn54.jpg"},
    {name: "Wyluli Wolf", price: 14.68, id: "arn55", idCat: "green", img: "../img/arn55.jpg"},
    {name: "Aladdin's Lamp", price: 49.81, id: "arn56", idCat: "artifact", img: "../img/arn56.jpg"},
    {name: "Aladdin's Ring", price: 103.91, id: "arn57", idCat: "artifact", img: "../img/arn57.jpg"},
    {name: "Bottle of Suleiman", price: 50.02, id: "arn58", idCat: "artifact", img: "../img/arn58.jpg"},
    {name: "Brass Man", price: 74.60, id: "arn59", idCat: "artifact", img: "../img/arn59.jpg"},
    {name: "City in a Bottle", price: 381.13, id: "arn60", idCat: "artifact", img: "../img/arn60.jpg"},
    {name: "Dancing Scimitar", price: 54.91, id: "arn61", idCat: "artifact", img: "../img/arn61.jpg"},
    {name: "Ebony Horse", price: 49.70, id: "arn62", idCat: "artifact", img: "../img/arn62.jpg"},
    {name: "Flying Carpet", price: 60.31, id: "arn63", idCat: "artifact", img: "../img/arn63.jpg"},
    {name: "Jandor's Ring", price: 48.70, id: "arn64", idCat: "artifact", img: "../img/arn64.jpg"},
    {name: "Jandor's Saddlebags", price: 51.51, id: "arn65", idCat: "artifact", img: "../img/arn65.jpg"},
    {name: "Jeweled Bird", price: 42.45, id: "arn66", idCat: "artifact", img: "../img/arn66.jpg"},
    {name: "Pyramids", price: 196.85, id: "arn67", idCat: "artifact", img: "../img/arn67.jpg"},
    {name: "Ring of Ma'Rûf", price: 211.52, id: "arn68", idCat: "artifact", img: "../img/arn68.jpg"},
    {name: "Sandals of Abdallah", price: 84.83, id: "arn69", idCat: "artifact", img: "../img/arn69.jpg"},
    {name: "Bazaar of Baghdad", price: 2798.99, id: "arn70", idCat: "land", img: "../img/arn70.jpg"},
    {name: "City of Brass", price: 588, id: "arn71", idCat: "land", img: "../img/arn71.jpg"},
    {name: "Desert", price: 14.39, id: "arn72", idCat: "land", img: "../img/arn72.jpg"},
    {name: "Diamond Valley", price: 900, id: "arn73", idCat: "land", img: "../img/arn73.jpg"},
    {name: "Elephant Graveyard", price: 451.25, id: "arn74", idCat: "land", img: "../img/arn74.jpg"},
    {name: "Island of Wak-Wak", price: 450, id: "arn75", idCat: "land", img: "../img/arn75.jpg"},
    {name: "Library of Alexandria", price: 800, id: "arn76", idCat: "land", img: "../img/arn76.jpg"},
    {name: "Mountain", price: 175.77, id: "arn77", idCat: "land", img: "../img/arn77.jpg"},
    {name: "Oasis", price: 35.33, id: "arn78", idCat: "land", img: "../img/arn78.jpg"},
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
            const product = products.find(prod => prod.id === id);
            resolve(product)
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