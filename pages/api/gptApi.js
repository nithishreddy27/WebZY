const { Configuration, OpenAIApi } = require("openai");
const Limiter = require("limiter").RateLimiter;

const configuration = new Configuration({
  apiKey: "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",
});

// Set the rate limit to 10 requests per minute
const limiter = new Limiter(10, "minute");

const gptApi = async (req, res) => {
  const { text } = req.body;
  console.log("text", text);

  // Wait for the rate limiter to allow the request
  await new Promise((resolve, reject) => {
    limiter.removeTokens(1, (err, remainingRequests) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });

  try {
    console.log("inside")
    const openai = new OpenAIApi(configuration);
    const completion = await openai.createCompletion({
      model: "gpt-3.5-turbo",
      prompt: text,
      max_tokens: 1024,
      n: 1,
      stop: null,
      temperature: 0.7,
    });
    console.log(completion.data.choices[0].text);

    const generatedCode = completion.data.choices[0].text;

    res.status(200).json({ code: generatedCode });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred" });
  }
};

export default gptApi;
