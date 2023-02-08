
  const listaPokemon = document.querySelector('#listaPokemon');
  let url = "https://pokeapi.co/api/v2/pokemon/";
  
  for(let i=1; i<=151; i++){
      fetch(url+i)
      .then((response) => response.json())
      .then(data => mostrarpokemon(data))
      
    }
    
    function mostrarpokemon(poke){
      
      let tipos= poke.types.map((type) => `
      <p class="${type.type.name} tipo">${type.type.name}</p> `);
      tipos= tipos.join('');

      let pokeId = poke.id.toString();
      if(pokeId.length === 1) {
          pokeId ="00" + pokeId;
      } else if(pokeId.length ===2){
          pokeId ="0"+pokeId;
        //     // Variables de ataque, defensa y speed
        // const ataque = poke.stats[4].base_stat;
        // const defensa = poke.stats[3].base_stat;
        // const speed = poke.stats[0].base_stat;
      }

        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML= `
        <div  id="${pokeId}">
        <div class="pokemon-imagen">
        <img src=${poke.sprites.other["official-artwork"].front_default} alt="${poke.name}">
        </div>
        <div class="pokemon-info">
        <div class="nombre-contenedor">
        <p class="pokemon-id">#${pokeId}</p> </br>
        <h2 class="pokemon-nombre">${poke.name}</h2>
        </div>
        <div class="pokemon-tipos">
        ${tipos}
        </div>
        <div class="pokemon-stats">
        <p class="stat">${poke.height} m</p>
        <p class="stat">${poke.weight/10} Kg</p>
        </div>
        </div>
        </div>
        `;
        listaPokemon.append(div);
    }
    
    const pokemonDivs = document.querySelectorAll('.pokemon');
    for (let i = 0; i < pokemonDivs.length; i++) {
      pokemonDivs[i].addEventListener('click', function() {
        console.log('Has hecho click en un div con clase pokemon');
      });
    }
    