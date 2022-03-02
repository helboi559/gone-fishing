//random generated fish(name/weight/values)
//time of day shown to user
//maximum of 10 lbs
//each turn, sum of fishes caught is displayed
//max time of 6 hours
//----------------------------------------

const prompt = require('prompt-sync')({sigint:true});

//set random fish caught by fisher
const randomSelection = () => {
    const randomFish = [{name:'nemo', weight: 0, cost: 0}, {name:'dory', weight:0, cost: 0},
{name:'bruce', weight: 0, cost: 0}, {name:'jaws', weight:0, cost: 0}];
    let randomIdx = Math.floor(Math.random() * randomFish.length)
    return randomFish[randomIdx]
}
// console.log(randomFishWeight(randomFish))

//***Fish for 1 hour***
function fishingRounds() {
    //set identify random fish to "catch"
    const chalk = require('chalk');
    //running counts
    let weightTotal = 0;
    let priceTotal = 0;
    let roundTotal = 1;
    let keptTotal = [];
    //start the game
    console.log(chalk.pink('Youve entered a fishing tournament! You have 6 Hours to catch as many fish totaling under 10 lbs!'))
    //set limit at 6 hours
    while (roundTotal < 6) {
        //display the current time
        console.log(chalk.yellow(`the Time is ${roundTotal}:00 PM`))
        // console.log('random fish added', fishReeledIn)
        //give random weight/random price
        let fishReeledIn = randomSelection()
        fishReeledIn.weight = Math.random()* 10 
        fishReeledIn.cost = Math.random()* 100
        // console.log('random weight added',fishReeledIn)
        //display what fish caught to user
        console.log(chalk.green(`You caught a ${fishReeledIn.name}, weighing in at ${fishReeledIn.weight}, with a value of $${fishReeledIn.cost}`))
        //add fish to 
        // let caughtTotal = [];
        // caughtTotal.push(fishReeledIn);
        //if weight of current fish > total 
        if(weightTotal + fishReeledIn.weight > 10){
            // let overLimit = Number(prompt('You went over 10 lbs! Removing current fish: hit "1" to continue: '));
            console.log(chalk.red('you went over 10 lbs! this fish will be released when asked'))  
            roundTotal ++; 
        } 
        
        let catchRelease = prompt('catch or release?("c", "r"): ');
        if(catchRelease === 'c') {
            weightTotal = weightTotal + fishReeledIn.weight
            priceTotal = priceTotal + fishReeledIn.cost
            keptTotal.push(fishReeledIn)
        } else if(catchRelease === 'r'){
            // caughtTotal = caughtTotal.splice(caughtTotal[caughtTotal.length-1], 1);
            console.log('Trew fish back in the sea!')
        } else {
            console.log('ERROR-INVALID ENTRY')
        }
        
        console.log(`So far you have caught: ${keptTotal.length} fish, ${weightTotal}lbs, $${priceTotal}`)
        
        //increase round by one
        roundTotal ++; 
        
        
    }
    console.log(`The time is 7 pm, times up!`)
    console.log(`You caught ${keptTotal.length} fish:`)
    for(let j = 0 ; j < keptTotal.length; j++) {
        console.log(`* ${keptTotal[j].name}, ${keptTotal[j].weight} ${keptTotal[j].cost}`)
    }
    
    console.log(`Total Weight: ${weightTotal}`)
    console.log(`Total Value: ${priceTotal}`)
    

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
