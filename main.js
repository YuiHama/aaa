window.onload = function () {
    var btns = document.getElementsByClassName('abtnsfa');
    var divs = document.getElementsByClassName('abtnsson');

    for (var i = 0; i < btns.length; i++) {
        btns[i].index = i;
        btns[i].onclick = function () {
            for (var i = 0; i < btns.length; i++) {
                btns[i].style.backgroundColor = "white";
                btns[i].style.color = "#8fcddf";
                divs[i].style.display = 'none';
            }
            this.style.backgroundColor = "#8fcddf";
            this.style.color = "white";
            divs[this.index].style.display = 'block';
        }
    }
}