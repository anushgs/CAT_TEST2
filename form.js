let name2,
  email2,
  branch2,
  col2,
  state2,
  address2,
  age2,
  phoneno2,
  username2,
  password2 = false;
onlyChar = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return false;
  else return true;
};

onlyDigits = (event) => {
  let input = event.which;
  if (input > 47 && input < 58) return true;
  else return false;
};
validateForm = (event) => {
  event.preventDefault();

  if (
    email2 ||
    branch2 ||
    col2 ||
    state2 ||
    address2 ||
    age2 ||
    phoneno2 ||
    username2 ||
    password2 == false
  ) {
    return;
  }
};
checkName = (value) => {
  const name = document.getElementById("name");
  if (value === "") {
    return error(name, "cannot be empty");
  } else if (value.length < 3) {
    return error(name, "cannot be less than 3");
  } else {
    return success(name);
  }
};
checkEmail = (value) => {
  const email = document.getElementById("email");

  const emailRegex = /([a-z0-9\.\-_]{5,25})@[a-z]{5,}.in/;

  if (emailRegex.test(value)) {
    return success(email);
  } else {
    document.cookie = "email=" + value;
    localStorage.setItem("email", value);
    return error(email, "invalid email");
  }
};

validateBranch = (value) => {
  const branch = document.getElementById("branch");
  if (value === "") {
    return error(branch, "filed cannot be empty");
  } else {
    return success(branch);
  }
};
validateState = (value) => {
  const state = document.getElementById("state");
  if (value === "") {
    return error(state, "filed cannot be empty");
  } else {
    return success(state);
  }
};

validateAddress = (value) => {
  const address = document.getElementById("address");
  if (value === "") {
    return error(address, "filed cannot be empty");
  } else if (value.length < 10) {
    return error(address, "litte more info");
  } else {
    success(address);
  }
};

validateUsername = (value) => {
  const username = document.getElementById("username");
  if (value === "") {
    return error(username, "filed cannot be empty");
  } else if (value.length < 5) {
    return error(username, "min 5 char");
  } else {
    userNameVal = value;
    document.cookie = "username=" + value;
    success(username);
  }
};

storeColOrUni = (value) => {
  const coluni = document.getElementById("col/uniname");

  if (value === "") {
    return error(coluni, "filed cannot be empty");
  } else if (value.length < 3) {
    return error(coluni, "minmum 3 characters are needed ");
  } else {
    collegeOrUniname = value;
    console.log(collegeOrUniname);
    success(coluni);
  }
};

validateAge = (value) => {
  const age = document.getElementById("age");
  if (value === "") {
    return error(age, "age cannot be empty");
  } else if (isNaN(value)) {
    return error(age, "age cannot be characters");
  } else if (value < 0) {
    return error(age, "age cannot be negative");
  } else {
    return success(age);
  }
};

checkPhoneNo = (value) => {
  const phoneNo = document.getElementById("phoneno");
  const phoneNoVal = value;
  const phoneRegex = /[0-9]{10}/;

  if (phoneRegex.test(phoneNoVal) && phoneNoVal.length === 10) {
    return success(phoneNo);
  } else {
    localStorage.setItem("phoneNo", value);
    return error(phoneNo, "should contain only 10 digits");
  }
};

validatePassword = (password) => {
  if (password.length === 0) {
    document.getElementById("passwordMsg").innerHTML = "";
    return;
  }

  var regexPattern = new Array();

  regexPattern.push('[~`!@#$%^&*;:"<>,./?]');
  regexPattern.push("[-_+={}]");
  regexPattern.push("[()|]");
  regexPattern.push("[A-Z]");
  regexPattern.push("[0-9]");
  regexPattern.push("[a-z]");

  // Check the conditions

  let count = 0;
  let color = "";

  let strength = "";
  if (password.length >= 8) {
    for (var i = 0; i < regexPattern.length; i++) {
      if (new RegExp(regexPattern[i]).test(password)) {
        count++;
      }
    }

    switch (count) {
      case 0:
      case 1:
      case 2:
        strength = "Weak Password";
        color = "red";
        break;
      case 3:
        strength = "Average Password";
        color = "orange";
        break;

      case 4:
        strength = "Strong Password";
        color = "green";
        break;
    }

    document.getElementById("passwordMsg").innerHTML = strength;
    document.getElementById("passwordMsg").style.color = color;
  } else {
    document.getElementById("passwordMsg").innerHTML = "min 8 characters";
    document.getElementById("passwordMsg").style.color = "red";
  }
  let formControl = document.getElementById("password");
  let parent = formControl.parentElement;
  if (strength === "Strong Password" && color === "green") {
    parent.className = "form-control success";
  } else {
    parent.className = "form-control error";
  }
};

success = (input) => {
  //console.log(input);
  const formControl = input.parentElement;
  //console.log(formControl);
  formControl.className = "form-control success";
};

error = (input, message) => {
  const formControl = input.parentElement;

  const small = formControl.querySelector("small");
  small.innerText = message;

  //   if (document.getElementById("password") === input) {
  //     formControl.className = "form-control error password";
  //   } else {
  formControl.className = "form-control error";
  //   }
};
