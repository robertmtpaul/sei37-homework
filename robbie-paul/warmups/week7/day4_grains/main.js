const grains = {
    maxNoSquares: 64;

    grainsInSquare: function(number) {
        return 2 ** (number - 1)
    }, 
    
    grainsAllSquares: function( {
        for (let i = 0; i < this.maxNoSquares; i++) {
            console.log(`Square ${i}: ${this.grainsInSquare(i)}`);
        }//grainsAllSquares
    }, 

    totalGrains: function() {
        for (let i = 1; i <= this.maxNoSquares; i)
    }



} //grains