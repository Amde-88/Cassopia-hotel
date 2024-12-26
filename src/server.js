const express = require('express');
const app = express();
const port = 3000;

// Sample data
const contactInfo = {
  email: 'amdecassopia@gmail.com',
  phone: '+251907121842'
};

const faqs = [
  { question: 'What are your check-in and check-out times?', answer: 'Check-in is at 3 PM and check-out is at 11 AM.' },
  { question: 'Do you offer free Wi-Fi?', answer: 'Yes, we offer complimentary Wi-Fi throughout the hotel.' }
];

// Endpoints
app.get('/api/contact-info', (req, res) => {
  res.json(contactInfo);
});

app.get('/api/faqs', (req, res) => {
  res.json(faqs);
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});