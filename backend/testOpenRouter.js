import OpenAI from "openai";
import dotenv from "dotenv";

dotenv.config();

const client = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY,
  baseURL: "https://openrouter.ai/api/v1",
});

async function test() {
  try {
    const completion = await client.chat.completions.create({
      model: "google/gemma-4-26b-a4b-it:free",
      messages: [
        {
          role: "user",
          content: "Say hello in one sentence."
        }
      ]
    });

    console.log("✅ AI Reply:");
    console.log(completion.choices[0].message.content);

  } catch (err) {
    console.error("❌ Error:");
    console.error(err);
  }
}

test();