

const SPOTLIGHT_COMPANIES = 3;

async function init() {
  
  const companies = await getCompanies();
  companies
    .sort(() => Math.random() - 0.5) 
    .slice(0, SPOTLIGHT_COMPANIES)
    .forEach((c) => {
      document.querySelector('.featured > ul').appendChild(createCompanyAd(c));
    });

  bindLazyload();
}

window.addEventListener('load', init);
