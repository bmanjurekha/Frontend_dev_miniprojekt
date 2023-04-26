const sendBtn = document.querySelector('.review-btn');
const messageField = document.querySelector('.message-field');
const reviewMessage = document.querySelector('.review-message');
const typingStatus = document.querySelector('.typing-status');

const removeTypingStatus = () => typingStatus.classList.remove('typing-status--typing');

function createMessageElement(content) {
  const li = document.createElement("li");
  li.textContent = content;

  return li;
}

function appendMessage() {
  const msgContent = messageField.value;
  const msgElement = createMessageElement(msgContent);

  reviewMessage.append(msgElement);

  messageField.value = ''; // clears the input field

  removeTypingStatus();
}
sendBtn.addEventListener("click", appendMessage);


function handleKey(event) {
  // if(event.key != "Enter") return false; // guardian clause v1

  if(event.key != "Enter") {
    
    if(!typingStatus.classList.contains('typing-status--typing')) {
      setTimeout(removeTypingStatus, 2000); // After two seconds, remove typing class modifier
    }

    typingStatus.classList.add('typing-status--typing');

    return false; // guardian clause v2
  }
   
  
  appendMessage();
}
messageField.addEventListener("keydown", handleKey);