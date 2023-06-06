const socket = io();

function sendMessage() {
 document.getElementById('inputTxt').value.trim();
  if (message !== '') {
    socket.emit('message', message);
    messageInput.value = '';
  }
}
socket.on('message', (response) => {
   const messageElement = document.createElement('div');
  messageElement.innerText = `Bot: ${response}`;
  document.getElementById('container').appendChild(messageElement);;
});