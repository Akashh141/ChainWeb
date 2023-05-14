function sendMail() {
  var params = {
    email: document.getElementById("email").value,
  };

  const serviceID = "service_axkqoac";
  const templateID = "template_jigo7qh";

  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("email").value = "";

      var messageElement = document.getElementById("message");
      messageElement.style.fontSize = "24px";
      messageElement.style.color = "#00000";
      messageElement.style.fontWeight = "bold";
      messageElement.textContent = "Thank you! We'll get in touch shortly :)";

      // Add dropping down effect
      messageElement.style.opacity = "0";
      messageElement.style.transform = "translateY(-20px)";
      messageElement.style.transition = "opacity 0.5s, transform 0.5s";
      setTimeout(function () {
        messageElement.style.opacity = "1";
        messageElement.style.transform = "translateY(0)";
      }, 100);

      setTimeout(function () {
        // Add fade-out effect
        messageElement.style.opacity = "0";
        setTimeout(function () {
          messageElement.textContent = "";
          messageElement.style.opacity = "1";
          messageElement.style.transform = "translateY(-20px)";
        }, 500); // Delay for fade-out effect duration
      }, 5000); // Delay for displaying the "Thank you!" message
    })
    .catch((err) => {
      document.getElementById("message").textContent = "Error sending the request.";
    });
}
