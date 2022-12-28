const inventors = [
    { first: 'Albert', last: 'Einstien', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johnnas', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = ['suraj, sanwal', 'sunny, chauhan', 'aman, kumar', 'ravi ashwin', 'trilok chand', 'bobby, kumar', 'chintu, pal',
                'baba, alam', 'harish, singh', 'praveen, babu', 'nitin, pal', 'virat, kumar'];


// 1. Filter the list of inventors for those who was born on 1800's.
const eighteens = inventors.filter( inventor => inventor.year >= 1800 && inventor.year < 1900);
console.table(eighteens);

// 2. Give an array of inventors first and last name.
const inventorsName = inventors.map( inventor => inventor.first + ' ' + inventor.last );
console.table(inventorsName);

// 3. Get age of all the inventors.
const inventorsAge = inventors.map( inventor => inventor.passed - inventor.year );
console.table(inventorsAge);

// 4. Sort the inventors by birthdate, oldest to youngest.
const sortedInventorsByBirth = inventors.sort( (first, second) => first.year > second.year ? 1 : -1 );
console.table(sortedInventorsByBirth);

// 5. How many years did all inventors live?
const totalYearLive = inventors.reduce((total, inventor) => {
 total += (inventor.passed - inventor.year);
 return total;
}, 0);
console.log(totalYearLive);

// 6. Sort the inventors by year lived.
const sortedInventorsByYearLived = inventors.sort( (first, second) => (first.passed - first.year) > (second.passed - second.year) ? 1 : -1);
console.table(sortedInventorsByYearLived);

// 7. Web browswer excercise for wikkipedia website.
// const list = document.querySelectorAll('.mw-category a');
// const de = Array.from(list).map(li => li.textContent)
//                            .filter(d => d.includes('de'));

// 8. Sort the people alphabatically by first name.
const sortPeopleByName = people.sort( (a, b) => {
    aName = a.split(", ")[0];
    bName = b.split(", ")[0];
    return aName > bName ? 1 : -1;
});
console.table(sortPeopleByName);

// 9. Sumup all the instances of the array below.
const vehicles = ['car', 'truck', 'bus', 'auto', 'car', 'bus', 'car', 'auto', 'truck', 'auto', 'car', 'metro', 'auto', 'car'];
const transport = vehicles.reduce((obj, vehicle) => {
    if(!obj[vehicle]) {
        obj[vehicle] = 0;
    }
    obj[vehicle]++;
    return obj;
}, {});
console.log(transport);

// End.