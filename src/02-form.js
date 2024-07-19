const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// Funkcja do zapisu wartości pól w pamięci lokalnej
function saveFormData() {
  localStorage.setItem('email', emailInput.value);
  localStorage.setItem('message', messageInput.value);
}

// Nasłuchiwanie na zdarzenie input w polu email
emailInput.addEventListener('input', () => {
  saveFormData();
});

// Nasłuchiwanie na zdarzenie input w polu message
messageInput.addEventListener('input', () => {
  saveFormData();
});

// Funkcja do wczytania zapisanych danych z pamięci lokalnej
function loadFormData() {
  const savedEmail = localStorage.getItem('email');
  const savedMessage = localStorage.getItem('message');

  if (savedEmail) {
    emailInput.value = savedEmail;
  }

  if (savedMessage) {
    messageInput.value = savedMessage;
  }
}

// Wczytanie danych z pamięci lokalnej po załadowaniu strony
document.addEventListener('DOMContentLoaded', loadFormData);

// Obsługa zapisu danych po wysłaniu formularza
form.addEventListener('submit', event => {
  // Zapis do pamięci lokalnej przy wysyłaniu formularza
  saveFormData();

  // Można dodać również logikę wysłania formularza tutaj...
  // Na potrzeby tego przykładu, użyjemy preventDefault() by nie odświeżało strony
  event.preventDefault();
});
