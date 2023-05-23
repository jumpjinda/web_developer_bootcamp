const container1 = document.querySelector('#container1');
container1.addEventListener('click', function () {
    alert("section clicked");
});

const div1 = document.querySelector('#div1');
div1.addEventListener('click', function () {
    alert("div clicked");
});

const button1 = document.querySelector('#button1');
button1.addEventListener('click', function () {
    alert("button clicked");
});

const container2 = document.querySelector('#container2');
container2.addEventListener('click', function () {
    alert("section clicked");
});

const div2 = document.querySelector('#div2');
div2.addEventListener('click', function () {
    alert("div clicked");
});

const button2 = document.querySelector('#button2');
button2.addEventListener('click', function (e) {
    alert("button clicked");
    e.stopPropagation();
});