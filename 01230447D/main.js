const errorMess = (message) => {
  iziToast.error({
    // title: "Error",
    message: message,
    position: "topRight",
  });
};

const successMess = (message) => {
  iziToast.success({
    // title: "Success",
    message: message,
    position: "topRight",
  });
};

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let text = document.getElementById("email");

  name = name.value.trim();
  email = email.value.trim();
  text = text.value.trim();

  if (!name || !email || !text) {
    errorMess("All input feilds are required ");
    return;
  }

  successMess("Thank you for contacting me, I will get back to you shortly");
});
