function oneThroughTwenty() { 
  for (i = 1; i <= 20; i++) {
    console.log(i)
  }
}

oneThroughTwenty()
//call function oneThroughTwenty

function evensToTwenty() {
  for (i = 2; i <= 20; i += 2) {
    console.log(i)
  }  
}

evensToTwenty()
//call function evensToTwenty

function oddsToTwenty() {
  for (i = 1; i <= 20; i += 2) {
    console.log(i)
  }
}

oddsToTwenty()
//call function oddsToTwenty

function multiplesOfFive() {    
  for (i = 5; i <= 100; i += 5) {
    console.log(i)
  }
}

multiplesOfFive()
// call function multiplesOfFive

function squareNumbers() {
  for (i = 1 ; i <= 10; i++) {
    console.log(Math.pow(i, 2))
  }
}

squareNumbers()
//call function squareNumbers

function countingBackwards() {
  for (i = 20; i > 0; i--){
    console.log(i)
  }
}

countingBackwards()
//call function countingBackwards

function evenNumbersBackwards() {
    for (i = 20; i > 0; i -= 2) {
      console.log(i)
    }
}

evenNumbersBackwards()
//call function evenNumbersBackwards

function oddNumbersBackwards() {
  for (i = 19; i > 0; i -= 2) {
    console.log(i)
  }
}

oddNumbersBackwards()
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
  for (i = 100; i > 0; i -= 5) {
    console.log(i)
  }
}

multiplesOfFiveBackwards()
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
  for (i = 10 ; i > 0; i--) {
    console.log(Math.pow(i, 2))
  }
}

squareNumbersBackwards()
//call function squareNumbersBackwards
