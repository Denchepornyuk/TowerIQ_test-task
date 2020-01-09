const API_URL = './users.json';

export const usersFromServer = () => (
  fetch(API_URL)
    .then(response => response.json())
);
