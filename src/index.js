const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {

    let prepArr = expr.match(/.{1,10}/g)
    let dd = ''
    let i = 0

    prepArr.forEach(char => {
        if (char === '**********') {
            prepArr[i] = ' '
            ++i
        }
        else {
            dd = char.slice(char.indexOf(1)).replaceAll('10', '.').replaceAll('11', '-')
            prepArr[i] = MORSE_TABLE[dd]
            ++i
        }
    });

    return prepArr.join('')

}

module.exports = {
    decode
}