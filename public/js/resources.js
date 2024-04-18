const events = [
  { date: '2024-04-01', title: 'Closed', description: 'a' },
  { date: '2024-04-02', title: 'Open', description: '1:30pm - 4:00pm' },
  { date: '2024-04-03', title: 'Closed', description: 'b' },
  { date: '2024-04-04', title: 'Closed', description: 'c' },
  { date: '2024-04-05', title: 'Closed', description: 'd' },
  { date: '2024-04-06', title: 'Closed', description: 'e' },
  { date: '2024-04-07', title: 'Closed', description: 'f' },
  { date: '2024-04-08', title: 'Closed', description: 'g' },
  { date: '2024-04-09', title: 'Closed', description: 'h' },
  { date: '2024-04-10', title: 'Closed', description: 'i' },
  { date: '2024-04-11', title: 'Closed', description: 'j' },
  { date: '2024-04-12', title: 'Closed', description: 'k' },
  { date: '2024-04-13', title: 'Closed', description: 'l' },
  { date: '2024-04-14', title: 'Closed', description: 'm' },
  { date: '2024-04-15', title: 'Closed', description: 'n' },
  { date: '2024-04-16', ttitle: 'Open', description: '1:30pm - 4:00pm' },
  { date: '2024-04-17', title: 'Closed', description: 'o' },
  { date: '2024-04-18', title: 'Closed', description: 'p' },
  { date: '2024-04-19', title: 'Closed', description: 'q' },
  { date: '2024-04-20', title: 'Closed', description: 'r' },
  { date: '2024-04-21', title: 'Closed', description: 's' },
  { date: '2024-04-22', title: 'Closed', description: 't' },
  { date: '2024-04-23', title: 'Closed', description: 'u' },
  { date: '2024-04-24', title: 'Closed', description: 'v' },
  { date: '2024-04-25', title: 'Closed', description: 'w' },
  { date: '2024-04-26', title: 'Closed', description: 'x' },
  { date: '2024-04-27', title: 'Closed', description: 'y' },
  { date: '2024-04-28', title: 'Closed', description: 'z' },
  { date: '2024-04-29', title: 'Closed', description: 'aa' },
  { date: '2024-04-30', title: 'Closed', description: 'bb' },
];

function generateCalendar(month, year) {
  const tbody = document
    .getElementById('calendar')
    .getElementsByTagName('tbody')[0];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  let date = 1;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDay) {
        // Add blank cells for days before the first day of the month
        cell.textContent = '';
      } else if (date > daysInMonth) {
        // Add blank cells for days after the last day of the month
        cell.textContent = '';
        break;
      } else {
        // Add the day number
        cell.textContent = date;

        // Check for events on this date
        const eventsOnThisDay = events.filter((event) => {
          const eventDate = new Date(event.date);
          return (
            eventDate.getFullYear() === year &&
            eventDate.getMonth() === month &&
            eventDate.getDate() === date
          );
        });

        // Add event details if there are events on this day
        if (eventsOnThisDay.length > 0) {
          const eventList = document.createElement('div');
          for (const event of eventsOnThisDay) {
            const eventItem = document.createElement('p');
            eventItem.classList.add('event');
            eventItem.textContent = `${event.title}: ${event.description}`;
            eventList.appendChild(eventItem);
          }
          cell.appendChild(eventList);
        }

        date++;
      }

      row.appendChild(cell);
    }

    tbody.appendChild(row);
  }
}

// Call the generateCalendar function to display the current month's calendar
const currentDate = new Date();
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
