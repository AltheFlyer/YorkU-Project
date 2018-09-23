var desc = document.querySelector(".description");
var input = document.querySelector(".main button");

var counter = document.querySelector(".counter");
var radio = document.querySelectorAll("[name='answer']");
console.log(radio);

input.addEventListener("click", incrementCount);

function incrementCount() {
    console.log(counter.getAttribute("count"));
    a = parseInt(counter.getAttribute("count"));
    a += 1;
    counter.setAttribute("count", a);
    counter.textContent = "Questions completed: " + a;
    answer = 2;
    if (radio[answer].checked) {
        console.log("YES");
    }
}
