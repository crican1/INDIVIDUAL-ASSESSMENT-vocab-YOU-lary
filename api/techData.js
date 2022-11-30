import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL TECH
const getTech = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

// GET SINGLE Tech
const getSingleTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// DELETE TECH
const deleteSingleTech = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/tech/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

export {
  getTech,
  getSingleTech,
  deleteSingleTech
};
