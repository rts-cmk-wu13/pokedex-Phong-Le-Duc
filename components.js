function createPokeCard(poke) {
    console.log(poke);
    return `
            <article class="poke__card">
                  <p>#${getIdFromPokemon(poke.url).padStart(4, "0")}</p>
                   
                  <figure>
                    <img class="poke_image" loading="lazy" src="${artworkUrl}/${getIdFromPokemon(poke.url)}.png" alt="${poke.name}">
                 </figure>
                  
                 <h2 class="poke__name">${poke.name}</h2>
                  
                 <a class="poke__link" href="/detail.html?name=${poke.name}"></a>            
             </article>`
}