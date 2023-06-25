let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

   


function myFunctionjob() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInputjob");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function login() {
  var username = document.getElementById("login-username").value;
  var password = document.getElementById("login-password").value;

  // Check if the username and password are valid
  if (username && password) {
    var users = getUsers();
    if (users[username] === password) {
      alert("Login successful!");
     
      // Redirect to home page or perform any other action
      window.location.href="main.html";
    } else {
      alert("Invalid username or password.");
    }
  } else {
    alert("Please enter username and password.");
  }
}

function signup() {
  var username = document.getElementById("signup-username").value;
  var password = document.getElementById("signup-password").value;

  // Check if the username and password are valid
  if (username && password) {
    var users = getUsers();
    if (!users[username]) {
      // Add the new user to the users object
      users[username] = password;
      saveUsers(users);
      alert("Signup successful! You can now log in.");
      
      window.location.href="login.html";
      
      document.getElementById("signup-username").value = "";
      document.getElementById("signup-password").value = "";
    } else {
      alert("Username already exists. Please choose a different username.");
    }
  } else {
    alert("Please enter username and password.");
  }
}

function getUsers() {
  var users = localStorage.getItem("users");
  if (users) {
    return JSON.parse(users);
  } else {
    return {};
  }
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

