#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";


const sleep = () => {
    return new Promise((res) => {
        setTimeout(res, 3000)
    })
}
async function welcome() {
    let rainbowTitle = chalkAnimation.pulse(" Welcome to Samina Guess Game");
    await sleep();
    rainbowTitle.stop();
    console.log(chalk.red`   
    .d88b. 888  888 .d88b. .d8888b .d8888b  .d88b.  8888b. 88888b.d88b.  .d88b.  
    d88P"88b888  888d8P  Y8b88K     88K     d88P"88b    "88b888 "888 "88bd8P  Y8b 
    888  888888  88888888888"Y8888b."Y8888b.888  888.d888888888  888  88888888888 
    Y88b 888Y88b 888Y8b.         X88     X88Y88b 888888  888888  888  888Y8b.     
     "Y88888 "Y88888 "Y8888  88888P' 88888P' "Y88888"Y888888888  888  888 "Y8888  
         888                                     888                              
    Y8b d88P                                Y8b d88P                              
     "Y88P"                                  "Y88P"
          
    `);


}

await welcome()

let numberGame : number= Math.floor(Math.random()*10);
// console.log (chalk.red(numberGame));
function guess(input:number) {

    if (numberGame === input) {
      console.log(chalk.red ("congratulaton!you win")); 
    } else {
        console.log(chalk.blue ("sorry! try again" ));

    }
} 
const userInput = await inquirer.prompt([{
    name:'userInput' ,type: 'number', message: 'please enter a number'
}])
guess(userInput.userInputs)