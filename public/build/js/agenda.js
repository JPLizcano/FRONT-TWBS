document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("agenda");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridWeek", // Puedes cambiar la vista inicial si lo deseas
    events: [
      // Aquí defines tus citas agendadas
      {
          title: 'Barbero 1',
          start: '2023-09-24 10:00', // Fecha y hora de inicio
      },
      {
          title: 'Barbero 1',
          start: '2023-09-25 10:30', // Fecha y hora de inicio
      },
      {
          title: 'Barbero 1',
          start: '2023-09-26 11:00', // Fecha y hora de inicio
      },
      {
          title: 'Barbero 1',
          start: '2023-09-27 11:30', // Fecha y hora de inicio
      },
      // Agrega más citas según sea necesario
    ],
  });

  calendar.render();
});