module.exports = function reverse(n) {
    if (!n) return n;
    n = Math.abs(n);
    let power = Math.trunc(Math.log10(n));
    let result = 0;
    while (n) {
        let digit = n % 10;
        result += digit * 10 ** power;
        n = Math.trunc(n / 10);
        power -= 1;
    }
    return result;
};
