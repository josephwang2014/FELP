const scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];
function printAndGetHighScore(scores) {
    let highScore = 0;
    let output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}
let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore)
function getBestResults(scores, highScore) {
    const bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore)
            bestSolutions.push(i)
    }
    return bestSolutions;
}
const bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with the highest score: " + bestSolutions);
const costs = [.25, .27, .25, .25, .25, .25, .33, .31, .25, .29, .27, .22, .31, .25, .25, .33, .21, .25, .25, .25, .28, .25, .24, .22, .20, .25, .30, .25, .24, .25, .25, .25, .27, .25, .26, .29]
function getMostCostEffectiveSolution(scores, costs, highscore) {
    let cost = 100;
    let index;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highscore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
const mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");