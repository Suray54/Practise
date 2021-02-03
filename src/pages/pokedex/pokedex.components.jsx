import React, { Component } from "react";

import "./pokedex.styles.scss";

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: "charmander", type: "fire" },
      { id: 7, name: "Squirtle", type: "water" },
      { id: 11, name: "Metapod", type: "bug" },
      { id: 25, name: "Pikachu", type: "electric" },
      { id: 11, name: "Metapod", type: "bug" },
      { id: 25, name: "Pikachu", type: "electric" },
      { id: 11, name: "Metapod", type: "bug" },
      { id: 25, name: "Pikachu", type: "electric" },
    ],
  };

  // state = {
  //   pokemon: [
  //     { id: 1, name: "charmander", type: "fire" },
  //     { id: 2, name: "Squirtle", type: "water" },
  //     { id: 3, name: "Metapod", type: "bug" },
  //     { id: 4, name: "Pikachu", type: "electric" },
  //   ],
  // };

  render() {
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      // splice from hand2 and concat into hand1
      // random no. according to hand2.length
      let randIdx = Math.floor(Math.random() * hand2.length);

      let randPokemon = hand2.splice(randIdx, 1)[0]; //just to take out the 0 index object from array

      hand1.push(randPokemon);
    }
    console.log(hand1);
    // console.log(this.state.pokemon);
    // const potato = this.state.pokemon[1];
    // console.log("potato", potato);

    // console.log(this.props.pokemon);
    // console.log(...this.props.pokemon);

    // let i = 0;
    // let half = Math.floor(hand2.length / 2);
    // console.log(half);
    // for (i; i < half; i++) {
    //   const randIdx = hand2.splice(i, 1)[0];
    //   hand1.push(randIdx);
    // }

    return (
      <>
        <div className="container">
          <h1 className="mt-4">First Hand</h1>
          <div className="row">
            {hand1.map((p, index) => (
              <Pokecard key={index} id={p.id} name={p.name} type={p.type} />
            ))}
          </div>
          <h1 className="mt-4">Second Hand</h1>
          <div className="row">
            {hand2.map((p, index) => (
              <Pokecard key={index} id={p.id} name={p.name} type={p.type} />
            ))}
          </div>
        </div>
      </>
    );
  }
}

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";
let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number);
const Pokecard = (props) => {
  let imgSrc = `${POKE_API}${padToThree(props.id)}.png`;
  console.log(imgSrc);
  return (
    <div className="pokecard-main col-md-3">
      <div className="pokecard-main__space">
        <h3>{props.name}</h3>
        <img src={imgSrc} alt={props.name} />
        <div>Type: {props.type}</div>
      </div>
    </div>
  );
};
