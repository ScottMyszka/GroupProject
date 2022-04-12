//Collecting form data
const firstname = document.getElementById("firstname");
const lastname = document.getElementById("lastname");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");
const from = document.getElementById("departureCity");
const to = document.getElementById("destinationCity");
const oneway = document.getElementById("oneway");
const roundtrip = document.getElementById("roundtrip");
const trip = document.getElementsByClassName("trip");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const departDate = document.getElementById("departDate");
const returnDate = document.getElementById("returnDate");
const creditcard = document.getElementById("card");
const expire = document.getElementById("expire");
const code = document.getElementById("code");
let messages = [];

form.addEventListener("submit", (e) => {
  messages = [];
  validateFromField();
  validateToField();
  validateTravelDates();
  validateFirstName();
  validateLastName();
  validateEmail();
  validatePhone();
  validateCreditcard();
  validateExpiryDate();
  validateCSC();

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
  }
});

//Validation rule on First name
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

//Validation rule on Last name
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

//Validation rule on email
function validateEmail() {
  let mailRegex =
    /^[a-zA-Z][a-zA-Z0-9\-\_\.]+@[a-zA-Z0-9]{2,}\.[a-zA-Z0-9]{2,}$/;
  if (email.value === "" || email.value == null) {
    messages.push("email is required");
  } else if (!mailRegex.test(email.value)) {
    messages.push("Please enter proper email");
  }
  
}

//Validation rule on phone number
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

//Validation rule on booking dates
function validateTravelDates() {
  let today = new Date();
  let departDate1;
  let returnDate1;
  if (departDate.value === "" || departDate.value === null) {
    messages.push("Please select your depart travel date");
  } else {
    departDate1 = new Date(departDate.value);

    if (!(departDate1 >= today)) {
      messages.push("Depart date must be today or greater than today");
    }
  }
  if (roundtrip.checked == true) {
    if (returnDate.value === "" || returnDate.value === null) {
      messages.push("Please select your arrival travel date");
    } else {
      returnDate1 = new Date(returnDate.value);
      if (!(returnDate1 >= today)) {
        messages.push("Return date must be today or greater than today");
      }
      if (returnDate1 <= departDate1) {
        messages.push("Return date must be greater than depart date");
      }
    }
  }
}

//Validation rule on credit card
function validateCreditcard() {
  let regex = "^[0-9]*$";
  if (creditcard.value === "" || creditcard.value == null) {
    messages.push("Credit card field is required");
  } else if (!creditcard.value.match(regex)) {
    messages.push("Credit card field can only be numbers");
  } else if (!(creditcard.value.length === 10)) {
    messages.push("credit card field number has to be 10 values");
  }
}

//Should be similiar to Date validation
function validateExpiryDate() {
  let reg = /^(0[1-9]|1[0-2])\/(0[1-9]|1[1-9]|2[1-9])$/;
  var date = new Date();
  var month = date.getMonth() + 1;
  var year = date.getFullYear().toString().slice(2);

  var result = [];
  if (expire.value === "" || expire.value === null) {
    messages.push("Please enter expiry date of your card");
  } else if (!reg.test(expire.value)) {
    messages.push("Please enter in mm/yy format,only numbers allowed");
  } else {
    result = expire.value.toString().split("/");
  }

  var exMonth = result[0];
  var exYear = result[1];

  if (year > exYear || (year === exYear && month >= exMonth)) {
    messages.push(
      "The expiry date is before today's date. Please select a valid expiry date"
    );
  }
}

//validate From feild
function validateFromField() {
  if (from.value === "" || from.value == null) {
    messages.push("Please select any city from From feild");
  }
}

//validate To feild
function validateToField() {
  if (to.value === "" || to.value == null) {
    messages.push("Please select any city from To feild");
  }
}

//validate CSC value
function validateCSC() {
  let regex = "^[0-9]*$";
  if (code.value === "" || code.value == null) {
    messages.push("CSC field is required");
  } else if (!code.value.match(regex)) {
    messages.push("CSC can only be numbers");
  } else if (!(code.value.length === 3)) {
    messages.push("CSC number has to be 3 values");
  }
}

//Enable roundtrip date
function enableRoundtrip() {
  returnDate.removeAttribute("disabled");
}

//Disable roundtrip date
function disableRoundtrip() {
  returnDate.setAttribute("disabled", true);
}

//set default data to all feilds on the form
function setDefaultData() {
  firstname.innerText = "";
  lastname.innerText = "";
  from.innerText = "";
  to.innerText = "";
  oneway.checked = "true";
  roundtrip.checked = "false";
  email.innerText = "";
  phone.innerText = "";  
  creditcard.innerText = "";
  code.innerText = "";
  expire.innerText = "";
  departDate.innerText = "";
  returnDate.innerText = "";
}
