

/* ********** VALIDATION OF INPUTS ********** */

function validateName(name){
  if(name === ""){
    return false;
  }

  return true;
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validateMessage(message){
  if(message === ""){
    return false;
  }
  
  return true;
}

function validateMessage2(message){
  if(message.length < 20){
    return false;
  }
  
  return true;
}
/* ********** VALIDATE FORM ON SUBMIT ********** */

function validateForm() {
  
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;

    if(!validateName(name)){
      alert("Потребно је унети име.");

      return false;
    }


    if(!validateEmail(email)){
      alert("Погрешан формат е-маила.");

      return false;
    }

    if(!validateMessage(message)){
      alert("Потребно је унети поруку.");

      return false;
    }

    if(!validateMessage2(message)){
      alert("Порука мора садржати бар 20 карактера.");

      return false;
    }

    alert("Име: " + name + "\nЕ-маил: " + email + "\nПорука: " + message + "\nПослато датума: " + date);

    return true;
}

/* ********** GETTING TODAYS DATE ********** */

// https://stackoverflow.com/questions/12409299/how-to-get-current-formatted-date-dd-mm-yyyy-in-javascript-and-append-it-to-an-i/19079425

function getTodaysDate(){
  let today = new Date();

  let day = today.getDate();
  let month = today.getMonth() + 1; // January je 0 !!!
  var year = today.getFullYear();

  if (day < 10) {
    day = '0' + day;
  } 

  if (month < 10) {
    month = '0' + month;
  } 

  today = day + '.' + month + '.' + year + ".";
  
  return today;
}

let date = getTodaysDate();

// let pdate = document.querySelector(".date small");
// pdate.innerHTML = date;

/* ********** BORDERS ********** */

let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let messageInput = document.querySelector("#message");

// BORDER FOR NAME

nameInput.addEventListener("click", () => {
    nameInput.style.border = "2px solid black";
});

// BORDER FOR EMAIL

emailInput.addEventListener("click", () => {
  emailInput.style.border = "2px solid black";
});

// BORDER FOR MESSAGE

messageInput.addEventListener("click", () => {
  messageInput.style.border = "2px solid black";
});

