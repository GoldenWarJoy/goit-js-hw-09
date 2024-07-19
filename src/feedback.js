const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

// Funkcja zapisu danych do localStorage
const saveFormData = () => {
  const formData = {
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
};

// Funkcja odczytu danych z localStorage
const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

// Funkcja obsługi wysłania formularza
const handleFormSubmit = event => {
  event.preventDefault();

  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email === '' || message === '') {
    alert('Please fill out both fields.');
    return;
  }

  console.log({ email, message });

  localStorage.removeItem(STORAGE_KEY);
  emailInput.value = '';
  messageInput.value = '';
};

// Ładowanie danych z localStorage po załadowaniu dokumentu
document.addEventListener('DOMContentLoaded', loadFormData);

// Nasłuchiwanie na zdarzenie input w formularzu
form.addEventListener('input', saveFormData);

// Nasłuchiwanie na zdarzenie submit w formularzu
form.addEventListener('submit', handleFormSubmit);
