const arr = [-9,14,3,2,0];

function plusMinus(arr) {
    const arrLength = arr.length;
    var totalP = 0;
    var totalN = 0;
    var totalZ = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            totalP += 1;
        }else if(arr[i] < 0){
            totalN += 1;
        }else if(arr[i] === 0){
            totalZ += 1;
        }
    }
    console.log((totalP/arrLength).toFixed(6))
    console.log((totalN/arrLength).toFixed(6))
    console.log((totalZ/arrLength).toFixed(6))
}

plusMinus(arr);