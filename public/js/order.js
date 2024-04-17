function toggleCheckbox(event) {
  //   event.preventDefault();
  const label = this.parentElement; // Get the label associated with the checkbox
  const textNode = label.childNodes[2];

  if (this.checked) {
    label.classList.add('active'); // Add active class if checkbox is checked
    textNode.textContent = 'Selected';
  } else {
    label.classList.remove('active'); // Remove active class if checkbox is unchecked
    textNode.textContent = 'Select';
  }
}

const checkboxes = document.querySelectorAll('form input[type="checkbox"]');

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', toggleCheckbox);
}
