// factory.js


function createCompanyAd({ name, logo, url }) {
  const companyCard = document.createElement('li');

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noreferrer');
  companyCard.appendChild(link);

  const img = document.createElement('img');
  img.setAttribute('src', 'images/placeholder.png');
  img.setAttribute('data-src', `images/logos/${logo}`);
  img.setAttribute('alt', `${name} logo`);
  link.appendChild(img);

  return companyCard;
}

function createCompanyCard({ name, logo, phone, address, url }) {
  const companyCard = document.createElement('li');

  const img = document.createElement('img');
  img.classList.add('company-logo');
  img.setAttribute('src', 'images/placeholder.png');
  img.setAttribute('data-src', `images/logos/${logo}`);
  img.setAttribute('alt', `${name} logo`);
  companyCard.appendChild(img);

  const n = document.createElement('span');
  n.classList.add('company-name');
  n.textContent = name;
  companyCard.appendChild(n);

  const a = document.createElement('span');
  a.textContent = address;
  companyCard.appendChild(a);

  const p = document.createElement('span');
  p.textContent = phone;
  companyCard.appendChild(p);

  const link = document.createElement('a');
  link.setAttribute('href', url);
  link.setAttribute('target', '_blank');
  link.setAttribute('rel', 'noreferrer');
  link.textContent = url;
  companyCard.appendChild(link);

  return companyCard;
}
