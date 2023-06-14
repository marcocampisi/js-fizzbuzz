// const number = document.createElement('div');
// number.classList.add('col', 'number');
// const fizz = document.createElement('div');
// fizz.classList.add('col', 'fizz');
// const buzz = document.createElement('div');
// buzz.classList.add('col', 'buzz');
// const fizzbuzz = document.createElement('div');
// fizzbuzz.classList.add('col', 'fizzbuzz');
const fizzbuzzGrid = document.getElementById('fizzbuzzGrid');

for (let i = 1; i <= 100; i++){
    if (i % 15 == 0 ){
        const fizzbuzz = document.createElement('div');
        fizzbuzz.classList.add('col-2', 'm-3', 'square', 'fizzbuzz');
        fizzbuzz.innerHTML = 'Fizzbuzz';
        fizzbuzzGrid.append(fizzbuzz);
    } else if (i % 3 == 0) {
        const fizz = document.createElement('div');
        fizz.classList.add('col-2', 'm-3', 'square', 'fizz');
        fizz.innerHTML = 'Fizz';
        fizzbuzzGrid.append(fizz);
    } else if (i % 5 == 0) {
        const buzz = document.createElement('div');
        buzz.classList.add('col-2', 'm-3', 'square', 'buzz');
        buzz.innerHTML = 'Buzz';
        fizzbuzzGrid.append(buzz);
    } else {
        const number = document.createElement('div');
        number.classList.add('col-2', 'm-3', 'square', 'number');
        number.innerHTML = i;
        fizzbuzzGrid.append(number);
    }
}