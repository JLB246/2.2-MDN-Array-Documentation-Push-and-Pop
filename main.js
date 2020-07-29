// Create a new songs array.
var songs = [];

// 1. Within a for loop, prompt the user four times 
// to enter a song title. Each time they enter a song, 
// use the push method to add it to your array.


// 2. Verify that your array of songs now has four
// items in it by logging the .length of the array 
// in your console. Hint: note that .length is a 
// property rather than a function, so you don't 
// use parentheses to access it. 

// console.log( _____ )

// 3. Pop off the last item from the array, and 
// assign the popped item to a variable. 

// 4. Log the ending length of the array.

var songs = [];
for(var i = 0; i < 4; i++) {
    songs.push(prompt('Type a song title'));
}
console.log(songs.length)
songs.pop([3]);
var popped = [3]
console.log(songs);
console.log(songs.length)





