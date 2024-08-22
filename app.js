/*
Coin Sorter and Wrapper Calculator
Project: Coin Sorter and Wrapper Calculator
Objective:
Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. The program will then output the number of coin wrappers needed and the total amount in dollars.

Instructions:
1 . Define Variables for Coins:
    Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.

2. Calculate Total Value of Coins:
    Write code to calculate the total value of each type of coin in dollars.
    Calculate the combined total value of all coins.
3. Sort Coins into Wrappers:
    Use the standard capacity for each type of coin wrapper:
        Pennies: 50 coins per wrapper
        Nickels: 40 coins per wrapper
        Dimes: 50 coins per wrapper
        Quarters: 40 coins per wrapper
    Calculate the number of wrappers needed for each type of coin.
    Calculate the remaining coins that do not fill a wrapper completely.
4. Output Results:
    Use console.log to display the number of wrappers needed for each type of coin and remaining coins that do not fill a wrapper
    Use console.log to display the total amount in dollars.

After finished go to discussion tab and submit link to the Javascript Coin Project.
*/


var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

//STEP ONE : DEFINE VARIABLE FOR COINS 
//STEP TWO : CALCULATE VALUES FOR COINS IN DOLLARS/USD
let penny = ['penny', .01] // Define penny
let PennyCount = challengeData.filter(element => {return element === 'penny'}).length //How many pennies do you have? //117
console.log(`There are ${PennyCount} pennies! ` + ` That equals to $ ${(PennyCount * .01).toFixed(2)}`) // How many pennies are in this dollar? //117 ; $1.17

let nickel = ['nickel', .05] //Define nickel 
let NickelCount = challengeData.filter(element => {return element === 'nickel'}).length // How many nickels do you have? //118 
console.log(`There are ${NickelCount} nickels! ` + ` That equals to $ ${(NickelCount * .05).toFixed(2)}`) //How many nickels are in a dollar? //118 ; $ 5.90

let dime = ['dime', .10] //Define dime
let DimeCount = challengeData.filter(element => {return element === 'dime'}).length //How many dimes do you have? //123
console.log(`There are ${DimeCount} dimes! ` + ` That equals to $ ${(DimeCount * .10).toFixed(2)}`) //123 ; $12.30

let quarter = ['quarter', .25] //Define Quarter
let QuarterCount = challengeData.filter(element => {return element === 'quarter'}).length //How many Quarters do you have //109
console.log(`There are ${QuarterCount} quarters! ` + ` That equals to $ ${(QuarterCount * .25).toFixed(2)}`) //How many quarters are in a dollar? //109 ; $27.25

let coins = challengeData.length
let TotalCount = (PennyCount * .01) + (NickelCount * .05) + (DimeCount * .10) + (QuarterCount * .25) //What is the final total? $ 46.62
console.log(`There are ${coins} coins! Thats $ ${TotalCount.toFixed(2)} in total!`) 


//Step 3 Put coins into wrappers 
//Step 4. Log results into console

let PennyWrappers = PennyCount / 50
let PennysLeft = PennyCount - PennyWrappers
console.log(`With that many pennies you'll fill ${PennyWrappers.toFixed(0)} wrappers. There will be ${PennysLeft.toFixed(2)} pennies left over.`)

let NickelWrappers = NickelCount / 40 
let NickelsLeft =  NickelCount - NickelWrappers
console.log(`With that many nickels you'll fill ${NickelWrappers.toFixed(0)} wrappers. There will be ${NickelsLeft.toFixed(2)} nickels left over.`)

let DimeWrappers = DimeCount / 50
let DimesLeft = DimeWrappers - DimeWrappers
console.log(`With that many dimes you'll fill ${DimeWrappers.toFixed(0)} wrappers. There will be ${DimesLeft.toFixed(2)} dimes left over.`)

let QuarterWrapper = QuarterCount / 40
let QuartersLeft = QuarterCount - QuarterWrapper
console.log(`With that many quarters you'll fill ${QuarterWrapper.toFixed(0)} wrappers. There will be ${QuartersLeft.toFixed(2)} quarters left over.`)

