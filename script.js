
// get password/confim id to make characters verification as per below function
const pwd = document.getElementById("password");
const confirmPwd = document.getElementById("confirm-password");


// get ids to show the erros down the both password and password confimation fields
const pwdError = document.getElementById("password-error");
const confirmError = document.getElementById("confirm-error");

// allowed regex: letters,numbers and "@ # $ % & ?" with min
const regex = /^[A-Za-z0-9@#\$%&\?]{10,}$/;


// function to validate passwords
function validatePasswords() {
  const isValid = regex.test(pwd.value);          // valid password
  const isValidConfirm = regex.test(confirmPwd.value); // confirm if it's valid
  const match = pwd.value === confirmPwd.value;   // both pass are the same

  // PASSWORD
  if (!isValid) {
    pwd.style.borderColor = "red";
    pwdError.textContent = "Invalid password (letters, numbers, @ # $ % & ? and min 10 chars)";
  } else {
    pwd.style.borderColor = "#5a7a5a";
    pwdError.textContent = "";
  }

  // CONFIRM PASSWORD
  if (confirmPwd.value.length > 0) {
    if (!isValidConfirm) {
      confirmPwd.style.borderColor = "red";
      confirmError.textContent = "Invalid password format";
    } else if (!match) {
      confirmPwd.style.borderColor = "red";
      confirmError.textContent = "Password is not the same";
    } else {
      confirmPwd.style.borderColor = "#5a7a5a";
      confirmError.textContent = "";
    }
  } else {
    confirmError.textContent = "";
  }
}

pwd.addEventListener("input", validatePasswords);
confirmPwd.addEventListener("input", validatePasswords);
