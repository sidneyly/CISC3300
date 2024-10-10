// Change to Blue Function 
document.querySelectorAll('#change-color li').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelectorAll('#change-color li').forEach(li => {
            li.style.color = 'blue';
        });
    });
});

//Fill Cat List
const cats = [
    {name: 'Charlie', adoptionStatus: 'available'},
    {name: 'Lily', adoptionStatus: 'not-available'},
    {name: 'Coco', adoptionStatus: 'available'},
    {name: 'Oreo', adoptionStatus: 'not-available'},
    {name: 'Luna', adoptionStatus: 'available'},
    {name: 'Milo', adoptionStatus: 'available'},
    {name: 'Lola', adoptionStatus: 'not-available'},
    {name: 'Leo', adoptionStatus: 'available'},
    {name: 'Willow', adoptionStatus: 'available'},
    {name: 'Bella', adoptionStatus: 'not-available'},
    {name: 'Max', adoptionStatus: 'available'},
    {name: 'Cleo', adoptionStatus: 'available'},
    {name: 'Lucy', adoptionStatus: 'not-available'},
    {name: 'Daisy', adoptionStatus: 'available'},
];

const catList = document.getElementById('cat-list');
cats.forEach(cat => {
    const li = document.createElement('li');
    li.textContent = cat.name;
    catList.appendChild(li);
});

//Form Submission 
const form = document.getElementById('submission-form');
const input = document.getElementById('user-input');
const message = document.getElementById('form-message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    message.innerHTML = '';

    if (!inputValue) {
        const errorMessage = document.createElement('div');
        errorMessage.textContent = "Please Provide a Value!";
        errorMessage.classList.add('error');
        message.appendChild(errorMessage);
    } else {
        const successMessage = document.createElement('div');
        successMessage.textContent = "Success!";
        successMessage.classList.add('success');
        message.appendChild(successMessage);
    }

    console.log(inputValue);
});