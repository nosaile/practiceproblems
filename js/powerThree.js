const isPowerOfThree = function (n) {


    //TODO: give 'n' a value on the line below and uncomment line

    // n =
    if (n === 0) {
        console.log(false)
        return false;
    } else if(n === Math.pow(3, Math.round(Math.log(n) / Math.log(3)))) {
        console.log(true)
        return true;
    }else {
        console.log(false)
        return false;
    }
};
isPowerOfThree();