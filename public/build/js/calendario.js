document.addEventListener("DOMContentLoaded", function () {
  const calendarEl = document.getElementById("calendar");

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth", // Puedes cambiar la vista inicial si lo deseas
    events: [
      // Aquí defines tus citas agendadas
      // {
      //     title: 'Cita 1',
      //     start: '2023-10-01 10:00', // Fecha y hora de inicio
      // },
      // Agrega más citas según sea necesario
    ],
  });

  calendar.render();
});