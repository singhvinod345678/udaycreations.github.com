document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const form = event.target;
  const data = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value
  };
  
  // Example: send form via fetch to your API
  fetch('/api/send-inquiry', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
  .then(r => {
    if (r.ok) {
      alert('Thank you! We will reach out to you shortly.');
      form.reset();
    } else {
      alert('Oops! Something went wrong.');
    }
  })
  .catch(() => alert('Network error. Please try again.'));
});
