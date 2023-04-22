//import _ from 'lodash'
//console.log(_.last(['one', 'two']));
//const arr = 'https://hexlet.io'.split('/')
//console.log(arr[arr.length - 1])

const sayPrimeOrNot = (number) => {
    const getPrimeNumber = () => {
        if (number === 1) {
            return 'no'
        }
        return number % number === 0 && number % 1 === 0 ? 'yes' : 'no'
    }
    console.log(getPrimeNumber(number))
}
console.log(sayPrimeOrNot(1))
