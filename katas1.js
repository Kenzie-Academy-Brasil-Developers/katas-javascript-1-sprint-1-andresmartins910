// function oneThroughTwenty
function oneThroughTwenty() {
  let oneThroughTwenty = [] 
  for (i = 1; i <= 20; i++) {
    oneThroughTwenty.push(i)
  }
  return oneThroughTwenty
}

console.log(oneThroughTwenty())

// function evensToTwenty

function evensToTwenty() {
  let evensToTwenty = []
  for (i = 2; i <= 20; i += 2) {
    evensToTwenty.push(i)
  }
  return evensToTwenty  
}

console.log(evensToTwenty())

// function oddsToTwenty

function oddsToTwenty() {
  let oddsToTwenty = []
  for (i = 1; i <= 20; i += 2) {
    oddsToTwenty.push(i)
  }
  return oddsToTwenty
}

console.log(oddsToTwenty())

// function multiplesOfFive

function multiplesOfFive() {
  let multiplesOfFive = []    
  for (i = 5; i <= 100; i += 5) {
    multiplesOfFive.push(i)
  }
  return multiplesOfFive
}

console.log(multiplesOfFive())

//  function squareNumbers

function squareNumbers() {
  let squareNumbers = []
  for (i = 1 ; i <= 10; i++) {
    squareNumbers.push(Math.pow(i, 2))
  }
  return squareNumbers
}

console.log(squareNumbers())

// function countingBackwards

function countingBackwards() {
  let countingBackwards = []
  for (i = 20; i > 0; i--){
    countingBackwards.push(i)
  }
  return countingBackwards
}

console.log(countingBackwards())

// function evenNumbersBackwards

function evenNumbersBackwards() {
    let evenNumbersBackwards = []
    for (i = 20; i > 0; i -= 2) {
      evenNumbersBackwards.push(i)
    }
    return evenNumbersBackwards
}

console.log(evenNumbersBackwards())

// function oddNumbersBackwards

function oddNumbersBackwards() {
  let oddNumbersBackwards = []
  for (i = 19; i > 0; i -= 2) {
    oddNumbersBackwards.push(i)
  }
  return oddNumbersBackwards
}

console.log(oddNumbersBackwards())

// function multiplesOfFiveBackwards

function multiplesOfFiveBackwards() {
  let multiplesOfFiveBackwards = []
  for (i = 100; i > 0; i -= 5) {
    multiplesOfFiveBackwards.push(i)
  }
  return multiplesOfFiveBackwards
}

console.log(multiplesOfFiveBackwards())

// function squareNumbersBackwards

function squareNumbersBackwards() {
  let squareNumbersBackwards = []
  for (i = 10 ; i > 0; i--) {
    squareNumbersBackwards.push(Math.pow(i, 2))
  }
  return squareNumbersBackwards
}

console.log(squareNumbersBackwards())
