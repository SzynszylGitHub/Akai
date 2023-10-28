// Pobieranie referencji do pól formularza
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");

// Nasłuchiwanie zdarzenia "submit" formularza
document.querySelector("form").addEventListener("submit", function (event) {
    // Flagi do śledzenia poprawności pól
    let isFirstNameValid = true;
    let isLastNameValid = true;
    let isEmailValid = true;

    // Sprawdzenie imienia
    if (firstNameInput.value.trim() === "") {
        isFirstNameValid = false;
        alert("Pole 'Imię' nie może być puste");
    }

    // Sprawdzenie nazwiska
    if (lastNameInput.value.trim() === "") {
        isLastNameValid = false;
        alert("Pole 'Nazwisko' nie może być puste");
    }

    // Sprawdzenie adresu email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        isEmailValid = false;
        alert("Wprowadź poprawny adres email");
    }

    // Zatrzymanie standardowej akcji wysłania formularza, jeśli dane są nieprawidłowe
    if (!isFirstNameValid || !isLastNameValid || !isEmailValid) {
        event.preventDefault();
    }
});
