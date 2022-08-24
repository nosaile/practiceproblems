const isPowerOfThree = function (n) {
    if (n === 0) {
        return false;
    } else if (n === Math.pow(3, Math.round(Math.log(n) / Math.log(3)))) {
        return true;
    } else {
        return false
    }

};
isPowerOfThree();