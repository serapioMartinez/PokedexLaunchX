const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeNothing();
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            setData(data);
        }else{

        }
    });
}
const setData = (data) => {
    let pokePhoto = document.getElementById("pokeImg");
    let pokeCaption = document.getElementById("pokeCaption");
    let id = document.getElementById("id");
    let weight = document.getElementById("weight");
    let height = document.getElementById("height");
    let base_experience = document.getElementById("base_experience");
    let types = document.getElementById("types");
    console.log(types);
    pokePhoto.src= data.sprites.front_default;
    pokeCaption.textContent = data.name.toUpperCase();
    id.textContent=data.id;
    weight.textContent = data.weight;
    height.textContent = data.height;
    base_experience.textContent = data.base_experience;
    removeChildren(types.childNodes.length);
    agregarTipos(data.types,types);
    agregarStats(data.stats);
    
}
const removeChildren = (num) => {
    for (let index = 0; index < num; index++) {
        types.removeChild(types.firstChild);
        
    }
}
const agregarTipos = (tipos, types ) => {
    tipos.forEach(element => {
        let span = document.createElement("span");
        span.className=element.type.name;
        span.textContent=element.type.name;
        types.appendChild(span);
    });
}
const agregarStats = (stats) => {
    stats.forEach(element => {
        document.getElementById(element.stat.name).textContent=element.base_stat;
    });
}
const pokeNothing = () => {
    
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = "./img/Sad_Pikachu.png";
}