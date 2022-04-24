import React, {useState, useEffect} from "react"
import PokeImg from "./components/PokeImg"
import './index.css'

export default function App(){

    const [pokemonName, setPokemonName] = useState([])
    const [pokemonId, setPokemonId] = useState([])


    useEffect(()=>{
        fetch('https://pokeapi.co/api/v2/pokemon')
            .then(res => res.json())
            .then(info => {
                setPokemonName(info.results.map(name => name.name))
                generateArrayOfImages(pokemonName)
                })
            },[]) 


            function generateArrayOfImages(array){
                for (let i = 0; i < array.length; i++){
                    fetch(`https://pokeapi.co/api/v2/pokemon/${array[i]}`)
                    .then(res => res.json())
                    .then(info => setPokemonId(prevId => [...prevId, info.id]))
            } 
        }


    console.log(pokemonName);

    const pokeList = pokemonId.map(a=> <PokeImg 
            key={a}
            imgId={a} 
        />)
 

    return ( 
        <div className="icon--container">
            {pokeList.sort ()}
        </div>  
    )
}