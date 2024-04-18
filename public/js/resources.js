const events = [
  {
    date: '2024-04-01',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-02',
    title: 'Open: ',
    description: '1:30pm - 4:00pm',
  },
  {
    date: '2024-04-03',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-04',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-05',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-06',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-07',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-08',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-09',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-10',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-11',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-12',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-13',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-14',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-15',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-16',
    title: 'Open: ',
    description: '1:30pm - 4:00pm',
  },
  {
    date: '2024-04-17',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-18',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-19',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-20',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-21',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-22',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-23',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-24',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-25',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-26',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-27',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-28',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-29',
    title: 'Closed',
    description: '',
  },
  {
    date: '2024-04-30',
    title: 'Closed',
    description: '',
  },
];

function generateCalendar(month, year) {
  const tbody = document
    .getElementById('calendar')
    .getElementsByTagName('tbody')[0];
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();

  let date = 1;
  let currentWeekDay = 0;
  for (let i = 0; i < 6; i++) {
    const row = document.createElement('tr');

    for (let j = 0; j < 7; j++) {
      const cell = document.createElement('td');

      if (i === 0 && j < firstDay) {
        cell.textContent = '';
      } else if (date > daysInMonth) {
        cell.textContent = '';
        break;
      } else {
        cell.textContent = date;

        const eventsOnThisDay = events.filter((event) => {
          const eventDate = new Date(event.date);
          const formattedEventDate = eventDate.toISOString().slice(0, 10);
          const formattedCurrentDate = new Date(year, month, date)
            .toISOString()
            .slice(0, 10);
          return formattedEventDate === formattedCurrentDate;
        });

        if (eventsOnThisDay.length > 0) {
          const eventList = document.createElement('div');
          for (const event of eventsOnThisDay) {
            const eventItem = document.createElement('p');
            eventItem.classList.add('event');
            eventItem.textContent = `${event.title} ${event.description}`;
            eventList.appendChild(eventItem);
          }
          cell.appendChild(eventList);
        }

        date++;
        currentWeekDay++;
      }

      row.appendChild(cell);

      // Break the inner loop if we have created all cells for the current month
      if (currentWeekDay > daysInMonth) {
        break;
      }
    }

    tbody.appendChild(row);

    // Break the outer loop if we have created all cells for the current month
    if (currentWeekDay > daysInMonth) {
      break;
    }
  }
}

// Call the generateCalendar function to display the current month's calendar
const currentDate = new Date();
generateCalendar(currentDate.getMonth(), currentDate.getFullYear());
