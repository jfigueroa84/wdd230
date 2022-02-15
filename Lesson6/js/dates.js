const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Modified: ${document.lastModified}`;

const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();


// set windchill 
document.querySelector('.wind-chill').innerHTML = windChill(46, 16);

function init() {
  // current date
  document.querySelector('.today').innerHTML = new Intl.DateTimeFormat(
    'en-US',
    {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }
  ).format(new Date());
  const isMonday = new Date().getDay() === 5;
  if (isMonday) {
    document.querySelector('.announcement-banner').style.display = 'block';
  }
  // set windchill 
document.querySelector('.wind-chill').innerHTML = windChill(46, 16);

}



const openMenuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector("nav");

openMenuToggle.addEventListener(
    "click",
    () => {
        navMenu.classList.toggle("open");
        openMenuToggle.innerHTML = navMenu.classList.contains("open")
        ? "&#10005; Close"
        : "&#9776; Menu";
    },
    false
  );
  window.onresize = () => {
    if (window.innerWidth > 761) {
      navMenu.classList.remove("open");
      openMenuToggle.innerHTML = '&#9776; Menu';
    }
};


window.onload = init;

