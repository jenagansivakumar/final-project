import { process } from "/env";

const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const melodyGenerator = document.getElementById("movie-boss-text");

const apiKey = "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";
const url = "https://api.openai.com/v1/completions";

document.getElementById("send-btn").addEventListener("click", () => {
  // if (setupTextarea.value) {
  setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
  melodyGenerator.innerText = `Ok, just wait a second while my digital brain digests that...`;
  // }
  fetchBotReply();
});

function fetchBotReply() {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: "What is the definition of music?",
    }),
  })
    .then((response) => response.json())
    .then((data) => (melodyGenerator.innerText = data.choices[0].text));
}
