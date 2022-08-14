/**
 * @param {string} coordinates
 * @return {boolean}
 */
const WHITE_CHARACTERS = ['b', 'd', 'f', 'h'];

var squareIsWhite = function(coordinates) {
    const letter = coordinates[0];
    const digts = Number.parseInt(coordinates[1]);
    
    return digts % 2 === 0 ? WHITE_CHARACTERS.indexOf(letter) === - 1 : WHITE_CHARACTERS.indexOf(letter) !== -1;
};