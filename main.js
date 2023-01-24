const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// an array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


const validMessage = 'The Credit Card number you have entered is valid'
const invalidMessage = 'The Credit Card number you have entered is invalid'


const validateCred = arr => {
    let reversedArr = arr.reverse();     

    // looping through the array, if the index is odd numbered, then we multiply it by 2, if the result of our multiplication is greater than 9, then we subtract 9 from the result.
    for (let i = 1; i < reversedArr.length; i++) {
        if (i % 2 === 1) {
            reversedArr[i] *= 2;
            if (reversedArr[i] > 9) {
                reversedArr[i] -= 9;
            }
        }
    }
    // finding the sum of the array
    let arrSum = reversedArr.reduce((acc, curr) => acc + curr);
    if (arrSum % 10 === 0) {
        return validMessage
    } else {
        return invalidMessage
    }
}

const findInvalidCards = arr => {
    let invalidCards = [];
    for (let i = 0; i < arr.length; i++) {
        if (validateCred(arr[i]) !== validMessage) {
            invalidCards.push(arr[i]);
        }
    }
    return invalidCards;
}

const idInvalidCardCompanies = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[0] === 3) {
            return 'Amex'
        } else if (arr[0] === 4) {
            return 'Visa'
        } else if (arr[0] === 5) {
            return 'Mastercard'
        } else if (arr[0] === 6) {
            return 'Discover'
        } else {
            return 'Error, Credit Card company not found!'
        }
    }
}

// testing validateCred function:: 
console.log(validateCred(valid4));

// testing findInvalidCards function::
console.log(findInvalidCards([mystery1, mystery2, mystery3, mystery4, mystery5]));

// testing IDing Credit Cards::
console.log(idInvalidCardCompanies(invalid1));
console.log(idInvalidCardCompanies(invalid2));
console.log(idInvalidCardCompanies(invalid3));
console.log(idInvalidCardCompanies(invalid4));
console.log(idInvalidCardCompanies(invalid5));