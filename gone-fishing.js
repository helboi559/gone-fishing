//random generated fish(name/weight/values)
//time of day shown to user
//maximum of 10 lbs
//each turn, sum of fishes caught is displayed
//max time of 6 hours
//----------------------------------------

const prompt = require('prompt-sync')({sigint:true});


const randomFish = [{name:'nemo', weight: 0, cost: 2.50}, {name:'dory', weight:0, cost: 8.66},
{name:'bruce', weight: 0, cost: 59.99}, {name:'jaws', weight:0, cost: 150000}];


//set random fish caught by fisher
const randomSelection = fishList => {
    let randomIdx = Math.floor(Math.random() * fishList.length)
    return fishList[randomIdx]
}
// console.log(randomFishWeight(randomFish))
//running counts
let weightTotal = 0;
let priceTotal = 0;
let roundTotal = 0;

//***Fish for 1 hour***
function fishingRound(catches) {
    //identify fish and weight
    let fishReeledIn = randomSelection(catches)
    console.log('random fish', fishReeledIn)
    //give random weight
    fishReeledIn.weight = Math.random()* 10 + 1
    console.log('random weight added',fishReeledIn)
    //increase overall total's
    weightTotal = weightTotal + fishReeledIn.weight
    priceTotal = priceTotal + fishReeledIn.cost
    roundTotal = roundTotal += 1
    
}
console.log(fishingRound(randomFish))
console.log('overall total',weightTotal)
console.log('overall price',priceTotal)

// console.log(randomFishWeight())


// console.log(randomSelection(randomFish))
//while turn < 6 hours 
    //show progress and current time
    //add random fish
    //ask user catch/release?
    //show progess & time
    //if max weight exceeds delete curr fish
        //prompt user for going over max




