const express=require('express');
const app=express();
const path=require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'about.html'));
});

app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'contact-me.html'));
});

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'))
  });

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Basic site set up - listening on port ${PORT}!`);
});