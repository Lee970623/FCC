/* check if str is the correct American phone number
    A correct phone number must include area code, wrapped in ()
    coutry code is not necessary, but it must be 1 if it exists
    str must include number
    str can include space or hyphen*/
function telephoneCheck(str) {
  /*
    @params:
        str: input string
    return:
        true or false
    */
    // TODO
  let regex = /\d/g;

  return regex.test(str);
}
