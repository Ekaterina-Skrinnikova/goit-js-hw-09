const form = document.querySelector('.feedback-form');
// console.log(form);
const keyStorage = 'feedback-form-state';

function dataForm(form) {
  const email = form.email.value.trim();
  const message = form.message.value.trim();
  return {
    email,
    message,
  };
}

form.addEventListener('input', event => {
  event.preventDefault();

  const data = dataForm(event.currentTarget);
  const jsonData = JSON.stringify(data);
  localStorage.setItem(keyStorage, jsonData);
});

const localData = localStorage.getItem(keyStorage);
if (localData) {
  const data = JSON.parse(localData);
  form.email.value = data.email;
  form.message.value = data.message;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  localStorage.clear();
  form.reset();
});
