"use strict";

function removeVowels(string) {

    switch (string) {
        case(string):
            string = string.replace(/[aeiou]/ig, '' )
            break;
    }

    console.log(string)

}

removeVowels("This is a test case.");
removeVowels("I will now remove all of the vowels from this string.")