do {
    var numberIpn = +prompt('Введите число')
} while (isNaN(numberIpn) || degree == 0)
    var numberSecond = numberIpn
do {
    var degree = +prompt('Введи степень')
} while (isNaN(degree) || degree == 0)

for (let i = 1; i < degree; i++) {
    numberIpn = numberIpn * numberSecond
}
alert(numberIpn);


do {
    var steps = +prompt('Введите число ступенек')
} while (isNaN(steps) || steps == 0);
do {
    var middle = prompt('Ведите первый символ')
} while (!isNaN(middle) || middle == '');
do {
    var last = prompt('Ведите второй символ')
} while (!isNaN(last) || last == '');
var secondMiddle = middle
console.log(last);
for (let i = 1; i < steps; i++) {
    console.log( middle + last);
    middle = middle + secondMiddle

}
