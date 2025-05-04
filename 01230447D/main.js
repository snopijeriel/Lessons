const errorMess = (message) => {
  iziToast.error({
    message: message,
    position: "topRight",
  });
};

const successMess = (message) => {
  iziToast.success({
    message: message,
    position: "topRight",
  });
};

document.getElementById("contact-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    errorMess("All input fields are required");
    return;
  }

  try {
    const response = await fetch("https://formspree.io/f/mpwdpvnv", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      successMess("Thank you for contacting me! Your message has been sent.");
      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";
    } else {
      errorMess("Something went wrong. Please try again.");
    }
  } catch (err) {
    errorMess("Network error. Please check your connection.");
  }
});
