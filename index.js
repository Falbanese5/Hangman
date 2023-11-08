import prompt from "readline-sync";
import wordBank from "./word-bank.js";
//console.log(wordBank);

const letter = prompt.question("Please guess a letter:");

console.log("Letter: ", letter);