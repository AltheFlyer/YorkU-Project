function terms(success, name, definition){ 
  this.scs = success; //Out of 100
  //this.num = n; //Index of dictionary
  this.term = name; 
  this.def = definition;
}

var dict = []; //Always stays the same order. String-term key
var sort_a = []; //Integer key. Updated sorted array

dict[add.term] = new terms(2, add.term, add.def);
sort_a[sort_a.length] = dict[add.term]; //Updating sorted array

dict[add1.term] = new terms(0, add1.term, add1.def);
sort_a[sort_a.length] = dict[add1.term]; //Updating sorted array

c(dict);
c(sort_a);
c();

sort_a.sort(function cmp(a, b){ //Sort sorted array
  return a.scs-b.scs;
});

console.log(sort_a);
