// convert a input number into Roman numeral
function convertToRoman(num) {
  /* 
    @params: 
        num: input number
    @return:
        roman numeral
    */
  const numToRoman = {
    1: "I",
    2: "II",
    3: "III",
    4: "IV",
    5: "V",
    6: "VI",
    7: "VII",
    8: "VIII",
    9: "IX",
    10: "X",
    20: "XX",
    30: "XXX",
    40: "XL",
    50: "L",
    60: "LX",
    70: "LXX",
    80: "LXXX",
    90: "XC",
    100: "C",
    200: "CC",
    300: "CCC",
    400: "CD",
    500: "D",
    600: "DC",
    700: "DCC",
    800: "DCCC",
    900: "CM",
    1000: "M",
  };
  let numArr = String(num).split("");
  // make a number e.g. 1024 to [1000, 0, 20, 4]
  return numArr.map((item, index) => {
    let temp = parseInt(item.padEnd(numArr.length - index, 0));
    if (temp > 1000) {
        return "M".repeat(temp / 1000)
    } else if (temp !== 0) {
        return numToRoman[temp]
    } else 
        return ''
  }).join('')
}

console.log(convertToRoman(2024)); // MMXXIV
console.log(convertToRoman(3999)); // MMMCMXCIX
