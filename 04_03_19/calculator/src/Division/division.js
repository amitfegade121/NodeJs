//dividing the two numbers
function division(a, b) {
    try {
        division = a / b;
        return division;
    } catch (error) {
        console.error(error);
    }

}
//exporting the addition function
module.exports = division;