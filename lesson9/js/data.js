
async function getCompanies() {
  const url = `./data/companies.json`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data;
}
