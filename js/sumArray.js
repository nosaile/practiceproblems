ar = [1,2,3,4,5];


function sumArray(ar){
    var total = 0;
    for (let i = 0; i < ar.length; i++) {
        total += ar[i];
    }
    console.log(total)
    return total;
}

sumArray(ar);