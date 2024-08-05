export default async function fetchData() {
  const result = await fetch(
    "https://api.stadtsalat.de/shop/grosse-theaterstrasse-store/"
  );
  const data = await result.json();
  return data;
}
