import {
  createVocab, getVocab, updateVocab
} from '../api/vocabData';
import { showVocab } from '../pages/viewVocab';
import timestamp from '../utils/timeStamp';

const formEvents = () => {
  document.querySelector('#main-container').addEventListener('submit', (e) => {
    e.preventDefault();

    // TODO: CLICK EVENT FOR SUBMITTING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('submit-vocab')) {
      console.warn('CLICKED SUBMIT VOCAB', e.target.id);
      const payload = {
        term: document.querySelector('#term').value,
        type: document.querySelector('#type').value,
        definition: document.querySelector('#term-definition').value,
        category: document.querySelector('#category').value,
        date_submitted: timestamp,
      };
      // console.warn(payload);
      createVocab(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };

        updateVocab(patchPayload).then(() => {
          getVocab().then(showVocab);
        });
      });
    }

    // CLICK EVENT FOR EDITING A VOCAB
    if (e.target.id.includes('edit-vocab')) {
      const [, firebaseKey] = e.target.id.split('--');
      console.warn('CLICKED EDIT VOCAB', e.target.id);
      console.warn(firebaseKey);
      const payload = {
        term: document.querySelector('#term').value,
        type: document.querySelector('#type').value,
        definition: document.querySelector('#term-definition').value,
        date_submitted: timestamp,
        category: document.querySelector('#category').value,
        firebaseKey,
      };

      updateVocab(payload).then(() => {
        getVocab().then(showVocab);
      });
    }
  });
};

export default formEvents;
