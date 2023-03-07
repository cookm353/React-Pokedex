import React from "react"
import Pokelist from './Pokelist';
import Pokecard from "./Pokecard";
import './Pokedex.css'

const Pokedex = () => {
    return (
        <>
            <h3 className="PokedexHeader">Pokedex</h3>
            <div className="PokedexCards">
                {Pokelist.map(p => (
                    <Pokecard name={p.name} id={p.id} 
                        type={p.type} exp={p.exp} />
                ))}
            </div>
        </>
    )
}

export default Pokedex