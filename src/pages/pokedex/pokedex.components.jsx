import React, { Component } from "react";

export default class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 1, name: "charmander", type: "fire" },
      { id: 2, name: "Squirtle", type: "water" },
      { id: 3, name: "Metapod", type: "bug" },
      { id: 4, name: "Pikachu", type: "electric" },
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
    // console.log(this.state.pokemon);
    // console.log(this.props.pokemon);
    // console.log(...this.props.pokemon);
    let hand1 = [];
    let hand2 = [...this.props.pokemon];
    while (hand1.length < hand2.length) {
      // splice from hand2 and concat into hand1
      // random no. according to hand2.length
      let randIdx = Math.floor(Math.random() * hand2.length);

      let randPokemon = hand2.splice(randIdx, 1)[0]; //just to take out the 0 index object from array

      hand1.push(randPokemon);
    }

    // const potato = this.state.pokemon[1];
    // console.log("potato", potato);

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
          <div className="row">
            <Pokecard pokemon={hand1} />
            <Pokecard pokemon={hand2} />
          </div>
        </div>
      </>
    );
  }
}

const Pokecard = (props) => {
  return (
    <div className="col-md-6">
      {props.pokemon.map((p, index) => (
        <div key={index}>{p.name}</div>
      ))}
    </div>
  );
};
