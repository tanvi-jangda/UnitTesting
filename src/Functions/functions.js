"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckPassword = exports.ArrayAddition = exports.CountCapital = void 0;
function CountCapital(myString) {
    var count = 0, len = myString.length;
    for (var i = 0; i < len; i++) {
        if (/[A-Z]/.test(myString.charAt(i)))
            count++;
    }
    return count;
}
exports.CountCapital = CountCapital;
function ArrayAddition(myArray) {
    var count = 0;
    for (var i = 0; i < myArray.length; i++) {
        count = count + myArray[i];
    }
    return count;
}
exports.ArrayAddition = ArrayAddition;
function CheckPassword(myPassword) {
    var regex = new RegExp('^(?=(?:\D*\d){2})(?=(?:[^a-z]*[a-z]){3})(?=[^A-Z]*[A-Z]){2}(?=(?:\w*\W)).*');
    if (regex.test(myPassword))
        return true;
    else
        return false;
}
exports.CheckPassword = CheckPassword;
