const express = require('express');
const app = express();
const port = 3000; // Порт, на котором будет работать сервер

// Обработчик GET-запроса на корневой URL
app.get('/', (req, res) => {
  res.send('Привет, это мой серверный проект на Node.js с использованием Express!');
});

// Обработчик GET-запроса на URL /about
app.get('/about', (req, res) => {
  res.send('Это страница "О нас"');
});

// Запуск сервера на указанном порту
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
