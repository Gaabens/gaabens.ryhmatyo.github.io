async function addEvent(title, time, day, month, year) {
    const response = await fetch('/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title, time, day, month, year })
    });
  
    if (response.ok) {
      console.log('Event added successfully');
      // Обновление календаря или других частей интерфейса после успешного добавления события
      renderCalendar(); // Перерисовка календаря после добавления события
    } else {
      console.error('Failed to add event');
    }
  }
  