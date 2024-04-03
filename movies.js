let content = document.getElementById("main")
main.innerHTML += "<div id='contenedor' class='flex justify-center flex-wrap gap-3'> </div>"
let div = document.getElementById("contenedor")

let creartarjeta = function ( peliculas ) {
    return`
    <div class=" w-60 h-52 w-1/5 p-3 flex flex-col border-solid border-2 m-2 border-gray-400 rounded-lg items-center max-md:w-4/5 ">
        <img class=" w-28 h-28 " src=${peliculas.imagen} />
        <h3>${peliculas.título }</h3>
        <p class="text-xs line-clamp-4">${peliculas.overview}</p>
    </div>`
}

console.log(creartarjeta);
for (const iterator of peliculas) {
    contenedor.innerHTML += creartarjeta(iterator)
}

