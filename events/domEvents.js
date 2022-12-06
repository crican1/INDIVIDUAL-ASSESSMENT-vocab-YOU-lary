import {
  deleteSingleVocab, getCss, getHtml, getJs, getSingleVocab, getVocab
} from '../api/vocabData';
import { showVocab } from '../pages/viewVocab';
import addVocabForm from '../components/forms/addVocabForm';

const domEvents = (user) => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
    // TODO: CLICK EVENT FOR DELETING A VOCAB
    if (e.target.id.includes('delete-vocab-btn')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        console.warn('CLICKED DELETE VOCAB', e.target.id);
        const [, firebaseKey] = e.target.id.split('--');

        deleteSingleVocab(firebaseKey).then(() => {
          getVocab(user.uid).then(showVocab);
        });
      }
    }
    // TODO: CLICK EVENT FOR SHOWING FORM FOR ADDING A VOCAB
    if (e.target.id.includes('add-vocab-button')) {
      // console.warn('ADD BOOK');
      addVocabForm();
    }

    // CLICK EVENT EDITING/UPDATING A VOCAB
    if (e.target.id.includes('edit-vocab-btn')) {
      // console.warn('EDIT VOCAB', e.target.id);
      // console.warn(e.target.id.split('--'));
      const [, firebaseKey] = e.target.id.split('--');

      getSingleVocab(firebaseKey).then((vocabObj) => addVocabForm(vocabObj));
      // getSingleBook(firebaseKey).then(addBookForm); // using the callback method
    }

    // CLICK EVENT FOR FILTERING BY CSS
    document.querySelector('#css-button').addEventListener('click', () => {
      getCss(user.uid).then(showVocab);
    });

    // CLICK EVENT FOR FILTERING BY HTML
    document.querySelector('#html-button').addEventListener('click', () => {
      getHtml(user.uid).then(showVocab);
    });

    // CLICK EVENT FOR FILTERING BY JS
    document.querySelector('#js-button').addEventListener('click', () => {
      getJs(user.uid).then(showVocab);
    });

    // CLICK EVENT FOR ADDING A VOCAB WORD
  });
};
export default domEvents;
