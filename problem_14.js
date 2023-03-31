

function findZigZagSequence(a, n) {
    a.sort((a, b) => a - b);
    let mid = Math.floor(n / 2);
    [a[mid], a[n - 1]] = [a[n - 1], a[mid]];
    let st = mid + 1;
    let ed = n - 2;
    while (st <= ed) {
        [a[st], a[ed]] = [a[ed], a[st]];
        st = st + 1;
        ed = ed - 1;
    }
    return a;
}

function runProgram(input) {
    let inputArr = input.trim().split('\n');
    let t = Number(inputArr[0]);
    let line = 1;
    for (let i = 0; i < t; i++) {
        let n = Number(inputArr[line++]);
        let a = inputArr[line++].trim().split(' ').map(Number);
        let res = findZigZagSequence(a, n);
        console.log(res.join(' '));
    }
}

let input = `2
7
4 3 7 8 6 2 1
5
1 4 3 2 5`;

runProgram(input);
