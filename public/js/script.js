'use script'

//////// adding a message to the chat history functionality  ////////

// selecting a send button
const sendButton = document.querySelector('.btn-send');
const chatHistory = document.querySelector('.chat-history');
// 

sendButton.addEventListener('click', () => {
  // getting user's text from the textarea
  let message = document.getElementById('message-text').value;

  // creating a p teg with the message from textarea
  let liTag = document.createElement("li");
  const node = document.createTextNode(message);
  liTag.appendChild(node);
  
  // adding a visulatiy to the sent message
  liTag.classList.add("sent");
  //add to the chat-box
  chatHistory.appendChild(liTag)
})
