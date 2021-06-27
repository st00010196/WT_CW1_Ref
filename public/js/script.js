"use script";

//////// adding a message to the chat history functionality  ////////

// selecting a send button
const sendButton = document.querySelector(".btn-send");
const chatHistory = document.querySelector(".chat-history");
const messageBox = document.getElementById("message-text");
//

// execute the following lines of code only on the contacts page
if (document.getElementById("contacts")) {
  sendButton.addEventListener("click", () => {
    // getting user's text from the textarea
    let message = messageBox.value;

    // creating a p teg with the message from textarea
    if (!(message.trim().length < 2)) {
      addLi(message, true);
    }

    // empty the typing box
    document.getElementById("message-text").value = "";
  });

  // more chats
  const brother = document.getElementById("brother");
  const ex = document.getElementById("ex");
  const sister = document.getElementById("sister");
  const teacher = document.getElementById("teacher");

  brother.addEventListener("click", () => {
    cleanChat();
    addLi("Brother, how is it going?!", false);
    addLi("Hey! Cool, what are you doing?", true);
    visulatiy(brother);
  });

  ex.addEventListener("click", () => {
    cleanChat();
    addLi("I know that you still love me!", false);
    addLi("NOOOOOO! Stop chasing me!!!!", true);
    addLi("You are the craziest girl I have ever met in my life", true);
    visulatiy(ex);
  });

  sister.addEventListener("click", () => {
    cleanChat();
    addLi("Hey, sis. Have you cleaned the kitchen?", true);
    addLi("Yes :((. You owe me now!", false);
    addLi("One M&M. How does this sound?", true);
    addLi("Sounds fine, yellow one is more preferable", false);
    visulatiy(sister);
  });

  teacher.addEventListener("click", () => {
    cleanChat();
    addLi("Good morning dear teacher!", true);
    addLi("GM dear student!", false);
    addLi("Can you please tell me, what was the homework?", true);
    addLi('Unit 6,7 and chapters 3-5 on the book "Alice in wonderland"', false);
    visulatiy(teacher);
  });
}

function addLi(txt, sent) {
  const liTag = document.createElement("li");
  const node = document.createTextNode(txt);
  liTag.appendChild(node);

  // adding a visulatiy to the sent message

  // ternary operator
  sent === true ? liTag.classList.add("sent") : liTag.classList.add("received");
  //add to the chat-box
  chatHistory.appendChild(liTag);
}

function cleanChat() {
  chatHistory.innerHTML = "";

  const liTag = document.createElement("li");
  const node = document.createTextNode("July 24");
  liTag.appendChild(node);

  liTag.classList.add("date");
  chatHistory.appendChild(liTag);
}

function visulatiy(tag) {
  brother.classList.remove("active");
  ex.classList.remove("active");
  sister.classList.remove("active");
  teacher.classList.remove("active");

  tag.classList.add("active");
}

//////// form validation functionality  ////////

// getting all the needed tags
const givenName = document.getElementById("name");
const givenPhone = document.getElementById("phone");

const btnSubmit = document.querySelector(".btn-submit");

// execute these lines of code only on the page with the tag with the class name "form"
if (document.querySelector(".form")) {
  btnSubmit.addEventListener("click", (e) => {
    // if name is less than 2 characaters long
    if (givenName.value.trim().length < 2) {
      // do not accept the form
      e.preventDefault();
      alert("Name must be at least two characters long!");
    } else if (givenPhone.value.length != 12) {
      alert("Phone number format is incorrect for our region");
      e.preventDefault();
    }
  });
}

// prices page messages to users
const btnsBuy = document.querySelectorAll(".btn-get");

if (document.querySelector(".price-main")) {
  btnsBuy[0].addEventListener("click", () => {
    alert("Thank you for premium subscription! You may now enjoy our app with no restrictions :)");
  });
  btnsBuy[1].addEventListener("click", () => {
    alert("Thank you for gold subscription! Enjoy unlimited messages :)");
  });
}
