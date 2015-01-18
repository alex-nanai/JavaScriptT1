var txtInput;

function initialize() {
    txtInput = document.getElementById('txtInput');
    for (var i = 0; i < 10; i++) {
        document.getElementById('btn'+i).addEventListener('click', numberClick, false);
    }
    //$('#btn5').bind('click', numberClick);
}

function numberClick() {
    var number = this.innerText;
    txtInput.value = txtInput == 0 ? number : txtInput.value + number;
}