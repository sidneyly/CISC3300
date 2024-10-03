// #6 cat adoption
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

const resultArray = [];

cats.forEach(cat => {
    if (cat.adoptionStatus === 'available') {
        resultArray.push(cat.name);
    }
})

console.log(resultArray);
const adoptionMessage = `Here are the cats available for adoption: ${resultArray.join(', ', ' ')}`;
console.log(adoptionMessage);



// #7 ternary operator
const randomValue = Math.random() * 10;
const randomValuemessage = randomValue > 5 ? "greater than five!" : "less than five!";

console.log(`Random number: ${randomValue}`);
console.log(randomValuemessage);



// #8 loop through cats
cats.forEach(cat => {
    for(let key in cat) {
        console.log(`${key}: ${cat[key]}`);
    }
});



// #9 comparing integer and string
if (1 == '1') {
    console.log('1 == "1" is true');
}
if (1 === '1') {
    console.log('1 === "1" is true');
} else {
    console.log('1 === "1" is false');
}


// #10 Map Function 
const cuteCats = cats.map(cat => `${cat.name} is cute!`);
console.log(cuteCats);
