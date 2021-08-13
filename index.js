function superbowlWin(record) {
    const winYearAndResult = record.find(function(obj){
        return obj.result === "W"
    });
    if (winYearAndResult === undefined) {
        return undefined
    } else {
        return winYearAndResult.year;
    }
};
