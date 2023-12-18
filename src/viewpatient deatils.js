
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

let patientsData = [
  {
    "patientId": "12345",
    "surname": "Doe",
    "othernames": "John",
    "gender": "Male",
    "phone": "+233555123456",
    "address": "123 Main St, Accra",
    "emergencyName": "Jane Doe",
    "emergencyContact": "+233555789012",
    "relationship": "Spouse"
  }
  // ... other patients
];

app.get('/', (req, res) => {
  res.send('Hello, Node.js!');
});

app.get('/patients/:id', (req, res) => {
  const patientId = req.params.id;
  const patient = patientsData.find(patient => patient.patientId === patientId);

  if (!patient) {
    res.status(404).send('Patient not found');
  } else {
    res.json(patient);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
