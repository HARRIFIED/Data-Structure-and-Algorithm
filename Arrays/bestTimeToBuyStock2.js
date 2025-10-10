/**
 * You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

    On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of
     the stock at any time. However, you can sell and buy the stock multiple times on the same day, 
     ensuring you never hold than one share of the stock.

    Find and return the maximum profit you can achieve.

    /**
    [ 7, 1, 5, 3, 6, 4 ]
         L
            R

    output = 0 + 4 + 3 = 7

 */

function maxProfit(prices) {
    let output = 0;
    
    for (let i = 0; i < prices.length; i++) {
        let profit = prices[i+1] - prices[i];
        if (profit > 0) {
            output += profit 
        }
    }
    return output
}

function maxProfit2(prices) {
    let output = 0;
    let left = 0;

    for (let right = 1; right < prices.length; right++) {
        if (prices[left] < prices[right]) {
            let profit = prices[right] - prices[left];
            output += profit;
            left++;
        } else {
            left++
        }
    }
    return output;
}

console.log(maxProfit2([7,1,5,3,6,4])) 