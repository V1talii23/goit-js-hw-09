const DATA_KEY = 'feedback-form-state';

let formData = {
  email: '',
  message: '',
};

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

form.addEventListener('submit', handlerSubmit);
form.addEventListener('input', handlerInput);

populateData();

function handlerInput(event) {
  const { name, value } = event.target;

  if (formData.hasOwnProperty(name)) {
    formData[name] = value.trim();

    localStorage.setItem(DATA_KEY, JSON.stringify(formData));
  }
}

function populateData() {
  try {
    const savedData = JSON.parse(localStorage.getItem(DATA_KEY));
    if (!savedData) return;

    formData = { ...formData, ...savedData };

    input.value = formData.email || '';
    textarea.value = formData.message || '';
  } catch (error) {
    console.error('I catch an error:', error);
    localStorage.removeItem(DATA_KEY);
  }
}

function handlerSubmit(e) {
  e.preventDefault();

  const email = input.value.trim();
  const message = textarea.value.trim();

  if (!email || !message) {
    alert('Fill please all fields');
    return;
  } else {
    console.log(formData);
    formData = { email: '', message: '' };

    e.target.reset();
    localStorage.removeItem(DATA_KEY);
  }
}
