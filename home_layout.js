

let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
<header>

    <img class="poke_ball" src="img/pokeball.png" alt="">
<span class="brand ">Pokédex</span> <br>
<form action="detail.html"></form>
<input class="poke_search" type="search" placeholder="Search Pokémon" name="name" id="name" />

</header>
<main></main>
<footer>created 2025</footer>
`

document.querySelector("body").append(divElm)







// ----------------- BEDRE UDGAVE---------------

/**
 * Extract id as string from url to pokemon
 * @param {string} pokemonUrl - a url to a pokemon from pokeApi 
 * @returns {string}
 */
function getIdFromPokemon(pokemonUrl) {
    return pokemonUrl.slice(0, -1).split("/").pop()
}

const artworkUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork"

// INFINITE SCROLL
const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            //noget her!

            currentOffset = currentOffset + 50

            if (currentOffset < 1304) {
                fetchPokemon(currentOffset)
            } else {
                console.log("no more pokemon");

            }

        }
    })
})
// --------------INFINITE SCROLL END--------------


// --------------HARDCODED LAZY LOAD------------------
// const imgObserver = new IntersectionObserver(function (entries) {
//     entries.forEach(function (entry) {
//         if (entry.isIntersecting) {
//             entry.target.src = entry.target.dataset.imagesrc
//             imgObserver.unobserve(entry.target)
//         }
//     })
// })





// her begynder selve komponentet
let sectionElm = document.createElement("section")
sectionElm.className = "pokelist"

let currentOffset = 0

function fetchPokemon(offset) {

    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=50`)
        .then(function (response) {
            return response.json()
        }).then(
            function (data) {
                sectionElm.innerHTML += data.results.map(function (pokemon) {
                    return createPokeCard(pokemon)
                }).join("")


                // OBSERVER TIL INFINITE SCROLL
                let observedPokemon = sectionElm.querySelector("article:nth-last-child(5)")
                observer.observe(observedPokemon)


                // --------OBSERVER TIL HARDCODED LAZY LOAD
                // let observedImgs = sectionElm.querySelectorAll(".poke_image")
                // console.log(observedImgs);
                // observedImgs.forEach(function (observedImg) {
                //     imgObserver.observe(observedImg)
                // })


            }
        )

    document.querySelector("main").append(sectionElm)

}





fetchPokemon(currentOffset)


