const inputRgn = document.getElementById('font-size-control');
const text = document.getElementById('text');
function changeFontSize(event) {
    text.style.fontSize = this.value + "px";
}

inputRgn.addEventListener("input", changeFontSize);

