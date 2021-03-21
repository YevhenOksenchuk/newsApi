export function Query(endpoint, searchString) {
  try {
    return fetch(`http://newsapi.org/v2/${endpoint}?${searchString}&apiKey=2387181a851f4070a3720b90bd307a2c`)
      .then(res => res.json())
      .catch(e => console.error(e));
  } catch (error) {
    console.error(error);
  }
}