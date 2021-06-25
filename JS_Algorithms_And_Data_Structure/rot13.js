// rot13 http://www.baike.com/wiki/ROT13
function rot13(str) {
    return str.replace(/[A-Z]/g, char => {
        let nextCode = char.charCodeAt(0) + 13
        
        // skip ([ \ ] ^ _ `)
        if (nextCode >= 91) {
            nextCode += 6
        }
        return String.fromCharCode(nextCode).toUpperCase()
    })
}

console.log(rot13("SERR PBQR PNZC!"))