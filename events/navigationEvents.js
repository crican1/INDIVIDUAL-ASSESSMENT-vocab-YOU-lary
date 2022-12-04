import { getVocab } from '../api/vocabData';
import { emptyVocab, showVocab } from '../pages/viewVocab';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
// LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  document.querySelector('#show-all').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  // Event listener to have vocab show up
  document.querySelector('#all-language').addEventListener('click', () => {
  // console.warn('CLICKED LANGUAGE');
    getVocab().then((vocabArray) => {
      if (vocabArray.length) {
        showVocab(vocabArray);
      } else {
        emptyVocab();
      }
    });
  });
};

export default navigationEvents;
