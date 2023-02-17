var hanoi = function (num) {
    if (num === 1)
        return 1;
    return 2 * hanoi(num - 1) + 1;
};
console.log(hanoi(4));
