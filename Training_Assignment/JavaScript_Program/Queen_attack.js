var QueenR1 = 4,
    QueenC1 = 2;
var QueenR2 = 3,
    QueenC2 = 1;

function canQueenAttack(QueenR1, QueenC1, QueenR2, QueenC2) {
    if (QueenR1 == QueenR2)
        return true;

    if (QueenC1 == QueenC2)
        return true;

    if (Math.abs(QueenR1 - QueenR2) == Math.abs(QueenC1 - QueenC2))
        return true;

}

if (canQueenAttack(QueenR1, QueenC1, QueenR2, QueenC2)) {
    console.log("Yes");
} else {
    console.log("No");
}