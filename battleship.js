//locations
var location1 = 3; 
var location2 = 4;
var location3 = 5;

//holds the user's guess
var guess;
//holds the number of hits
var hits = 0;
//holds the number of guesses
var guesses = 0;
//keeps track of whether a ship is sunk or not
var isSunk = false;

//Loop while the ship is not sunk
while(isSunk == false)
{
    guess = prompt("Ready, aim, fire! (Enter a number from 0 - 6): ");

        if(guess < 0 || guess > 6)
        {
            alert("Invalid entry! (Enter a number from 0 - 6): ");
        }
        else
        {
            guesses = guesses + 1;
       
            if(guess == location1 || guess == location2 || guess == location3)
            {
                alert("HIT!!");
                hits = hits + 1;

                if(hits == 3) {
                    isSunk = true;

                    alert("You sank my battleship!");
                }
            } 
            else 
            {
                alert("MISS!!");
            }
           
            
        }
    }    

    var stats = "You took " + guesses + " guesses to sink my battleship, " + " which means that your accuracy is " + (3/guesses * 100 + " percent.");
    alert(stats);