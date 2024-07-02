// get user name
let userName = "";

function replaceName() {
  userName = prompt("Halo please input yout name : ", " ");

  document.querySelector("#user").innerHTML += " " + userName;
}

// replaceName();

// active bars
const nav = document.querySelector(".nav");
document.querySelector("#bars").addEventListener("click", function () {
  nav.classList.toggle("nav-active");
});

// validation form-contact
function validationContact() {
  const name = document.forms["form-contact"]["name"].value;
  const birtDate = document.forms["form-contact"]["birth_date"].value;
  const gender = document.forms["form-contact"]["gender"].value;
  const msg = document.forms["form-contact"]["msg"].value;
  let errs = [];

  console.log(name);
  console.log(birtDate);
  console.log(gender);
  console.log(msg);

  if (!name) errs.push("name cannot be null");
  if (!birtDate) errs.push("birth date cannot be null");
  if (!gender) errs.push("gender cannot be null");
  if (!msg) errs.push("message cannot be null");

  let errMsg = "";
  errs.forEach((err) => {
    errMsg += `<p> ${err} </p>`;
  });

  document.querySelector(".error").innerHTML = errMsg;
  if (errMsg) return false;

  setDataContact(name, birtDate, gender, msg);

  return true;
}

// set data from form-contact
function setDataContact(name, birtDate, gender, msg) {
  document.querySelector("#contactName").innerHTML = name;

  document.querySelector("#contactBirth").innerHTML = birtDate;

  document.querySelector("#contactGender").innerHTML = gender;

  document.querySelector("#contactMsg").innerHTML = msg;
}

// mengakali submit yg merefres halaman
document.querySelector(".submit").addEventListener("click", function (event) {
  event.preventDefault();
  validationContact();
});
