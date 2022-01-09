const lastmod = document.querySelector('#lastmod');
lastmod.textContent = `Date the page was last modified: ${document.lastModified}`;

const currentDate = new Date();
document.querySelector("#year").textContent = currentDate.getFullYear();