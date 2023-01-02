import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "list",
        name: "foodtype",
        choices: ["chinesse", "pakistani", "italian"],
        message: ` enter your foodtype`
    }]);
console.log(`we will serve best ${answer.foodtype} food to you`);
