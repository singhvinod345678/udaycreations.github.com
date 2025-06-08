document.getElementById("contactForm").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = e.target.name.value;
      const email = e.target.email.value;
      const message = e.target.message.value;

      if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        e.target.reset();
      } else {
        alert("Please fill in all fields.");
      }
    });
