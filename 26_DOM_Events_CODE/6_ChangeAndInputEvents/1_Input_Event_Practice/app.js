// It's time to practice working with the input event!  In the index.html file, you'll find an <h1> and an <input type="text"> element.  Please do not change anything in index.html!  In app.js, write code that meets these requirements:

// The h1 should start with the text "Enter Your Username" (I've done that for you, already in the markup)

// Whenever an input event is fired on the <input> element, update the <h1> so that it displays "Welcome, " plus the current value from the text input.  Take a look at the gif below to see how it should work.

// If the <input> goes back to being empty, update the <h1> so that it once again says "Enter Your Username"



// Note: In the gif you can see the h1 is updating as I type, rather than whenever I leave the input.  Be sure to listen for an input event, rather than a change event.  Rewatch the previous video for more information!

const input = document.querySelector('#username');
const h1 = document.querySelector('h1');

input.addEventListener('input', function (e) {
    if (!this.value) {
        h1.innerText = "Enter Your Username";
    }
    else {
        h1.innerText = `Welcome, ${input.value}`;
    }
});