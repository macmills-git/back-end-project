let personData = {
    "surname": "Doe",
    "othernames": "John",
    "gender": "Male",
    "phone": "+233555123456",
    "address": "123 Main St, Accra",
    "emergencyName": "Jane Doe",
    "emergencyContact": "+233555789012",
    "relationship": "Spouse"
  };
  

  const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.get('/person', (req, res) => {
  res.json(personData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

const express = require('express');
let patientsData = {
  "patients": [
    {
      "patientId": "12345",
      "surname": "Doe",
      "othernames": "John"
    },
    {
      "patientId": "67890",
      "surname": "Smith",
      "othernames": "Mary"
    }
    
  ]
};

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.get('/patients', (req, res) => {
  res.json(patientsData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
