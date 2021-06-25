/* check if str is the correct American phone number
 *  A correct phone number must include area code, wrapped in ()
 *  coutry code is not necessary, but it must be 1 if it exists
 *  str must include number
 *   str can include space or hyphen
 */
function telephoneCheck(str) {
  /*
   * @params:
   *    str: input string
   * @return:
   *    true or false
   */
  return /^1?\s?(\(\d{3}\)|\d{3})[\s\-]*\d{3}[\s\-]*\d{4}$/.test(str);
}

console.log(telephoneCheck("1(555)555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("1 555)555-5555"));
