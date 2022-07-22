const contenedor = document.getElementById("contenedor-tarjetas")

fetch("https://rickandmortyapi.com/api/character")
  .then(respuesta => respuesta.json())
  .then(data => {
    const tarjetas = data.results
    let acumuladora = ""

    for (let i = 0; i < tarjetas.length; i++) {
      acumuladora =
        acumuladora + `
    <div class="card">

        <div class="contenedor-img">
        <img src=${tarjetas[i].image} alt=${tarjetas[i].name}>
        </div>

        <div class="info-tarjetas">
    <p>
         ${tarjetas[i].name}
    </p>

    <p>
         ${tarjetas[i].status}
    </p>

    <p>
         ${tarjetas[i].species}
    </p>

    <p>
         ${tarjetas[i].type}
    </p>

    <p>
         ${tarjetas[i].gender}
    </p>
    </div>
    </div>
    `
    }
    contenedor.innerHTML = acumuladora
  })
