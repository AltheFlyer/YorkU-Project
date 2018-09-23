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

function right(name) { //Updating the success rate when the user gets a problem right
    var i;

    name.scs += 2;
    if (groups[name.group] == undefined) {

    } else {
        for (i = 0, len = groups[name.group].length; i < len; i++) {
            //alert(i);
            dict[groups[name.group][i]].scs = Math.min(100, dict[groups[name.group][i]].scs + 2);
        }
    }
    sort_a.splice(0, 1); //deleting element from array that got right

    sort_a.sort(function cmp(a, b) { //Sort sorted array

        return a.scs - b.scs; 0

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
        right(sort_a[0]);
        correctDesc.textContent = "Correct!";
    } else {
        desc.textContent = sort_a[0].def;
    }
}

function updateQuestion() {
    shuffle(sort_a);
    if (sort_a[0] !== undefined) {
        bigQuestion.textContent = sort_a[0].term;
        input2.style.visibility = "hidden";
        input.style.visibility = "visible";
        desc.style.visibility = "hidden";
        correctDesc.textContent = "";
        for (var i = 0; i < 5; ++i) {
            radioText[i].textContent = sort_a[0].answer[i];
        }
    } else {
        alert("No questions left!");
    }
}

function c(a) {
    console.log(a);
}

var dict = []; //Always stays the same order. String-term key
var sort_a = []; //Integer key. Updated sorted array
var groups = [];

dict[0] = new terms(2, "What is the powerhouse of the cell?", "The mitochondria", 2, ["The nucleus", "The cell wall", "The mitochondria", "The brain", "The ribosomes"], "Block A");
sort_a[0] = new terms(2, "What is the powerhouse of the cell?", "The mitochondria", 2, ["The nucleus", "The cell wall", "The mitochondria", "The brain", "The ribosomes"], "Block A");

dict[1] = new terms(2, "Who was Robert Hooke?", "A scientist who studied and coined the name 'cell'", 0, ["A scientist", "An animal", "A protestor", "A pirate", "A plant cell"], "Block A");
sort_a[1] = new terms(2, "Who was Robert Hooke?", "A scientist who studied and coined the name 'cell'", 0, ["A scientist", "An animal", "A protestor", "A pirate", "A plant cell"], "Block A");

function terms(success, name, definition, correct, answer, group) {
    this.scs = success; //Out of 100. 100 is highest success rate, 0 is lowest
    this.term = name;
    this.def = definition;
    this.correct = correct;
    this.answer = answer;
    this.group = group;
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
    var newQuestion = new terms(0, this.term, this.def, this.correct, this.answers, this.group);

    dict[this.term] = newQuestion;

    sort_a[sort_a.length] = newQuestion;

    add2Group(this.term, this.group);

    //ARRAY DOES NOT STORE DUPLICATES
}
function add2Group(term, group) {
    if (groups[group] == undefined) {
        groups[group] = [];
        //alert(group);
    }
    groups[group].push(term);
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

