import clearDom from '../../utils/clearDom';
import renderToDOM from '../../utils/renderToDom';

// USING THIS FORM FOR CREATE
const addVocabForm = (obj = {}) => {
  clearDom();
  const domString = `
    <form id="${obj.firebaseKey ? `edit-vocab--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
      <div class="form-group">
        <label for="term">Term</label>
        <input type="text" class="form-control" id="term" aria-describedby="term" placeholder="Enter Term" value="${obj.term || ''}" required>
      </div></br>
      <div class="form-group">
        <label for="type">Type</label>
        <textarea class="form-control" placeholder="Type" id="type" style="height: 100px">${obj.type || ''}</textarea>
      </div></br>
      <div class="form-group">
        <label for="definition">Definition</label>
        <textarea class="form-control" placeholder="Term Definition" id="term-definition" style="height: 100px">${obj.definition || ''}</textarea>
      </div></br>
        <div class="form-group">
          <label for="category">Category:</label>
          <select id="category" name="vocabCategory" value="${obj.category || ''}" required>
            <option value="HTML" ${obj.category === 'HTML' ? 'selected' : ''}>HTML</option>
            <option value="CSS" ${obj.category === 'CSS' ? 'selected' : ''}>CSS</option>
            <option value="JS" ${obj.category === 'JS' ? 'selected' : ''}>JS</option>
            </select>
          </div></br>
      <button type="submit" id="submit-vocab-btn" class="btn btn-warning">Submit Vocab
      </button>
    </form>`;

  renderToDOM('#form-container', domString);
};

// const editVocabForm = (obj = {}) => {
//   clearDom();
//   const domString = `
//     <form id="${obj.firebaseKey ? `edit-vocab-btn--${obj.firebaseKey}` : 'submit-vocab'}" class="mb-4">
//       <div class="form-group">
//         <label for="term">Term</label>
//         <input type="text" class="form-control" id="term" aria-describedby="term" placeholder="Enter Term" value="${obj.term || ''}" required>
//       </div></br>
//       <div class="form-group">
//         <label for="type">Type</label>
//         <textarea class="form-control" placeholder="Type" id="type" style="height: 100px">${obj.type || ''}</textarea>
//       </div></br>
//       <div class="form-group">
//         <label for="definition">Definition</label>
//         <textarea class="form-control" placeholder="Term Definition" id="term-definition" style="height: 100px">${obj.definition || ''}</textarea>
//       </div></br>
//       <div class="form-group">
//       <label for="category">Category:</label>
//       <select id="category" name="vocabCategory" value="${obj.category || ''}" required>
//         <option value="HTML" ${obj.category === 'HTML' ? 'selected' : ''}>HTML</option>
//         <option value="CSS" ${obj.category === 'CSS' ? 'selected' : ''}>CSS</option>
//         <option value="JS" ${obj.category === 'JS' ? 'selected' : ''}>JS</option>
//         </select>
//       </div></br>
//       <button type="submit" id="submit-vocab-btn" class="btn btn-warning">Submit Vocab
//       </button>
//     </form>`;

//   renderToDOM('#form-container', domString);
// };

export default addVocabForm;
