const express = require('express');
const app = express();
const port = 3000;

// Хранилище событий (заглушка)
let eventsArr = [];

// Middleware для обработки JSON данных
app.use(express.json());

// Обработчик GET запроса для получения всех событий
app.get('/events', (req, res) => {
  res.json(eventsArr);
});

// Обработчик POST запроса для добавления нового события
app.post('/events', (req, res) => {
  const { title, time, day, month, year } = req.body;

  // Здесь можно провести валидацию данных

  // Добавляем новое событие в хранилище данных
  eventsArr.push({
    title: title,
    time: time,
    day: day,
    month: month,
    year: year
  });

  // Сохраняем обновленные данные (если нужно)

  // Отправляем ответ клиенту
  res.status(201).send('Event added successfully');
});

// Запускаем сервер
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
