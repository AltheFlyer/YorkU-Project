function terms(success, n, name, definition){  //object dictionary for all the terms
  this.scs = success; //Score out of 100, 100: mastered, 0: more repeats
  this.num = n; //Index of 
  this.term = name; //Term of flashcard
	this.def = definition; 
}

var dict = []; //Always stays the same order
var sort_a = []; //Array to sort using priority queue


var y  = 0;
while(y < 10){ //Getting the terms, y value is to be changed
	dict[y] = new terms(10-y, y, "term"+y, "def"+y);
  sort_a[y] = dict[y];
  y++;
}

for(i=0; i<dict.length; i++){ //Printing stuff out
  console.log(sort_a[i]); //
}
console.log(); //

sort_a.sort(function cmp(a, b){ //Priority sorting queue
  return a.scs-b.scs;
});

console.log(sort_a);
