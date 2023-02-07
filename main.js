function addId(element, id) {
    element.id = id;
  };
function createModal(poke) {
    // Crear un elemento div para el fondo del modal
    const modalBg = document.createElement("div");
    modalBg.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    modalBg.style.position = "fixed";
    modalBg.style.top = "0";
    modalBg.style.right = "0";
    modalBg.style.bottom = "0";
    modalBg.style.left = "0";
    modalBg.style.display = "flex";
    modalBg.style.alignItems = "center";
    modalBg.style.justifyContent = "center";
    modalBg.style.zIndex = "1000";
    addId(modalBg,"modalBg")
    // Crear un elemento div para el contenido del modal
    const modalContent = document.createElement("div");
    modalContent.style.backgroundColor = "#fff";
    modalContent.style.borderRadius = "5px";
    modalContent.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.25)";
    modalContent.style.padding = "20px";
    modalContent.style.textAlign = "center";
    addId(modalContent,"modalContent")
  
    // Agregar el texto personalizable al contenido del modal
    const modalText = document.createElement("p");
    modalText.textContent = text;
    addId(modalText,"modalText")

  
    // Crear un botón para finalizar el modal
    const modalButton = document.createElement("button");
    modalButton.textContent = "Reiniciar";
    addId(modalButton,"modalbtn")

  
    // Agregar evento click al botón para quitar el modal
    modalButton.addEventListener("click", function() {
      document.body.removeChild(modalBg);
      location.reload();
    });
  
    // Agregar el texto y el botón al contenido del modal
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalButton);
  
    // Agregar el contenido del modal al fondo
    modalBg.appendChild(modalContent);
  
    // Agregar el fondo del modal al documento
    document.body.appendChild(modalBg);
  };
  

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
            // Variables de ataque, defensa y speed
        const ataque = poke.stats[4].base_stat;
        const defensa = poke.stats[3].base_stat;
        const speed = poke.stats[0].base_stat;
      }

        const div = document.createElement("div");
        div.classList.add("pokemon");
        div.innerHTML= `
        <div class="pokemon" id="${pokeId}">
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