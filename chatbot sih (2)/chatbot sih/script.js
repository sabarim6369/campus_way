const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotElement = document.querySelector(".chatbot");

let responses = {};

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        responses = data;
    })
    .catch(error => console.error('Error fetching responses:', error));

const createChatLi = (message, classname) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", classname);
    const chatContent = classname === "outgoing"
        ? `<p>${message}</p>`
        : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
};

const generateResponse = (incomingChatLi, userMessage) => {
    const messageElement = incomingChatLi.querySelector("p");
    const lowerCaseMessage = userMessage.toLowerCase();
    const response = responses[lowerCaseMessage] || responses["default"];
    messageElement.textContent = response;
};

const handleChat = () => {
    const userMessage = chatInput.value.trim();
    if (!userMessage) return;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatInput.value = "";

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        generateResponse(incomingChatLi, userMessage);
    }, 300);
};

// Toggle chatbot visibility
chatbotToggler.addEventListener("click", () => {
    document.body.classList.toggle("show-chatbot");
});

// Send message on button click
sendChatBtn.addEventListener("click", handleChat);

// Optionally send message on Enter key press
chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        handleChat();
    }
});
