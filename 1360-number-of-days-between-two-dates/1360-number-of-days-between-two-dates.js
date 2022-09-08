/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    const date11 = new Date(date1);
    const date22 = new Date(date2);
    
    const dateDiff = (date22 - date11) / (60 * 60 * 24 * 1000);
    
    return(Math.abs(dateDiff))
};