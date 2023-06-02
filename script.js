const navbar = document.querySelector(".header .flex .navbar");
const hamburgerBtn = document.querySelector("#menu-btn");
const guests = document.querySelectorAll('input[type="number"]');

hamburgerBtn.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

guests.forEach((guest) => {
  quest.oninput = () => {
    if (guest.value.length > guest.maxLength)
      guest.value = guest.value.slice(0, guest.maxLength);
  };
});
