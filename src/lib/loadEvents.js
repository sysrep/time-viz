const url = 'http://localhost:8080/api/data/events'
const username = 'chen';
const password = '12345';
const options = {
    headers: {
      Authorization: `Basic ${window.btoa(`${username}:${password}`)}`,
    },
}

export const loadEvents = () => {
  return fetch(url, options)
    .then(res => res.json())
}
