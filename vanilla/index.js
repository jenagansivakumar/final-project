import { process } from "./env.js";
import { Configuration, OpenAIApi } from "openai";

const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

document.getElementById("send-btn").addEventListener("click", () => {
  const setupTextarea = document.getElementById("setup-textarea");
  if (setupTextarea.value) {
    const userInput = setupTextarea.value;
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
    fetchBotReply(userInput);
    fetchMelody(userInput);
  }
});

async function fetchBotReply(outline) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `generate a something poetic, that takes into account ${outline}, please keep the limit to 60 tokens or 150 `,
    max_tokens: 60,
  });
  movieBossText.innerText = response.data.choices[0].text.trim();
  console.log(response);
}

async function fetchMelody(outline) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate melody written as an array (written in square brackets) of midi notes, that takes into account ${outline}, please keep the limit to 200 tokens
    ###
    outline: Please give me a melody that sounds like the world is going to end, and it's all my fault.
    melody: [60, 62, 64, 65, 67, 69, 71, 72]
    ###
    outline: ${outline}
    synopsis: 
    `,
    max_tokens: 200,
  });
  document.getElementById("output-text").innerText =
    response.data.choices[0].text.trim();
}
