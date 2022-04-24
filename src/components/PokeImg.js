import React from "react";
import "./components.css"

export default function PokeImg(props){
    return (
            <img className="icon--pokemons" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.imgId}.png`}/>
    )
}
