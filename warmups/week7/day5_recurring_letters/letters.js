// 2.
const capLetter = function(str, letter) {
    // console.log(letter);
    const strArr = str.toLowerCase().split(''); // added a space to seperate the words
    newStrArr = [];
    // console.log(strArr);
    for (let i = 0; i < strArr.length; i++) {
            if (strArr[i] === letter){
              strArr[i] = strArr[i].toUpperCase();
            }
            newStrArr.push(strArr[i]);
        }
    return newStrArr.join('');

    // REGEX
    // you can't just input the variable within /letter/
    // you'll need to create the regex then input that into .replace
    // let regex = new RegExp(letter, 'gi')
    // anoStrArr = str.replace(regex, function(vowel) {
    //     return vowel.toUpperCase();
    // })
    // return anoStrArr;
}

// 1.
const recurrLetter = function(sentence) {
    const noSpaceSen = sentence.split(' ').join('');
    // replace here takes in a regular expression that will remove spaces where 'g' means global search - so it will replace ALL spaces
    const anotherSen = sentence.replace(/ /g, '');
    // console.log(anotherSen);
    const letterScores = {};
    let maxScore = 0;
    let maxLetter = '';
    // console.log(noSpaceSen);

    // for (let letterIndex = 0; letterIndex < noSpaceSen.length; letterIndex++) {
    //     // console.log(letterIndex);
    //     char = noSpaceSen[letterIndex];
    //     console.log(char);
    // }

    // count the amount of times each letter exists within our string or index
    noSpaceSen.split('').forEach(function(char) {
        // console.log('here is ' + char);
        // letterScores[char] = 1;
        // console.log(letterScores);
        if (letterScores[char]) {
            letterScores[char]++;
        } else {
            letterScores[char] = 1
        }
        // console.log(letterScores);
    });

    // find the letter with the highest score
    for(let char in letterScores) {
        // console.log(letterScores[char]);
        const score = letterScores[char];
        if (score > maxScore) {
            maxScore = score;
            maxLetter = char;
            // console.log(maxScore);
            // console.log(maxLetter);
        }
    }

    console.log(`The recurring letter of '${sentence}' is ${maxLetter}`);

    console.log(capLetter(sentence, maxLetter));
}

recurrLetter('he e e y e ');
recurrLetter('I love mornings');