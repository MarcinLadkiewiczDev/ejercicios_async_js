/* Accederemos a los datos de una API pública de Game Of Thrones, 
queremos un select con todos los nombres de los personajes para que cuando
un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:
 */


const mostrarPersonaje = async () => {
    try {
        const res = await fetch("https://thronesapi.com/api/v2/Characters");
        const personajes = await res.json();
        console.log(personajes);
        mapPersonajes(personajes);
    } catch (error) {
        alert("Algo no funciona.")
    }
}
    

const mapPersonajes = (personajes) => {
    const mappedPersonajes = personajes.map(personaje => ({
        name: personaje.fullName,
        image: personaje.image
    }));
    console.log(mappedPersonajes);
    pintarPersonajes(mappedPersonajes);
}

const pintarPersonajes = (personajes) => {
    const characterList = document.querySelector("#character-list")
    personajes.forEach(personaje => {
        const option = document.createElement("option");
        option.innerText = personaje.name;
        characterList.appendChild(option);
});
}

mostrarPersonaje();

        
        
            
  
   


