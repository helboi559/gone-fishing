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

//***Fish for 1 hour***
function fishingRounds(catches) {
    //running counts
    let weightTotal = 0;
    let priceTotal = 0;
    let roundTotal = 1;
    let keptTotal = [];
    console.log('Youve entered a fishing tournament! You have 6 Hours to catch as many fish totaling under 10 lbs!')
    while (roundTotal < 6) {
        console.log(`the Time is ${roundTotal}:00 PM`)
        let fishReeledIn = randomSelection(catches)
        // console.log('random fish added', fishReeledIn)
        //give random weight
        fishReeledIn.weight = Math.random()* 10 + 1
        // console.log('random weight added',fishReeledIn)
        //increase overall total's
        // roundTotal = roundTotal += 1
        console.log(`You caught a ${fishReeledIn.name}, weighing in at ${fishReeledIn.weight}, with a value of $${fishReeledIn.cost}`)
        let caughtTotal = [];
        caughtTotal.push(fishReeledIn);
        
        for(let i = 0 ; i < caughtTotal.length ; i++) {
            if(caughtTotal[i].weight + weightTotal > 10) {
                let overLimit = prompt('You went over 10 lbs! Removing current fish: hit "1" to continue: ');
                if(overLimit === '1') {
                    caughtTotal = caughtTotal.splice(i,1);

                }
            }
        }
        //ask user for input
        let catchRelease = prompt('catch or release?("c", "r"): ')
        if(catchRelease === 'c') {
            weightTotal = weightTotal + fishReeledIn.weight
            priceTotal = priceTotal + fishReeledIn.cost
            keptTotal.push(fishReeledIn)
        } else if(catchRelease === 'r'){
            caughtTotal = caughtTotal.splice(caughtTotal[caughtTotal.length-1], 1);
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
console.log(fishingRounds(randomFish))


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




