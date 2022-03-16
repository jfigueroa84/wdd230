// directory.js

async function init() {
  const directoryContainer = document.querySelector('.directory');
  const gridToggle = document.querySelector('.grid-toggle');
  const listToggle = document.querySelector('.list-toggle');

  // companies 
  const companies = await getCompanies();
  companies.forEach((c) => {
    document.querySelector('.directory > ul').appendChild(createCompanyCard(c));
  });

  gridToggle.addEventListener('click', () => {
    directoryContainer.classList.remove('list');
    directoryContainer.classList.add('grid');
  });

  listToggle.addEventListener('click', () => {
    directoryContainer.classList.remove('grid');
    directoryContainer.classList.add('list');
  });

  bindLazyload();
}

window.addEventListener('load', init);
