const mobileMenu = document.querySelector("#mobile-menu");
const navBar = document.querySelector("#navbar");
const navLinks = document.querySelector("#nav-links");

function openMenu() {
  document.getElementById('mobile-menu').style.right = '0';
}

function closeMenu() {
  document.getElementById('mobile-menu').style.right = '-100%';
}



  window.addEventListener('scroll', ()=>{
    if(scrollY > 50){
      navBar.classList.add('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme');
      navLinks.classList.remove('bg-white','shadow-sm','bg-opacity-50','dark:shadow-white/50','dark:border','dark:border-white/70','dark:bg-transparent');
    }
    else{
      navBar.classList.remove('bg-white','bg-opacity-50','backdrop-blur-lg','shadow-sm','dark:bg-darkTheme');
      navLinks.classList.add('bg-white','shadow-sm','bg-opacity-50','dark:shadow-white/50','dark:border','dark:border-white/70','dark:bg-transparent');
    }

  });

window.addEventListener('scroll', function() {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
      navbar.classList.add('bg-white/20', 'backdrop-blur-sm');
  } else {
      navbar.classList.remove('bg-white/20', 'backdrop-blur-sm');
  }
});



document.documentElement.classList.toggle(
  "dark",
  localStorage.theme === "dark" ||
    (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches),
);



function toggleTheme() {
  // Toggle the 'dark' class on the document root (html element)
  document.documentElement.classList.toggle('dark');
  
  // Check if the 'dark' class is present and store the theme in localStorage
  if (document.documentElement.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
}

// Set the theme from localStorage on page load
window.onload = () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    document.documentElement.classList.add('dark');
  } else if (savedTheme === 'light') {
    document.documentElement.classList.remove('dark');
  }
};
