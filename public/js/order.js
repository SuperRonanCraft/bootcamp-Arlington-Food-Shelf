const checkboxes = document.querySelectorAll('form input[type="checkbox"]');

function toggleCheckbox(event) {
  //   event.preventDefault();
  const label = this.parentElement; // Get the label associated with the checkbox
  const textNode = label.childNodes[2];

  const selectElement = label.parentElement.childNodes[3];

  const quantity = Number(selectElement.value);

  if (quantity === 0) {
    alert('Please select a quantity!');
    this.checked = false;
    return;
  }
  if (this.checked) {
    label.classList.add('active'); // Add active class if checkbox is checked
    textNode.textContent = 'Selected';
  } else {
    label.classList.remove('active'); // Remove active class if checkbox is unchecked
    textNode.textContent = 'Select';
  }
}

function submitOrder(event) {
  event.preventDefault();

  const order_data = [];
  for (const checkbox of checkboxes) {
    const selectElement = checkbox.parentElement.parentElement.childNodes[3];
    if (checkbox.checked) {
      order_data.push({
        inventory_id: Number(checkbox.dataset.id),
        stock: Number(selectElement.value),
      });
    }
  }

  if (order_data.length > 0) {
    fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ order_data }),
    }).then((response) => {
      if (response.ok) {
        document.location.replace('/orders');
        // If not successful, alert the user
      } else {
        alert('Error occured creating order!');
      }
    });
  } else {
    const stockAlert = document.querySelector('#stock-alert');
    stockAlert.style.visibility = 'visible';
  }
}

function closeAlert(event) {
  event.target.parentElement.style.visibility = 'hidden';
}

document.querySelector('#submit-order').addEventListener('click', submitOrder);
document.querySelector('.close-btn').addEventListener('click', closeAlert);

for (const checkbox of checkboxes) {
  checkbox.addEventListener('change', toggleCheckbox);
}
