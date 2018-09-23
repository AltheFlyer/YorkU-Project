var bars = document.querySelectorAll(".bar div");

updateProgress();

function updateProgress() {
    for (var i = 0, len = bars.length; i < len; ++i) {
        var percent = bars[i].getAttribute("per");
        //console.log(percent);
        bars[i].style.width = percent;
    }
}