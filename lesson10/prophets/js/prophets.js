async function init() {
  const requestURL =
    'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

  const response = await fetch(requestURL);

  const jsonObject = await response.json();

  const prophets = jsonObject.prophets;

  
  for (let i = 0; i < prophets.length; i++) {
    let card = document.createElement('section');

    let h2 = document.createElement('h2');
    h2.innerHTML = `${prophets[i].name}<br>${prophets[i].lastname}`;
    card.appendChild(h2);

    let p1 = document.createElement('p');
    p1.innerHTML = `Date of Birth:<br>${prophets[i].birthdate}`;
    card.appendChild(p1);


    let p2 = document.createElement('p');
    p2.innerHTML = `Place of Birth:<br>${prophets[i].birthplace}`;
    card.appendChild(p2);


    let img = document.createElement('img');
    img.setAttribute('src', 'images/placeholder.png');
    img.setAttribute('data-src', prophets[i].imageurl);
    img.setAttribute('alt', `Picture of President ${prophets[i].lastname}`);
    img.setAttribute('width', 540);
    img.setAttribute('height', 720);
    card.appendChild(img);
    document.querySelector('div.cards').appendChild(card);
  }

  initLazyLoad();
}

window.addEventListener('load', init);
