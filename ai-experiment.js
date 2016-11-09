/**
 * Created by jefferson.wu on 11/8/16.
 */

const actions = [
    'eat a banana',
    'eat a peanut',
    'eat a cupcake',
    'eat a turnip',
    'eat an orange',
    'eat an apple',
    'eat a cake',
    'eat a grape',
    'eat celery',
    'skin a monkey',
    'skin a cat',
    'skin a dog',
    'skin a human',
    'skin a banana'
];

//keep an array of repetition
var repetitionKeeper = [];

// perform an action
function performAction(actionArray, numIterations){

    for (var i = 0; i < numIterations; i++){
        var performedAction = actionArray[Math.floor(Math.random()*actionArray.length)];

        console.log(performedAction);

        //log to repetitionKeeper
        repetitionKeeper.push(performedAction);
    }
}

// check for repetition
function checkForRepetition(arrayToCheck) {
    //TODO: sorting algorithm play

}

// ===========================
// RUNTIME ===================
// ===========================


performAction(actions, 20);




