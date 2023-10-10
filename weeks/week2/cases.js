const permutation = (n, r) => {
    let ret = 1;
    let operand = n;
    for (let i = 0; i < r; i++) {
        ret *= operand--;
    }
    return ret;
}

const combination = (n, r) => {
    let ret = permutation(n, r);
    while (r > 1) {
        ret /= r--;
    }
    return ret;
}

const multiPermutation = (n, r) => {
    let ret = 1;
    while (r-- > 0) {
        ret *= n;
    }
    return ret;
}

const multiCombination = (n, r) => combination(n + r - 1, r)

module.exports = {
    permutation,
    combination,
    multiPermutation,
    multiCombination
}