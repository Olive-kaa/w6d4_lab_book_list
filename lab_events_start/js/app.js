document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const input = document.querySelector('#delete');
  input.addEventListener('click', handleInput);
})

const handleFormSubmit = function () {
  event.preventDefault ();
  const title = event.target.title.value;
  const author = event.target.author.value;
  const category = event.target.category.value;
  const selectUL = document.querySelector('#reading-list');
  selectUL.innerHTML += `${title} ${author} ${category}`;
  this.reset();
};

const handleInput = function () {
  console.log('Hello');
  const selectUL = document.querySelector('#reading-list');
  selectUL.innerHTML = '';
}