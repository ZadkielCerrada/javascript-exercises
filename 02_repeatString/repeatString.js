function repeatString(str, num) {
    if (num < 0) return "";
    if (num === -1) return "ERROR";
    let result = "";
    for (let i = 0; i <= num - 1; i++) {
        result += str;
    }
    return result;
}

repeatString("hey", -1);

// ------------------------------------------------------

// USING ? TERNARY OPERATOR.

// function repeatString(str, num) {
//     return num > 0 ? str + repeatString(str, num - 1) : "";
// }

// repeatString("hey", -1);

// function repeatString(str, num) {
//     if (num > 0) return str.repeat(num);
//     if (num === -num) return "ERROR";
//     else return "";
// }

// repeatString("hey", -1);
// Do not edit below this line

module.exports = repeatString;
