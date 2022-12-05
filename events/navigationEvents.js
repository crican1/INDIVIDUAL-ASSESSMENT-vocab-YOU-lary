import { languageByType } from '../api/languageData';
import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/viewVocab';
import { signOut } from '../utils/auth';

const navigationEvents = () => {
// LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // Event listener to have vocab show up
  document.querySelector('#show-all').addEventListener('click', () => {
    getVocab().then(showVocab);
  });

  // Event listener to have language show up
  document.querySelector('#all-language').addEventListener('click', () => {
    languageByType().then(showVocab);
  });
};

export default navigationEvents;
