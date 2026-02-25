var maxProfit = function(prices) {
    let min = prices[0]
    let maxProfit = 0

    for(let i = 1; i < prices.length; i++){
        if(min > prices[i]){
            min = prices[i]
        }
        if(maxProfit < prices[i] - min ){
            maxProfit = prices[i] - min
        }
    }
    return maxProfit
};
