const findSum = (string) => {
    let temp = "0";
    let sum = 0;

    for (let i = 0; i <string.length; i++) {
        let character = string[i];

        if (!isNaN(String(character) * 1))
            temp += character;

        else {
            sum += parseInt(temp);
            temp="0";
        }
    }
    return sum + parseInt(temp);
}

let string = "2k2k2k2k2k2";

console.log(findSum(string));