var groupEditor = document.querySelector(".group-editor");
var questionEditor = document.querySelector(".question-editor");

var groupSubmit = groupEditor.querySelector(".active");
var questionSubmit = questionEditor.querySelector(".active");

groupSubmit.addEventListener("click", addGroup);
questionSubmit.addEventListener("click", addQuestion);

function addGroup() {
    console.log(groupEditor.querySelector("input[name='group']").value);
}

function addQuestion() {
    console.log(questionEditor.querySelector("input[name='question']").value);
    console.log(questionEditor.querySelector("input[name='desc']").value);
    console.log(questionEditor.querySelector("select").value)
}