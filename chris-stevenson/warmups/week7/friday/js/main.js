

const letterCounter = function(string){
  const array = string.split(' ').join('').split('').sort();
  const result = {
    tempLetter: '',
    tempCount: 1,
    letter: '',
    count: 0
  }
  array.forEach((letter, index) => {
    if(letter === array[index - 1]){
      result.tempCount++;
      result.tempLetter = letter;
    } else {
      if(result.tempCount > result.count){
        result.letter = result.tempLetter;
        result.count = result.tempCount;
      }
      result.tempCount = 1
    }

  }); //each loop
  const newString = string.split('').map(function(letter){
    if(letter === result.letter){
      return letter.toUpperCase();
    } else {
      return letter;
    }
  }).join('')
  console.log(`The most common letter in '${newString}' is '${result.letter}' with ${result.count} instances.`);
};


letterCounter('gloop')
letterCounter('bubble')
letterCounter('tigger')
letterCounter('just a simple sentence chilling')
