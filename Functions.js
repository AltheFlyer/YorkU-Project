//Item addition
var groupEditor = document.querySelector(".group-editor");
var questionEditor = document.querySelector(".question-editor");

var groupSubmit = groupEditor.querySelector(".active");
var questionSubmit = questionEditor.querySelector(".active");

//Question progression
var bigQuestion = document.querySelector(".question");
var desc = document.querySelector(".description");
var correctDesc = document.querySelector(".correct-response");
var input = document.querySelector(".main .button-1");
var input2 = document.querySelector(".main .button-2");

var counter = document.querySelector(".counter");
var radio = document.querySelectorAll("[name='answer']");
var radioText = document.querySelectorAll(".radio");

groupSubmit.addEventListener("click", addGroup);
questionSubmit.addEventListener("click", addQuestion);
input.addEventListener("click", incrementCount);
input2.addEventListener("click", updateQuestion);

function right(name){ //Updating the success rate when the user gets a problem right
  var i;
  dict[name].scs -= 2;
  for(i=0; i<groups[name].length; i++){
    dict[groups[name][i]].scs = Math.max(0, dict[groups[name][i]].scs-2);
  }
  sort_a.sort(function cmp(a, b){ //Sort sorted array
    return a.scs-b.scs;0
  });
}

function wrong(name){ //Decreasing the success rate when the user gets a problem wrong
  var i;
  dict[name].scs -= 2;
  for(i=0; i<groups[name].length; i++){
    dict[groups[name][i]].scs = Math.min(100, dict[groups[name][i]].scs+2);
  }
  sort_a.sort(function cmp(a, b){ //Sort sorted array
    return a.scs-b.scs;0
  });
}

function incrementCount() {
    c(sort_a);
    a = parseInt(counter.getAttribute("count"));
    a += 1;
    counter.setAttribute("count", a);
    counter.textContent = "Questions completed: " + a;

    
    desc.style.visibility = "visible";
    answer = sort_a[0].correct;
    input2.style.visibility = "visible";
    input.style.visibility = "hidden";
    //Good thing only happens when option is correct
    if (radio[answer].checked) {
        desc.textContent = sort_a[0].def;
        right(sort_a[0].term);
        correctDesc.textContent = "Correct!";
    } else {
        wrong(sort_a[0].term);
        desc.textContent = sort_a[0].def;
    }
}

function updateQuestion() {
    shuffle(sort_a);
    bigQuestion.textContent = sort_a[0].term;
    input2.style.visibility = "hidden";
    input.style.visibility = "visible";
    desc.style.visibility = "hidden";
    correctDesc.textContent = "";
    for (var i = 0; i < 5; ++i) {
        radioText[i].textContent = sort_a[0].answer[i];
    }
}

function c(a) {
  console.log(a);
}

var dict = []; //Always stays the same order. String-term key
var sort_a = []; //Integer key. Updated sorted array
var groups = [];

function terms(success, name, definition, correct, answer){ 
  this.scs = success; //Out of 100. 0 is highest success rate, 100 is lowest
  //this.num = n; //Index of dictionary
  this.term = name; 
  this.def = definition;
  this.correct = correct;
  this.answer = answer;
}

function addGroup() {
    this.name = groupEditor.querySelector("input[name='group']").value;

    groups[this.name] = [];
}

function addQuestion() {

  this.term = questionEditor.querySelector("input[name='question']").value;

  this.def = questionEditor.querySelector("input[name='desc']").value;

  this.group = questionEditor.querySelector(".select-group").value;
    
  this.correct = parseInt(questionEditor.querySelector(".select-answer").value) - 1;
  this.raw_answers = questionEditor.querySelectorAll("[name='option']");
  this.answers = ['', '', '', '', ''];

  for (var i = 0; i < 5; ++i) {
      this.answers[i] = this.raw_answers[i].value;
  }

  var newQuestion = new terms(100, this.term, this.def, this.correct, this.answers);
  dict[this.term] = newQuestion;
  sort_a[sort_a.length] = newQuestion;
  //ARRAY DOES NOT STORE DUPLICATES
  c(dict);
  c(sort_a);
}

function add2Group(term, group){
    groups[group].push(term);
    c(groups);
}

/**************Making terms*****************************************/

/*
addGroup();

//groups["Human"].push("Head");
add2Group(add.term, add.group);
c(groups)
*/

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
