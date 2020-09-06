
const scorecard = {
  "cats": 128,
  "pollen": 64,
  "chocolate": 32,
  "tomatoes": 16,
  "strawberries": 8,
  "shellfish": 4,
  "peanuts": 2,
  "eggs": 1,
}


const findAllergies = function(allergyScore){
  console.log('Your Allergy Score is: ', allergyScore);
  const output = [];
  for(key in scorecard){
    if(allergyScore >= scorecard[key]){
      allergyScore-=scorecard[key];
      output.push(key)
    }
  }//for in loop
  console.log(`To stay healthy, you must avoid ${output.join(', ')}.`);
};

findAllergies(12);
findAllergies(34);
