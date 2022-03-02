//random generated fish(name/weight/values)
//time of day shown to user
//maximum of 10 lbs
//each turn, sum of fishes caught is displayed
//max time of 6 hours
//----------------------------------------



//set random fish caught by fisher
const randomSelection = () => {
    const randomFish = [{name:'nemo', weight: 0, cost: 0}, {name:'dory', weight:0, cost: 0},
{name:'bruce', weight: 0, cost: 0}, {name:'jaws', weight:0, cost: 0}, {name:'marlin', weight:0, cost: 0} , {name:'orca', weight:0, cost: 0}, 
{name:'flipper', weight:0, cost: 0}, {name:'bass', weight:0, cost: 0}, {name:'tuna', weight:0, cost: 0}, {name:'red snapper', weight:0, cost: 0}];
    let randomIdx = Math.floor(Math.random() * randomFish.length)
    return randomFish[randomIdx]
}
// console.log(randomFishWeight())

//***Fish for x amount of times hour***
function fishingRounds() {
    const prompt = require('prompt-sync')({sigint:true});
    const chalk = require('chalk')
    //running counts
    let weightTotal = 0;
    let priceTotal = 0;
    let roundTotal = 1;
    let keptTotal = [];
    //start the game
    console.log(chalk.magenta('Youve entered a fishing tournament! You have 6 Hours to catch as many fish totaling under 10 lbs!'))
    //set limit at 6 hours
    while (roundTotal < 6) {
        //display the current time
        console.log(chalk.greenBright(`the Time is ${roundTotal}:00 PM`))
        //set identify random fish to variable
        let fishReeledIn = randomSelection()
        //give fish random weight/random price
        fishReeledIn.weight = Math.random() * 15 + 1
        fishReeledIn.cost = Math.random() * 100
        //display what fish is "caught" to user
        console.log(chalk.yellow(`You caught a ${fishReeledIn.name}, weighing in at ${fishReeledIn.weight} lbs, with a value of $${fishReeledIn.cost}`))
        //cond statement if fish weight doesnt exceed the cap
        if(weightTotal + fishReeledIn.weight > 10){
            console.log(chalk.red('you went over 10 lbs! this fish will be RELEASED when asked'))  
        } 
        //ask user for action
        let catchRelease = prompt('Catch or release?("c", "r"): ');
        if(catchRelease === 'c') {
            //add running totals and add fish to fish kept
            weightTotal = weightTotal + fishReeledIn.weight
            priceTotal = priceTotal + fishReeledIn.cost
            keptTotal.push(fishReeledIn)
        } else if(catchRelease === 'r'){
            //note fish was not added
            console.log(chalk.cyan('Trew fish back in the sea!'))
        } else {
            //log invalid entry
            console.log(chalk.white('ERROR-INVALID ENTRY'))
        }
        
        console.log(`So far you have caught: ${keptTotal.length} fish, ${weightTotal}lbs, $${priceTotal}`)
        
        //increase round by one
        roundTotal ++; 
        
        
    }
    console.log(chalk.red(`The time is 7 pm, times up!`))
    console.log(chalk.green(`You caught ${keptTotal.length} fish: `))
    for(let j = 0 ; j < keptTotal.length; j++) {
        console.log(chalk.blue(`* ${keptTotal[j].name}, ${keptTotal[j].weight} lbs, $${keptTotal[j].cost}`))
    }
    
    console.log(chalk.blueBright(`Total Weight: ${weightTotal}lbs.`))
    console.log(chalk.yellowBright(`Total Value: $${priceTotal}`))
    

}
console.log(fishingRounds())

///----------
// console.log(fishingRounds(randomFish))
// console.log('overall total',weightTotal)
// console.log('overall price',priceTotal)
// console.log('caught fish list', caughtTotal)


// console.log(randomSelection(randomFish))
//while turn < 6 hours 
    //show progress and current time
    //add random fish
    //ask user catch/release?
    //show progess & time
    //if max weight exceeds delete curr fish
        //prompt user for going over max
