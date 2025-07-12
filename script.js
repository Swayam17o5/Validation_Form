var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var phoneError = document.getElementById("phone-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("name").value;

  if (name.trim().length === 0) {
    nameError.innerHTML = "Please enter your name";
    return false;
  }

  if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
    nameError.innerHTML = "Format: First Last";
    return false;
  }

  nameError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green;"></i>`;
  return true;
}

function validatePhone() {
  var phone = document.getElementById("phone").value;

  if (phone.trim().length === 0) {
    phoneError.innerHTML = "Please enter your phone number";
    return false;
  }

  if (phone.length !== 10) {
    phoneError.innerHTML = "Must be 10 digits";
    return false;
  }

  if (!phone.match(/^[0-9]{10}$/)) {
    phoneError.innerHTML = "Only digits allowed";
    return false;
  }

  phoneError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green;"></i>`;
  return true;
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (email.trim().length === 0) {
    emailError.innerHTML = "Please enter your email";
    return false;
  }

  if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
    emailError.innerHTML = "Invalid email format";
    return false;
  }

  emailError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green;"></i>`;
  return true;
}

function validateMess() {
  var mess = document.getElementById("mess").value;
  var required = 20;
  var left = required - mess.length;

  if (left > 0) {
    messageError.innerHTML = `${left} more characters required`;
    return false;
  }

  messageError.innerHTML = `<i class="fa-solid fa-circle-check" style="color: green;"></i>`;
  return true;
}

function validateForm() {
  if (
    !validateName() ||
    !validatePhone() ||
    !validateEmail() ||
    !validateMess()
  ) {
    submitError.style.display = "block";
    submitError.innerHTML = `Please fix the errors above`;
    setTimeout(function () {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }

  return true;
}
