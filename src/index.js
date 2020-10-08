const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = [];
    let finalResult = [];
    let arr = expr.split('**********');
    arr.forEach(item => {
        item = item.split('');
        for (let i = 0; i < item.length; i = i + 10) {

            let num = item.slice(i, i + 10);

            for (let j = 0; j < num.length; j + 2) {
                let twoNum = num.slice(j, j = j + 2).join('');

                if (twoNum === '10') {
                    result.push('.');
                }
                if (twoNum === '11') {
                    result.push('-');
                }
                
            }
            result.push('*');
        }
            result.push(' ');   
    })
    result = result.join('').trim().split(' ')

    result.forEach(item => {
        let word = '';
        item = item.split('*');
        
        for (let i = 0; i< item.length; i++) {
            for (let key in MORSE_TABLE) {
            if (key === item[i]) {
                word += `${MORSE_TABLE[key]}`
            }
        }
        }
        finalResult.push(word);
    })
        
        return finalResult.join(' ');
    
}

module.exports = {
    decode
}