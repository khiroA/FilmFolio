import { OPENROUTER_URL, MODEL_ID } from "../constants/api";
//OpenRouterClient

export async function getAiMovieTitles(userPrompt = "", systemPrompt) {
  const messages = [
    { role: "system", content: systemPrompt },
    { role: "user", content: userPrompt.trim() },
  ];

  const res = await fetch(OPENROUTER_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${import.meta.env.VITE_OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: MODEL_ID,
      messages,
    }),
  });

  if (!res.ok) {
    const err = await res.text();
    throw new Error(`Server error ${res.status}: ${err}`);
  }

  const json = await res.json();

  if (json.error.code === 429) {
    throw new Error("Daily limit exceeded. Please try again later");
  }

  const modelOutput = json.choices?.[0]?.message?.content.trim();

  try {
    const parsed = JSON.parse(modelOutput);
    if (!Array.isArray(parsed)) {
      throw new Error("Error ocurred due the response format");
    }
    return parsed.slice(0, 3);
  } catch (err) {
    console.error("Parsing Error:", modelOutput);
    throw new Error("Invalid AI response ...");
  }
}
