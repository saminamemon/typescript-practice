import inquirer from "inquirer";
import chalk from "chalk";
let answer =await inquirer.prompt([{
    type:"list",
    name:"foodtype",
    choices:["chinesse","pakistani","italian"],
    message:` enter your foodtype`

}])
console.log(chalk.bgMagentaBright(`we will serve best ${answer.foodtype} food to you`));