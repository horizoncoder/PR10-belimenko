import start from "./BTNS.js";
import Pokemon from "./pokemon.js"

const character = new Pokemon({
    name:'Pikachu',
    type:'electric',
    hp:500,
    selectors:'character'
});

const enemy = new Pokemon({
    name: 'Charmander',
    type: 'fire',
    hp:500,
    selectors:'enemy'
});

console.log(character);
console.log(enemy);

start(character, enemy);