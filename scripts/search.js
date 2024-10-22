import { companiesData } from "./data.js";

function searchCompanies() {
  const userInput = document.getElementById('searchInput');
  
  userInput.addEventListener("input", e => {
    const value = e.target.value.toLowerCase();

    const searchResults = companiesData.filter(company => {
      return company.titleCompany.toLowerCase().includes(value); // filter based on input
    });

    displayResults(searchResults); // Display the filtered results
  });
}

// Function to display search results on the page
function displayResults(results) {
  const resultsDiv = document.querySelector('.js-row-to-be-injected');
  resultsDiv.innerHTML = ''; // Clear previous results

  if (results.length > 0) {
    results.forEach(company => {
      const companyElement = `
        <div class="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-3">
          <div class="flex-container">
            <a class="websiteLink" href="${company.website}" target="_blank">
              <div class="mainImg">
                <img src="images/1721802899_0a08ccaa9a91933a0b20.jpg" alt="${company.titleCompany}">
              </div>
              <div class="title">
                ${company.titleCompany}
              </div>
              <div class="category">
                Description: ${company.category}
              </div>
            </a>
            <a href="${company.link}" target="_blank">
              <button class="location">
                Open in Google Maps
              </button>
            </a>
          </div>
        </div>
      `;

      resultsDiv.innerHTML += companyElement;
    });
  } else {
    resultsDiv.innerHTML = 
    `<div class="container noSearchFound text-center">
      <div class="row d-flex justify-content-center">
        <div class="col-12">
        <h1>
          No Companies Found!
        </h1>
        </div>   
      </div>
    </div>`;
  }
}

searchCompanies(); // Initialize the search function