document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeBtn = document.getElementById("close-btn");
  const sendBtn = document.getElementById("send-btn");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotIcon = document.getElementById("chatbot-icon");

  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none";
  });


  closeBtn.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex";
  });

  sendBtn.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  async function getBotResponse(userMessage) {
    const apiKey = "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";
    const apiUrl = "https://api.openai.com/v1/chat/completions";

    try {
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: userMessage }],
          max_tokens: 150,
        }),
      });

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        const botMessage = data.choices[0].message.content;
        appendMessage("bot", botMessage);
      } else {
        appendMessage("bot", "⚠️ No response received. Try again.");
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
      appendMessage("bot", "❌ Sorry, something went wrong. Please try again.");
    }
  }
});

const audio = document.getElementById("backgroundAudio");
function changeVolume(direction) {
  if (!audio) return;
  if (direction === "up") {
    audio.volume = Math.min(audio.volume + 0.1, 1);
  } else if (direction === "down") {
    audio.volume = Math.max(audio.volume - 0.1, 0);
  }
}

function toggleMute() {
  if (!audio) return;
  audio.muted = !audio.muted;
}

