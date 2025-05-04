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

document.getElementById("btn").addEventListener("click", () => {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let message = document.getElementById("message");

  name = name.value.trim();
  email = email.value.trim();
  message = message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault(); // Only prevent if inputs are empty
    errorMess("All input fields are required");
    return;
  }

  // Show success toast, but allow form to submit to Formspree
  successMess("Thank you for contacting me! Sending message...");
  name.value = "";
  email.value = "";
  message.value = "";
});
