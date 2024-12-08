// import the Genkit and Google AI plugin libraries
import { gemini15Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit';

// configure a Genkit instance
const ai = genkit({
  plugins: [googleAI()],
  model: gemini15Flash, // set default model
});

(async () => {
  // make a generation request
  const { text } = await ai.generate('Jelaskan tokoh kemerdekaan proklamasi kemerdekaan indonesia');
  console.log(text);
})();
