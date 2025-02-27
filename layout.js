

let divElm = document.createElement("div")
divElm.id = "root"

divElm.innerHTML = `
<header>
    
    <img class="poke_ball" src="img/pokeball.png" alt="">
<span class="brand ">Pokédex</span> <br>
<input class="poke_search" type="search" placeholder="Search Pokémon" id="poke-search" name="poke-search"/>

</header>
<main></main>
<footer>created 2025</footer>
`

document.querySelector("body").append(divElm)