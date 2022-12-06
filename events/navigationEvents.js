import { getVocab } from '../api/vocabData';
import { showVocab } from '../pages/viewVocab';
import { signOut } from '../utils/auth';

const navigationEvents = (user) => {
// LOGOUT BUTTON
  document.querySelector('#logout-button')
    .addEventListener('click', signOut);

  // Event listener to have vocab show up
  document.querySelector('#show-all').addEventListener('click', () => {
    getVocab(user.uid).then(showVocab);
  });
};

export default navigationEvents;
