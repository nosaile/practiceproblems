function change(d){
    return {
        weeks : Math.floor(d / 7),
        days : d % 7
    };
}

console.log(change(69));