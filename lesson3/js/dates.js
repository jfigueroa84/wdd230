const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Last Modified: ${document.lastModified}`;

const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();