export const SECTIONS_LIST = [
  {
    name: "OVERVIEW",
    id: "overview",
  },
  {
    name: "AUTHENTICATION",
    id: "authentication",
  },
  {
    name: "ENDPOINTS",
    id: "endpoints",
  },
  {
    name: "TUTORIAL",
    id: "tutorial",
  },
  {
    name: "CODE EXAMPLES",
    id: "codeExamples",
  },
  {
    name: "PRICING",
    id: "pricing",
  },
];

export const TABLE_DATA = [
  {
    parameter: "api",
    type: "string",
    description: 'The API provider to use. Options: "openai" or "together"',
  },
  {
    parameter: "model",
    type: "string",
    description:
      'The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")',
  },
  {
    parameter: "topic",
    type: "string",
    description: "The main topic or theme of the book",
  },
  {
    parameter: "language",
    type: "string",
    description: "The language in which the book should be generated",
  },
  {
    parameter: "word_count",
    type: "integer",
    description: "The approximate number of words for the generated book",
  },
];

export const Response = `{
    "message": "Book generation started",
    "status": "processing",
    "job_id": "unique-job-identifier"
}`;

export const TUTORIAL_DATA = [
  {
    step: 1,
    title: "Obtain an API Key",
    description:
      "Generate an API key using the button in the Authentication section above.",
  },
  {
    step: 2,
    title: "Make a Request",
    description:
      "Use your preferred programming language or tool to make a POST request to the /api/generate-book endpoint. Include your API key in the header and the required parameters in the request body.",
  },
  {
    step: 3,
    title: "Handle the Response",
    description:
      "The API will return a response with a job ID. You can use this ID to check the status of your book generation job.",
  },
  {
    step: 4,
    title: "Retrieve the Generated Book",
    description:
      "Once the job is complete, you can retrieve the generated book using the job ID (endpoint to be implemented).",
  },
];

export const PythonCode = `import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
`;

export const JavaScriptCode = `const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response =&gt; {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error =&gt; {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
`;

export const API_PRICING_DATA = [
  {
    api: "OpenAI",
    model: "GPT-3.5",
    pricePer1kToken: 0.002,
  },
  {
    api: "OpenAI",
    model: "GPT-4",
    pricePer1kToken: 0.03,
  },
  {
    api: "Together AI",
    model: "Llama-2-70b",
    pricePer1kToken: 0.0008,
  },
  {
    api: "Together AI",
    model: "Llama-2-13b",
    pricePer1kToken: 0.0008,
  },
];
