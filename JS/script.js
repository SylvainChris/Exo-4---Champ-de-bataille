/**
 *  Gets a random value between 0 and a number
 * @param {number} number
 * @returns {number} random number
 */
function getRandomValue(number) {
  return Math.floor((number + 1) * Math.random());
}

/**
 * Gets a random value of an array
 * @param {array} array
 * @returns {value} a random value of the array
 */
function getRandomArrayValue(array) {
  return array[getRandomValue(array.length - 1)];
}

const characters = [
  { name: "Godzilla", life: 50, xp: 5, weapon: 5, shield: 5, alive: true },
  { name: "Kong", life: 50, xp: 5, weapon: 5, shield: 5, alive: true },
  { name: "Hulk", life: 50, xp: 5, weapon: 5, shield: 5, alive: true },
  { name: "Aquaman", life: 50, xp: 5, weapon: 5, shield: 5, alive: true },
];

/**
 * Get random attack score from character stats
 * @param {object} attacker - An object representing a character
 * @returns {number} - Random attack score
 */
function getAttackScore(attacker) {
  return getRandomValue(attacker.weapon) + attacker.xp;
}

/**
 * Get random defend score from character stats
 * @param {object} defender - An object representing a character
 * @returns {number} - Random attack score
 */
function getDefendScore(defender) {
  return getRandomValue(defender.shield) + defender.xp;
}

let playerOut = 0;
let attacker;
let defender;

console.table(characters);

while (playerOut < characters.length - 1) {
  // who is the attacker and the defender
  do {
    attacker = getRandomArrayValue(characters);
  } while (!attacker.alive);

  do {
    defender = getRandomArrayValue(characters);
  } while (attacker === defender || !defender.alive);


  const attackScore = getAttackScore(attacker);

  if (attackScore >= getDefendScore(defender)) {
    winner = attacker;
    defender.life -= attackScore;
    if (defender.life <= 0) {
      defender.life = 0;
      defender.alive = false;
      playerOut++;
      console.log(`${defender.name} est mort`);
    }
  } else {
    winner = defender;
  }

  console.log(
    `L'attaquant est ${attacker.name}, et le défenseur est ${defender.name}`
  );
  console.log(`Le gagnant du combat est ${winner.name}`);
}

console.table(characters);
console.log(`Le grand gagnant est ${winner.name}`);
