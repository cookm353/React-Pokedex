import React from "react"
import "./Pokecard.css"

const Pokecard = ({ name, id, type, exp }) => {
    const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
    console.log(imgUrl)
    
    return (
        <div className="PokecardCard">
            <h4 className="PokecardName PokecardItem">{name}</h4>
            <img className="PokecardItem" src={imgUrl}/>
            <p className="PokecardItem">Type: {type}</p>
            <p className="PokecardItem">EXP: {exp}</p>
        </div>
    )
}

export default Pokecard