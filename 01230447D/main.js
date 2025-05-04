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
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault(); // Only prevent if inputs are empty
    errorMess("All input fields are required");
    return;
  }

  // Show success toast, but allow form to submit to Formspree
  successMess("Thank you for contacting me! Sending message...");
});
