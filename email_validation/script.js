const emailvalidation = function () {
  const form = document.getElementById("form");
  const text = document.getElementById("text");
  const email = document.getElementById("email");
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;

  if (email.value.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("warn");
    form.classList.remove("invalid");
    text.innerHTML = "Your email address is valid";
    document.querySelector("body").style.backgroundColor = "#7ee8fa";
    text.style.color = "#000";
    document.querySelector("h3").style.color = "#000";
  } else {
    form.classList.remove("valid");
    form.classList.remove("warn");
    form.classList.add("invalid");
    document.querySelector("body").style.backgroundColor = "#a40606";
    text.innerHTML = "Please type valid email address";
    text.style.color = "#fff";
  }
  if (email.value == "") {
    form.classList.add("warn");
    form.classList.remove("valid");
    form.classList.remove("invalid");
    document.querySelector("body").style.backgroundColor = "#0cbaba";
    text.innerHTML = "please type your email address";
    text.style.color = "#fff";
  }
};
// emailvalidation();
