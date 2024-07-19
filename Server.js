const express = require('express');
const path = require('path');
const collegeData = require('./collegeData');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/students/add', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'addStudent.html'));
});

app.post('/students/add', (req, res) => {
  collegeData.addStudent(req.body).then(() => {
    res.redirect('/students');
  });
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
