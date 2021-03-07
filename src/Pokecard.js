import React,{ Component } from "react";
import './Pokecard.css';
// const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const POKE_API ='https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => (number <= 999 ?`00${number}` .slice(-3) : number);

const Pokecard = (props) => {
    let imgSrc=`${POKE_API}${padToThree(props.id)}.png`
    return (
        <div className='pokecard'>
            <h1 className="pokecard-title">{props.name}</h1>
          <div className="pokecard-image">
            <img src={imgSrc} alt={props.name}/>
          </div>
            <div className="pokecard-data">Type: {props.type}</div>
            <div className="pokecard-data">Exp: {props.exp}</div>
        </div>
    )
}

export default Pokecard;
