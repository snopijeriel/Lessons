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

document.getElementById("btn").addEventListener("click", (e) => {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (!name || !email || !message) {
    e.preventDefault(); // Prevent form from submitting if any field is empty
    errorMess("All input fields are required");
    return;
  }

  // Show success toast (form will still submit to Formspree)
  successMess("Thank you for contacting me! Sending message...");
});
