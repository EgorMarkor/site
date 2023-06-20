document.querySelectorAll("#name > div").forEach(el => el.addEventListener("click", function() {
  console.log(el.textContent);
}));