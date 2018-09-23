function c(a){
  console.log(a);
}

var dict = []; //Always stays the same order. String-term key
var sort_a = []; //Integer key. Updated sorted array
var groups = [];

function terms(success, name, definition){ 
  this.scs = success; //Out of 100
  //this.num = n; //Index of dictionary
  this.term = name; 
  this.def = definition;
}

function addGroup() {
    this.name = "Human"; //console.log(groupEditor.querySelector("input[name='group']").value);

    groups[this.name] = [];

}

function addQuestion() {

  this.term = "Head";// = questionEditor.querySelector("input[name='question']").value;

  this.def = "Round";// = questionEditor.querySelector("input[name='desc']").value;

  this.group = "Human";// = questionEditor.querySelector("select").value;

  dict[this.term] = new terms(2, this.term, this.def);
  sort_a[sort_a.length] = dict[this.term];
}

function add2Group(term, group){
  groups[group].push(term);
}

/**************Making terms*****************************************/
var add = new addQuestion;
add.term = "Head";
add.def = "Round";
add.group = "Human";

var add1 = new addQuestion;
add1.term = "Head1";
add1.def = "Round1";
add1.group = "Human";
addGroup();
c(dict);
c(groups);
//groups["Human"].push("Head");
add2Group(add.term, add.group);
c(groups)


function shuffle(array) { //Fisher-Yates Shuffle of sorted deck for initial randomization
  var m = array.length, t, i;

  while (m) {

    i = Math.floor(Math.random() * m--);

    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}
