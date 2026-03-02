//Завдання №1
console.log("Завдання №1\n");
function validateEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkEmail(email)) {
                resolve(email); 
            } else {
                reject("Помилка: некоректний email"); 
            }
        }, 300);
    });
}

const checkEmail = (email) => {
    return email.includes("@") && email.includes(".");
};

validateEmail("test@me.com")
    .then(data => console.log("Валідний:", data))
    .catch(error => console.error(error));

validateEmail("invalid-email")
    .then(data => console.log(data))
    .catch(error => console.error(error));

//Завдання №2
