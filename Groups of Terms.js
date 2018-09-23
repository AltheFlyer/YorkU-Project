function c(a){
  console.log(a);
}

function group(name){ 
	this.name = name;
	this.terms = []; //index of term in dictionary
}

var a = new group("hi");
var d = 1;
a.terms.push(d);
a.terms.push(2);
console.log(a.terms);

//when its right
var i;
for(i=0; i<a.terms.length; i++){
  //c(dict[a.terms[i]]);
  dict[a.terms[i]].scs+=2; //The success rate of each index in the dictionary increases 
}


