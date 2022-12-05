import clearDom from '../utils/clearDom';
import renderToDOM from '../utils/renderToDom';

const emptyVocab = () => {
  const domString = '<h1>No Languages</h1>';
  renderToDOM('#store', domString);
};

const showVocab = (array) => {
  clearDom();

  const btnString = '<button class="btn btn-warning btn-lg mb-4" id="add-vocab-button">Add Vocab</button>';
  renderToDOM('#add-button', btnString);

  let domString = '';
  array.forEach((obj) => {
    domString += `
      <div id="view" class="card">
        <div class="card-body">
          <h5 class="card-title">${obj.term}</h5><hr><br>
          <h5 class"card-title">${obj.type}</h5>
          <p class="card-text">${obj.definition}</p>
          <p class="card-title">${obj.category}</p>
        </div>
        <div class="card-body">
          <a href="#" id="edit-vocab-btn--${obj.firebaseKey}" class="card-link">Edit</a>
          <a href="#" id="delete-vocab-btn--${obj.firebaseKey}" class="card-link">Delete</a>
        </div>
        <div class="card-footer text-muted">
          ${obj.date_submitted}
        </div>
       </div>`;
  });
  renderToDOM('#store', domString);
};

export { showVocab, emptyVocab };
