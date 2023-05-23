const messageContainer = document.querySelector('#messageContainer');
const messageForm = document.querySelector('#messageForm');

messageForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const usernameInput = messageForm.elements.username;
    const messageInput = messageForm.elements.message;
    addMessage(usernameInput.value, messageInput.value);
    usernameInput.value = '';
    messageInput.value = '';
});

const addMessage = (username, message) => {
    const newMessage = document.createElement('li');
    const bTag = document.createElement('b');
    const iTag = document.createElement('i');
    iTag.append(username);
    bTag.append(iTag);
    newMessage.append(bTag);
    newMessage.append(` - ${message}`);
    messageContainer.append(newMessage);
};






