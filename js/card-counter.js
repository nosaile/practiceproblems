"use strict";

let count = 0;

function cc(cards) {

    switch (cards) {
        case(2):
        case(3):
        case(4):
        case(5):
        case(6):
            count++
            break;
        case(10):
        case("J"):
        case("Q"):
        case("K"):
        case("A"):
            count--
            break;
    }

    if (count > 0) {
        console.log(count + " Bet")
        return count + " Bet";
    } else {
        console.log(count + " Bet")
        return count + " Bet";
    }
}


cc(3);
cc(7);
cc("A");
cc("Q");
cc(4)