'use script'

//////// adding a message to the chat history functionality  ////////

// selecting a send button
const sendButton = document.querySelector('.btn-send');
const chatHistory = document.querySelector('.chat-history');
// 

// execute the following lines of code only on the contacts page
if(document.getElementById("contacts")){
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
}


//////// form validation functionality  ////////

// getting all the needed tags
const givenName = document.getElementById("name");
const givenPhone = document.getElementById("phone");

const btnSubmit = document.querySelector(".btn-submit");

// execute these lines of code only on the page with the tag with the class name "form"
if(document.querySelector(".form")){
  btnSubmit.addEventListener("click", (e) => {
    
    // if name is less than 2 characaters long 
    if(givenName.value.trim().length < 2){
      // do not accept the form
      e.preventDefault()
      alert("Name must be at least two characters long!")
    } else if(givenPhone.value.length != 12){
      alert("Phone number format is incorrect for our region")
      e.preventDefault();
    } 
  })
}