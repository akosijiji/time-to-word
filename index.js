/* eslint-disable indent */
/* eslint-disable no-unused-vars */
// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
    // TODO: real code goes here!

    let words = [
        "o'clock",
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
        'ten',
        'eleven',
        'twelve',
        'thirteen',
        'fourteen',
        'fifteen',
        'sixteen',
        'seventeen',
        'eighteen',
        'nineteen',
        'twenty',
        'twenty one',
        'twenty two',
        'twenty three',
        'twenty four',
        'twenty five',
        'twenty six',
        'twenty seven',
        'twenty eight',
        'twenty nine',
    ];

    let word = '';
    const hour = parseInt(time.split(':')[0]);
    const minute = parseInt(time.split(':')[1]);
    const minuteInWord = words[minute];

    if (hour == 0 && minute == 0) {
        word = 'midnight';
    }
    if (hour == 12 && minute == 0) {
        word = 'midday';
    }
    if (hour != 0 && hour != 12 && minute == 0) {
        word = hour + ' ' + words[0];
    }
    if (minute != 0 && minute < 15) {
        word = minuteInWord + ' past ' + words[hour];
    }
    if (minute == 15) {
        word = 'quarter past ' + words[hour];
    }
    if (minute == 30) {
        word = 'half past ' + words[hour];
    }
    if ((minute > 30 && minute < 45) || (minute >= 46 && minute <= 59)) {
        word = words[60 - minute] + ' to ' + words[hour + 1];
    }
    if (minute == 45) {
        word = 'quarter to ' + words[hour + 1];
    }

    console.log(word);
    return word;
}

convertTimeToWords('0:00');
convertTimeToWords('12:00');
convertTimeToWords('2:00');
convertTimeToWords('2:03');
convertTimeToWords('2:11');
convertTimeToWords('2:15');
convertTimeToWords('2:30');
convertTimeToWords('2:33');
convertTimeToWords('2:40');
convertTimeToWords('2:45');
convertTimeToWords('2:55');
convertTimeToWords('8:30');

module.exports = { convertTimeToWords };
