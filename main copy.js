
// app.js
document.addEventListener('DOMContentLoaded', () => {
  console.log('CRMS Front-End Loaded');

  // Fetch rental listings dynamically via an API
  fetch('/api/rentals')
      .then(response => response.json())
      .then(data => {
          // Dynamically update listings on the front end
          const listings = document.querySelector('.property-list');
          data.forEach(rental => {
              const rentalCard = document.createElement('div');
              rentalCard.classList.add('property-card');
              rentalCard.innerHTML = `
                  <img src="${rental.image}" alt="${rental.title}">
                  <h3>${rental.title}</h3>
                  <p>Price: $${rental.price}/month</p>
                  <button>View Details</button>
              `;
              listings.appendChild(rentalCard);
          });
      })
      .catch(error => console.error('Error fetching rental listings:', error));
});








/* // Function to update the current year in the footer
document.getElementById('this-year').textContent = new Date().getFullYear();

// Function to toggle the responsive class for the navigation menu
function myFunction() {
  var nav = document.getElementById("myTopnav");
  if (nav.className === "topnav") {
    nav.className += " responsive";
  } else {
    nav.className = "topnav";
  }
}

// JavaScript for HTML and CSS validation links (optional)
document.getElementById('html-checker').setAttribute('href', 'https://validator.w3.org/nu/?doc=' + location.href);
document.getElementById('css-checker').setAttribute('href', 'https://jigsaw.w3.org/css-validator/validator?uri=' + location.href); */