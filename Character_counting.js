
//Returns all unique character that exist in a STRING that is passed to the function
//Return how many instances of each character were found
// Store in an object


function countLetters(inputString) {

// REMOVE EMPTY SPACES
  var myString = inputString.split(" ").join("");
  var myObject = {

  };

  for(i in myString){
// CHECK IF UNDEFINED AS OF YET AND ADD DEFAULT
    if(typeof myObject[myString[i]] === "undefined"){
       myObject[myString[i]] = 1;
    } else {
      myObject[myString[i]] += 1;
    }
  }
    return myObject;

}

  // DO I NEED A NEW KEY IN MY OBJECT ?


  //ELSE START ADDING TO MY OBJECT
  //ADD

// Setting up test cases
console.log(countLetters("Lighthouse in the house"));