const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last modified: ${document.lastModified}`;

const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();