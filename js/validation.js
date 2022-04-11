//collecting form data
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const from = document.getElementById("from");
const to = document.getElementById("to");
const oneway = document.getElementById("oneway");
const roundtrip = document.getElementById("roundtrip");
const trip = document.getElementsByClassName("trip");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const departDate = document.getElementById("departDate");
const returnDate = document.getElementById("returnDate");
let messages = [];
form.addEventListener("submit", (e) => {
  messages = [];
  validateFrom();
  validateTo();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

//validation rule on from feild
function validateFrom() {
  if (from.value === "" || from.value == null) {
    messages.push("From is required");
  }
}
//validation rule on to feild
function validateTo() {
  if (to.value === "" || to.value == null) {
    messages.push("To is required");
  }
}
//validation rule on First name
function validateFirstName() {
  var regex = /^[A-Za-z\s]+$/;
  if (firstname.value === "" || firstname.value == null) {
    messages.push("First name is required");
  } else if (!regex.test(firstname.value)) {
    messages.push("First name must not contain numbers or special characters");
  } else if (firstname.value.length <= 2) {
    messages.push("First name should be more than 2 characters");
  }
}

//validation rule on Last name
function validateLastName() {
  var regex = /^[A-Za-z\s]+$/;
  if (lastname.value === "" || lastname.value == null) {
    messages.push("Last name is required");
  } else if (!regex.test(lastname.value)) {
    messages.push("Last name must not contain numbers or special characters");
  } else if (lastname.value.length <= 2) {
    messages.push("Last name should be more than 2 characters");
  }
}

// validation rule on email
function validateEmail() {
  let mailRegex =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  if (email.value === "" || email.value == null) {
    messages.push("email is required");
  } else if (!mailRegex.test(email.value)) {
    messages.push("Please enter proper email");
  }
}
//validation rule on phone number
function validatePhone() {
  let phoneRegex = "^[0-9]*$";
  if (phone.value === "" || phone.value == null) {
    messages.push("phone is required");
  } else if (!phone.value.match(phoneRegex)) {
    messages.push("Phone number allows onlynumbers ");
  } else if (!(phone.value.length === 10)) {
    messages.push("Phone number must have 10 numbers");
  }
}

//validation rule on booking dates
function validateTravelDates() {
  let today = new date();
  if (departDate.value < today) {
    messages.push("Depart date must be today or greater than today");
  }
  if (roundtrip.checked == true) {
    if (returnDate < departDate) {
      messages.push("Return date must be greater than depart date");
    }
  }
}

//Enable roundtrip date
function enableRoundtrip() {
  returnDate.removeAttribute("disabled");
}

//disable round trip date
function disableRoundtrip() {
  returnDate.setAttribute("disabled", true);
}
