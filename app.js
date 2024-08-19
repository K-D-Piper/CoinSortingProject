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

//Hello Me! Lets see what we got today!
    //coin roller. One must...
        //1) know what is had. i.e. what is a coin?
            //What is a penny, nickel, dime, quarter
        //2) know how many coins equal a dollar. 
            //So  1. What is a dollar? 
            //and 2. How many coins are in a dollar.
            //and 3. How do we show/teach the computer that these coins can be made into a dollar
            //and 4. How many dollars do we have in coins in the end 
                //oaky so this was a lot of words. To simplfy. heres whats being looked for.   
                    //how many of each coin we got, how much is that, how many dollars we got based on the amount of coins had. 
        //3) put coins into wrappers. 
            //how many wrappers will one need based on the amount of coins had? How many will be outside the wrapper?
        //4) kk. So. Now. Display
            //1. Number of wrappers needed for each kind of coin 
            //2. total in dollars of each kind of coin, indivuallly then combined. 

/*
    kk. So... hi
    heres kinda how im picturing right now. Heres what i'm thinking heres what i want. 

    i picture a lot of coins. Just a big table full of coins that i'm going to have to expain to my computer what they are, what they do, and how to count them. 
    so first. how do i exaplin what they are. 
*/

//What is a ...__... section  (STEP ONE)

//How many of a ...___... equal a dollar? (STEP TWO)

//How many dollars do i have? In...___.... (STEP TWO AND A HALF)

//How many coins to i have? How many wrappers will i need per coin type? How many will be left over (STEP THREE)

//Gemmie results (STEP FOUR)



















 //Challenge Data to test project. 
var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']


/* First Attempt. Commented out but still may use for refernecne. 
//Step One. Assign Values

const value_pennies = .01
const value_nickles = .05
const value_dimes = .10
const value_quarters = .25
//From the world of blackness i *the computer/page* emurge. Now knowing the value of pennies - quarters. 

//Step Two. Calculate Total Values 

const value_dollar = 1
// from the blackness of the void i now understand a dollar is equal to 1
//from the void i formally request an action i can do with my new knoweldge

let PenniesRecieved = 120; 
//pennies have sprinkled into my void. I am now aware that i can receive things. 

let PenniesToDollars = (value_pennies * PenniesRecieved)
console.log (PenniesToDollars)
//from the void, i now grow aware that i can recieve pennies and that if i recieve an amount a new value will exist. 
//from the void i grow more aware, pennies to dollars is just the value multiplied. I will apply this concept to my other coins. 

let NicklesRecieved = 120

let NicklesToDollars = (value_nickles * NicklesRecieved)
console.log(NicklesToDollars)

let DimesRecieved = 120

let DimesToDollars = (value_nickles * DimesRecieved)
console.log(DimesToDollars)

let QuartersRecieved = 120

let QuartersToDollars = (value_quarters * QuartersRecieved)
console.log(QuartersToDollars)

//From my void i grow futher aware... these coins * the values make dollars. I now have some dollars. 

let Pennies_Wrapper = (value_pennies * 50)
let Nickles_Wrapper = (value_pennies * 40)
let Dimes_Wrapper = (value_dimes * 50)
let Quarters_Wrapper = (value_quarters * 40) 

console.log(Pennies_Wrapper, Nickles_Wrapper, Dimes_Wrapper, Quarters_Wrapper)



// QUIZ 8/9/2024

var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']

//? Give me the total amount of each coin;
// ex. dime = 234;
//? Convert the total amount of coins into dollars (USD currency)
// ex. dimeCurrencyTotal = $20.20
//? Total amount Currency all together (PenniesCurrencyTotal + QuartersCurrencyTotal... .etc)

// 0) How many items are in this array (this is just the amount of numbers in the array. BTW the total is 467)
console.log(challengeData.length) //= 467

// 1) Total Amount of each coin 

//Assinged Values 
let penny = [.01, 'penny']
let nickel = [.05, 'nickel']
let dime = [.10, 'dime']
let quarter = [.25, 'quarter']
//let dollar = [1 , (penny*100) , (nickel * 20) , (dime * 10) , (quarter*4)]

//Coin Count Number 

let PennyCount = challengeData.filter(element => {
    return element === 'penny';
}).length;
console.log(PennyCount) //=117


let NickelCount = challengeData.filter(element => {
    return element === 'nickel';
}).length;
console.log(NickelCount) //=118

let DimeCount = challengeData.filter(element => {
    return element === 'dime';
}).length;
console.log(DimeCount) //=123

let QuarterCount = challengeData.filter(element => {
    return element === 'quarter';
}).length;
console.log(QuarterCount) //=109

// Total amount of coins in dollars 

let pennydollar = PennyCount * 100
console.log(pennydollar)

let nickeldollar = NickelCount * 20
console.log(nickeldollar)

let dimedollar = DimeCount * 10
console.log(dimedollar)

let quarterdollar = QuarterCount * 4

//INSTRUCTION 

console.log(challengeData.length)

//Creating this varable to be able to store information later
let totalPennyCount = 0

for( let i=0; i < challengeData.length; i++) {
    console.log(i)
    //how am i going to pick out all the pennies?
    totalPennyCount++
    //
    if()
}
*/
