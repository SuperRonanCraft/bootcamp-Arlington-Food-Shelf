function closeAlert(id) {
  const alert = document.querySelector(`#${id}`);
  console.log(alert);
  // event.target.parentElement.style.visibility = 'hidden';
  const alertElement = alert.closest('.alert');
  if (alertElement) {
    alertElement.style.visibility = 'hidden';
  }
}
