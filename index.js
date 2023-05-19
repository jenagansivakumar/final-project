import { process } from "/env";
import { Configuration, OpenAIApi } from "openai";

const setupTextarea = document.getElementById("setup-textarea");
const setupInputContainer = document.getElementById("setup-input-container");
const movieBossText = document.getElementById("movie-boss-text");

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

document.getElementById("send-btn").addEventListener("click", () => {
  if (setupTextarea.value) {
    const userInput = setupTextarea.value;
    setupInputContainer.innerHTML = `<img src="images/loading.svg" class="loading" id="loading">`;
    movieBossText.innerText = `Ok, just wait a second while my digital brain digests that...`;
    fetchBotReply(userInput);
    fetchSynopsis(userInput);
  }
});

async function fetchBotReply(outline) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `Generate a short message to enthusiastically say "${outline}" sounds interesting and that you need some minutes to think about it. Mention one aspect of the sentence."`,
    max_tokens: 60,
  });
  movieBossText.innerText = response.data.choices[0].text.trim();
  console.log(response);
}

async function fetchSynopsis(outline) {
  const response = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `generate a melody using what follows the colon at the end of this string and return it as an array in midi note numbers and before the array please write a short synopsis about what the melody sounds like. Underneath the array of midi notes, can you please give me the note letters as well :  ${outline}`,

    max_tokens: 200,
  });
  /*
Challenge:
  1. Set up an API call with model, prompt, and max_tokens properties.
  2. The prompt should ask for a synopsis for a movie based on the 
    outline supplied by the user.
*/

  document.getElementById("output-text").innerText =
    response.data.choices[0].text.trim();
}
