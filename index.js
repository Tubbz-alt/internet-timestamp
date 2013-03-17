module.exports = function (d) {
    if (typeof d === 'string') d = new Date(d);
    
    var month = pad(d.getMonth() + 1, 2);
    var date = pad(d.getDate(), 2);
    var ymd = [ d.getFullYear(), month, date ].join('-');
    
    var h = pad(d.getHours(), 2);
    var m = pad(d.getMinutes(), 2);
    var s = pad(d.getSeconds(), 2);
    var hms = [ h, m, s ].join(':');
    
    var tz = [
        pad(Math.floor(d.getTimezoneOffset() / 60), 2),
        pad(d.getTimezoneOffset() % 60, 2)
    ].join(':');
    return ymd + 'T' + [h,m,s].join(':') + '-' + tz;
};

function pad (x, n) {
    return (Array(n).join('0') + String(x)).split('').slice(-n).join('');
}
