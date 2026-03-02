// ==================== ЗАВДАННЯ 1.3 ====================
/**
 * Створіть проміс з валідацією email
 * Якщо email містить @ та . - resolve з email
 * Інакше - reject з повідомленням про помилку
 * 
 * @param {string} email 
 * @returns {Promise<string, string>}
 */

function validateEmail(email) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (checkEmail(email)) {
                resolve(email); 
            } else {
                reject("Email is invalid"); 
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

// ==================== ЗАВДАННЯ 1.4 ====================
/**
 * Створіть проміс, який симулює авторизацію користувача
 * - Якщо username та password не порожні - resolve з об'єктом користувача
 * - Якщо username порожній - reject з 'Username is required'
 * - Якщо password порожній - reject з 'Password is required'
 * - Якщо password коротший за 6 символів - reject з 'Password too short'
 * 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<{username: string, authenticated: boolean}, string>}
 */

function authenticateUser(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!username) {
                reject("Username is required");
            }
            else if (!password) {
                reject("Password is required");
            }
            else if (password.length < 6) {
                reject("Password too short");
            }
            else {
                resolve({ username, authenticated: true });
            }
        }, 300);
    });
}

// Перевірка:
authenticateUser('john', 'password123')
    .then(user => console.log(' Тест 1.4 (успіх):', user))
    .catch(err => console.log('   Помилка:', err));

authenticateUser('', 'password123')
    .then(user => console.log('   Не повинно виконатися'))
    .catch(err => console.log(' Тест 1.4 (немає username):', err));

authenticateUser('john', '12345')
    .then(user => console.log('   Не повинно виконатися'))
    .catch(err => console.log(' Тест 1.4 (короткий пароль):', err));

// ==================== ЗАВДАННЯ 1.5 ====================
/**
 * Створіть функцію, яка перевіряє вік користувача
 * - age < 0: reject 'Invalid age'
 * - age < 18: reject 'Too young'
 * - age >= 18 та age < 65: resolve {age, category: 'adult'}
 * - age >= 65: resolve {age, category: 'senior'}
 * 
 * @param {number} age 
 * @returns {Promise<{age: number, category: string}, string>}
 */

function checkAge(age) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (age < 0) {
                reject("Invalid age");
            } else if (age < 18) {
                reject("Too young");
            } else if (age >= 18 && age < 65) {
                resolve({ age, category: "adult" });
            } else {
                resolve({ age, category: "senior" });
            }
        }, 300);
    });
}

// Перевірка (розкоментуйте після реалізації):
checkAge(25).then(console.log).catch(console.error);
checkAge(70).then(console.log).catch(console.error);
checkAge(15).then(console.log).catch(console.error);
checkAge(-5).then(console.log).catch(console.error); 

// ==================== ЗАВДАННЯ 2.2 ====================
/**
 * Створіть функцію, яка приймає масив чисел
 * і повертає проміс з сумою цих чисел
 * 
 * @param {number[]} numbers 
 * @returns {Promise<number>}
 */

function sumNumbers(numbers) {
    // TODO: Порахуйте суму та поверніть її через Promise.resolve()
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const sum = numbers.reduce((acc, num) => acc + num, 0);
            resolve(sum);
        }, 300);
    });
}

// Перевірка:
sumNumbers([1, 2, 3, 4, 5])
    .then(sum => console.log(' Тест 2.2:', sum)); // Очікується: 15

// ==================== ЗАВДАННЯ 2.3 ====================
/**
 * Створіть функцію, яка конвертує об'єкт користувача
 * додаючи йому поле fullName
 * 
 * @param {{firstName: string, lastName: string}} user 
 * @returns {Promise<{firstName: string, lastName: string, fullName: string}>}
 */

function addFullName(user) {
    // TODO: Додайте поле fullName і поверніть через проміс
    // fullName = firstName + ' ' + lastName
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const fullName = user.firstName + ' ' + user.lastName;
            resolve({ ...user, fullName });
        }, 300);
    });
}

// Перевірка:
addFullName({ firstName: 'John', lastName: 'Doe' })
    .then(user => console.log(' Тест 2.3:', user));
// Очікується: { firstName: 'John', lastName: 'Doe', fullName: 'John Doe' }

// ==================== ЗАВДАННЯ 2.6 ====================
/**
 * Створіть функцію, яка конвертує масив значень в масив промісів
 * Кожен проміс має резолвитися з відповідним значенням
 * 
 * @param {any[]} values 
 * @returns {Promise<any>[]}
 */
function valuesToPromises(values) {
    // TODO: Конвертуйте кожне значення в проміс
    return values.map(value => Promise.resolve(value));
}

// Перевірка:
const promises = valuesToPromises([1, 2, 3]);
Promise.all(promises)
    .then(results => console.log(' Тест 2.6:', results));
// Очікується: [1, 2, 3]

// ==================== ЗАВДАННЯ 7.1 ====================
/**
 * Створіть ланцюжок, який:
 * 1. Починається з числа 5
 * 2. Множить на 2
 * 3. Додає 10
 * 4. Конвертує в рядок
 * 
 * Очікуваний результат: "20"
 */
function simpleChain() {
    return Promise.resolve(5)
        // TODO: Додайте .then() для множення на 2
        // TODO: Додайте .then() для додавання 10
        // TODO: Додайте .then() для конвертації в рядок
        .then(num => num * 2) // Множимо на 2
        .then(num => num + 10) // Додаємо 10
        .then(num => num.toString()); // Конвертуємо в рядок
}

// Перевірка:
simpleChain()
    .then(result => console.log(' Тест 7.1:', result)); // "20"

// ==================== ЗАВДАННЯ 7.3 ====================
/**
 * Створіть ланцюжок з асинхронними операціями
 * Використовуйте функції нижче для побудови ланцюжка
 */

function fetchUserData(userId) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ id: userId, username: 'user_' + userId });
        }, 100);
    });
}

function fetchUserPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ...user,
                posts: ['Post 1', 'Post 2', 'Post 3']
            });
        }, 100);
    });
}

function countPosts(userData) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                ...userData,
                postCount: userData.posts.length
            });
        }, 100);
    });
}

/**
 * Створіть функцію, яка:
 * 1. Отримує дані користувача
 * 2. Отримує його пости
 * 3. Рахує кількість постів
 * 
 * @param {number} userId 
 * @returns {Promise<{id: number, username: string, posts: string[], postCount: number}>}
 */
function getUserWithPostCount(userId) {
    // TODO: Побудуйте ланцюжок з трьох функцій вище
    return fetchUserData(userId)
        .then(user => fetchUserPosts(user))
        .then(userData => countPosts(userData));
}

// Перевірка:
getUserWithPostCount(123)
    .then(result => console.log(' Тест 7.3:', result));
