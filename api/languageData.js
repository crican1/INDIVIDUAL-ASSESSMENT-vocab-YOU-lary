// import client from '../utils/client';

// const endpoint = client.databaseURL;

// const languageType = () => new Promise((resolve, reject) => {
//   fetch(`${endpoint}/vocab.json`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   })
//     .then((response) => response.json())
//     .then((data) => {
//       if (data) {
//         const languageByType = Object.values(data).filter((item) => item.type === 'language');
//       } else {
//         resolve([languageType]);
//       }
//     })
//     .catch(reject);
// });

// export { languageType, // languageByType };
