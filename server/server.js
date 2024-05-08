const express = require('express');
const bodyParser = require('body-parser');
const openai = require('openai');

const app = express();
const port = 3001; // Set your desired port

// Set your OpenAI API key
const openaiApiKey = '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';
const openaiClient = new openai.OpenAIApi(openaiApiKey);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Endpoint to handle requests for activity recommendations
app.post('/api/activity-recommendations', async (req, res) => {
  const { query } = req.body;

  try {
    // Generate activity recommendations using OpenAI API
    const response = await openaiClient.chat({ messages: [{ role: 'user', content: query }] });

    // Extract activity recommendations from OpenAI response
    const activityRecommendations = response.data.choices[0].message.content;

    // Send activity recommendations back to frontend
    res.json(activityRecommendations);
  } catch (error) {
    console.error('Error generating activity recommendations:', error);
    res.status(500).send('Error generating activity recommendations');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});