const allergies = {
    scorecard: {
        1: "eggs",
        2: "peanuts",
        4: "shellfish",
        8: "strawberries",
        16: "tomatoes",
        32: "chocolate",
        64: "pollen",
        128: "cats"
    },

    // 1. list the scores and since we want them in descending order we'll reverse the array
    // if the object wasn't already in ascending order we would use .sort() 
    getKeys: function(){
        const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
        // console.log(allergyKeys);
        return allergyKeys;
    },

    // 2. compare our score to the list of scores
    getList: function(score){
        const allergyKeys = this.getKeys();
        // console.log(allergyKeys);

        let allergies = [];

        // for loop
        // for (let i = 0; i < allergyKeys.length; i++) {
        //     const key = allergyKeys[i];

        //     // Now we have a way to loop through each of the keys
        //     // console.log(key);

        //     if (score >= key) {
        //         allergies.push(this.scorecard[key])
        //         console.log(allergies);
        //         score -= key;
        //         console.log(score);
        //     }
        // }

        allergyKeys.forEach(key => {
            // console.log(key);
            if (score >= key) {
                allergies.push(this.scorecard[key]);
                // console.log(allergies);
                score -= key;
                // console.log(score);
            }
        });
        return allergies;
    },

    // 3. output the allergies
    diagnosis: function(score) {
        const allergies = this.getList(score);

        if (allergies.length === 0) {
            console.log("No allergies!");
        } else {
            console.log(`Allergies: ${allergies.join(', ')}`);
        }
    }
}

allergies.getKeys();
allergies.getList(34);
allergies.diagnosis(34);