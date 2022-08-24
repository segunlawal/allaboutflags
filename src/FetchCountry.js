async function getAllCountries() {
  const response = await fetch('https://restcountries.com/v3.1/all');

  if (!response.ok) {
    throw new Error('Something went wrong');
  }

  return response.json();
}
export default getAllCountries;
