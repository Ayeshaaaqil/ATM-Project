#! /usr/bin/env node
import inquirer from "inquirer";

interface UserInput{
    userID: string,
    userPin:"number",
    accountType: string,
    transaction: string,
    amount: number
}

const userInput =await inquirer.prompt([
    {
        type:"input",
        name: "userID",
        message: "Enter user ID"
    },
    {
        type: "number",
        name: "userPin",
        message: "Enter your Pin"
    },
    {
       type: "list",
       name: "accountType",
       choices :["current","saving"],
       message:"select your account type"
     },
        
     {
         type: "list",
         name: "transactionType",
         choices:["Fast Cash", "Cash withdraw","Balance Inquiry"],
         message:"select your transaction"
     },
     {
        type:"number",
        name:"amount",
        message:"Enter amount you want to withdraw",
        when(userInput){
            return userInput.transactionType === "Cash withdraw"
        }
    },
    {
        type:"list",
        name:"amount",
        choices: [1000, 2000, 5000, 10000, 20000, 25000],
        message:"select amount you want with to withdraw",
        when(userInput){
            return userInput.transactionType ==="Fast Cash"
        }
    }
]) ;

//making variables of user input data
let userID = userInput.userID;
let userPin = userInput.userPin;
let enteredAmount = userInput.amount;

if((userID && userPin) && userInput.transactionType === "Balance Inquiry"){
    const userBalance = Math.floor(Math.random()*100000);
    console.log(`your current balance is Rs ${userBalance}\n`)
}else if (userID && userPin){
    const userBalance2 =Math.floor(Math.random() *100000);
    if(userBalance2 > enteredAmount){
        console.log(`your account has been debited with Rs ${enteredAmount} and your remaining balance id ${userBalance2 - enteredAmount}`)
    }else{
        console.log(`\n unsufficient Balance`);
    }
}
        


