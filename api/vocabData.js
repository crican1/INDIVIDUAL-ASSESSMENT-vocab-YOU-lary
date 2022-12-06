import client from '../utils/client';

const endpoint = client.databaseURL;

// GET ALL VOCAB
const getVocab = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
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

// GET SINGLE VOCAB
const getSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve(data)) // will resolve a single object
    .catch(reject);
});

// CREATE VOCAB
const createVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }) // you technically do not need the options object for GET requests, but using it here for consistency
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

// UPDATE VOCAB
const updateVocab = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${payload.firebaseKey}.json`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }) // you technically do not need the options object for GET requests, but using it here for consistency
    .then((response) => response.json())
    .then(resolve)
    .catch(reject);
});

// DELETE SINGLE VOCAB
const deleteSingleVocab = (firebaseKey) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab/${firebaseKey}.json`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    }, // you technically do not need the options object for GET requests, but using it here for consistency
  })
    .then((response) => response.json())
    .then((data) => resolve((data)))
    .catch(reject);
});

// FILTER VOCAB BY TYPE

// GET CSS VOCAB
const getCss = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const css = Object.values(data).filter((obj) => obj.category === 'CSS');
      resolve(css);
    })
    .catch(reject);
});

// GET HTML VOCAB
const getHtml = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const html = Object.values(data).filter((obj) => obj.category === 'HTML');
      resolve(html);
    })
    .catch(reject);
});

// GET JS VOCAB
const getJs = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/vocab.json?orderBy="uid"&equalTo="${uid}"`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const js = Object.values(data).filter((obj) => obj.category === 'JS');
      resolve(js);
    })
    .catch(reject);
});

export {
  getVocab,
  getSingleVocab,
  createVocab,
  updateVocab,
  deleteSingleVocab,
  getCss,
  getHtml,
  getJs
};
