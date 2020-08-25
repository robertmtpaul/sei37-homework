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

    getKeys: function(){
        const allergyKeys = Object.keys(this.scorecard).map(Number).reverse();
        console.log(allergyKeys)
    },

    //2. compare our score to the list of scores
    getList: function(score){
        const allergyKeys = this.getKeys();
        console.log(allergyKeys);
    }
}

allergies.getList();
allergies.getList(34);