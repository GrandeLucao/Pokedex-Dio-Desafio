const loadMoreButton=document.getElementById('loadMoreButton')
const pokemonList=document.getElementById('pokemonList')

let choseRegion=false;
let chosedRegion=false;
let maxRecord=0;
const limit=25
let offset=0;

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons=[]) => {
        newHTML=pokemons.map((pokemon)=>
                `   
                <li class="pokemon ${pokemon.type}">
                    <span class="number">#${pokemon.number}</span>
                    <span class="name">${pokemon.name}</span>
                    <div class="detail">
                        <ol class="types">
                            ${pokemon.types.map((type)=>`<li class="type ${type}">${type}</li>`).join('')}
                        </ol>
                        <img src="${pokemon.photo}" alt="${pokemon.name}">
                    </div>
                </li>
            `
        ).join('')
        pokemonList.innerHTML+=newHTML
    })
}

function clearPkm(clear){
    pokemonList.innerHTML="";
    choseRegion=false;
    choseRegion=false;

}

function getRegionClick(regionName){
    if(chosedRegion){
        pokemonList.innerHTML="";
        choseRegion=false
    }
    if(!choseRegion){
        switch (regionName.id){
            case 'kanto':
                offset=0
                maxRecord=151
                break;
            case 'johto':
                offset=151
                maxRecord=251
                break;
            case 'hoenn':
                    offset=251
                    maxRecord=386
                    break;
            case 'sinnoh':
                    offset=386
                    maxRecord=493
                    break;
            case 'unova':
                    offset=493
                    maxRecord=649
                    break;
            case 'kalos':
                    offset=649
                    maxRecord=721
                    break;
            case 'alola':
                    offset=721
                    maxRecord=809
                    break;
            case 'galar':
                    offset=809
                    maxRecord=905
                    break;
            case 'paldea':
                    offset=905
                    maxRecord=1017
                    break;
            case 'all':
                    offset=0
                    maxRecord=1017
                    break;
        }

        chosedRegion=true;
        choseRegion=true
        loadPokemonItens(offset, limit)
    }
}

    loadMoreButton.addEventListener('click',()=>{
        
        if(choseRegion){
            offset+=limit
            const qtnRecord=offset+limit
            if(qtnRecord>=maxRecord){
                const newLimit=maxRecord-offset
                loadPokemonItens(offset, newLimit)
                loadMoreButton.parentElement.removeChild(loadMoreButton)
            }else{
                loadPokemonItens(offset, limit)
            }
        }
    })




