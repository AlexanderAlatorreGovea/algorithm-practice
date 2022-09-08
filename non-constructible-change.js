function nonConstructibleChange(coins) {
    coins.sort((a, b) => a - b);
    let change = 0;

    for(let i = 0; i < coins.length; i++) {
        if(coins[i] > change + 1) {
            return change + 1;
        }

        change += coins[i]
    }

    return change + 1;
}
                  
//[1, 1, 2, 3, 5, 7, 22]