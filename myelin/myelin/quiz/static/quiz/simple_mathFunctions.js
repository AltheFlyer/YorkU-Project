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
        correctDesc.textContent = "Correct!";
    } else {
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

//Add pre-made items
dict[0] = new terms(2, "What is 5 * 8?", "5 * 8 = 40", 3, ["5", "8", "13", "40", "25"])
sort_a[0] = new terms(2, "What is 5 * 8?", "5 * 8 = 40", 3, ["5", "8", "13", "40", "25"])
dict[1] = new terms(2, "What is 5% of 40?", "5% of 40 is 2", 1, ["5", "2", "8", "10", "4"])
sort_a[1] = new terms(2, "What is 5% of 40?", "5% of 40 is 2", 1, ["5", "2", "8", "10", "4"])

function terms(success, name, definition, correct, answer){ 
  this.scs = success; //Out of 100
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

  var newQuestion = new terms(2, this.term, this.def, this.correct, this.answers);
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