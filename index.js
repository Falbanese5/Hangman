import prompt from "readline-sync";
import wordBank from "./word-bank.js";

//const letter = prompt.question("Please guess a letter:");

//console.log("Letter: ", letter);

//let word = wordRandomizer(); 

const wordRandomizer = () =>
{
    //select a random word from the library
    let randomizer = Math.floor((Math.random() * wordBank.length) + 1);
    //console.log(randomizer);
    return wordBank[randomizer];
}
let word = wordRandomizer();
console.log(word);

const toDisplay = () =>
{
    let dashes = [];
    ///console.log(word);
    //split word
    let splitWord = word.split("");
    //the word is down here
    //console.log(splitWord); 
    //blanks out word letters and display
    let i = 0;
    while ( i < word.length)
    {
        let letter = "-";
        //console.log(letter);
        dashes.push(letter);
        i++;
    }
    //let dashes = word.replaceAll(word, "-");
    //console.log(dashes);

    return dashes;
}
let blankWord = toDisplay();

//toDisplay();

let guesses = 7;
let attempts = 1;
let guessList = [];
let hangMan = ["O","|","/","\\" ];

const hangStatus = () =>
{
    if (guesses === 7)
    {
        console.log(guesses + " Lives left");
    }
    if (guesses === 6)
    {
        console.log(guesses + " Lives left");
        console.log("  " + hangMan[0]);
    }
    if (guesses === 5)
    {
        console.log(guesses + " Lives left");
        console.log("  " + hangMan[0] + "\n  " + hangMan[1]);
    }
    if (guesses === 4)
    {
        console.log(guesses + " Lives left");
        console.log("  " + hangMan[0] + "\n " + hangMan[2] + hangMan[1]);
    }
    if (guesses === 3)
    {
        console.log(guesses + " Lives left");
        console.log("  " + hangMan[0] + "\n " + hangMan[2] + hangMan[1] + hangMan[3]);
    }
    if (guesses === 2)
    {
        console.log(guesses + " Lives left");
        console.log("  " + hangMan[0] + "\n " + hangMan[2] + hangMan[1] + hangMan[3] +"\n  " + hangMan[1]);
    }
    if (guesses === 1)
    {
        console.log(guesses + " Lives left");
        console.log("  " + hangMan[0] + "\n " + hangMan[2] + hangMan[1] + hangMan[3] +"\n " + hangMan[2] + hangMan[1]);
    }
    if(guesses === 0)
    {
        console.log("  " + hangMan[0] + "\n " + hangMan[2] + hangMan[1] + hangMan[3] +"\n " + hangMan[2] + hangMan[1] + hangMan[3]);
    }
}
const youWin = () =>
{
    console.log("You Win!");
    let tryAgain = prompt.question("Try Again(Y/N)?: ");
    if (tryAgain == "Y")
    {
        attempts++;
        guesses = 7;
        console.log("This is your " + attempts + " attempt");
        wordRandomizer();
        word = wordRandomizer();
        //console.log(word);
        toDisplay();
        blankWord = toDisplay();
        guessList = [];
        updateDisplay();
    } 
    else if (tryAgain == "N")
    {
        console.log("You made " + attempts + " attempts");
    }
    else
    {
        console.log("Please enter Y or N only");
        youWin();
    }

}

const gameOver = () =>
{
    console.log("The word was: " + word + " You Lose ");
    let tryAgain = prompt.question("Try Again(Y/N)?: ");
    if (tryAgain == "Y")
    {
        attempts++;
        guesses = 7;
        console.log("This is your " + attempts + " attempt");
        wordRandomizer();
        word = wordRandomizer();
        //console.log(word);
        toDisplay();
        blankWord = toDisplay();
        guessList = [];
        updateDisplay();
    } 
    else if (tryAgain == "N")
    {
        console.log("You made " + attempts + " attempts");
    }
    else
    {
        console.log("Please enter Y or N only");
        gameOver();
    }
}

const updateDisplay = () =>
{
    let guessed = false;
    let correctLetter = false;
    console.log(blankWord);
    //let userGuess = prompt.question("Guess a letter: ");
    //console.log(userGuess);
    let i = 0;
    //console.log("  " + hangMan[0] + "\n  " + hangMan[1]);
    while ( guesses > 0)
    {
        let userGuess = prompt.question("Guess a letter: ").toLowerCase();
        i = 0;
        let g = 0;
        while (i < word.length)
        {
            if (userGuess == word[i])
            {
                blankWord.splice(i, 1, userGuess);
                //console.log(word.indexOf[i]);
                console.log(blankWord);
                //console.log(guesses);
                //guesses++;
                correctLetter = true;
                i++;
                guessed = true;
            }
            else
            {
                //guesses++;
                i++;
                //console.log(guesses);
            }
        }
        if (correctLetter == true)
        {
            correctLetter = false;
            if (blankWord.join("") == word)
            {
                youWin();
                break;
            }
        }
        while (g <= guessList.length)
        {
            if (userGuess == guessList[g])
            {
                console.log("You already guessed this genius! You're lucky I can't deduct points");
                g++;
                guessed = true;
            }
            else
            {
                //guesses--;
                //console.log(guesses);
                //console.log(blankWord);
                //guessList.push(userGuess);
                //console.log("So far you have guessed:" + guessList);
                g++;
            }
            //let g = 0;
        }
        //let letter = "-";
        //console.log(letter);
        //dashes.push(letter);
        //i++;

        if (guessed == false)
        {
            guesses--;
            //console.log(guesses);
            hangStatus();
            console.log(blankWord);
            guessList.push(userGuess);
            console.log("So far you have guessed:" + guessList);
        }

        else
        {
            guessed = false;
        }
    }
    if (guesses == 0)
    {
        gameOver();
    }
    //replace underscores
}
updateDisplay();

const checkTry = () =>
{

}

const updateTries = () =>
{

}

//const gameOver = () =>
//{
  //  console.log("The word was:" + word + " You Lose ");
//}

const gameStart = () =>
{

}