/**
 * You are given an array prices where prices[i] is the price of a given stock on the ith day.

    You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

    Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

    

    Example 1:

    Input: prices = [7,1,5,3,6,4]
    Output: 5
    Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
    Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

    [ 2, 1, 2, 1, 0, 1, 2 ]
      L
      R
 */

function maxProfit(prices) {
    let firstPrice = prices[0];
    let result = 0;

    for (let i = 1; i < prices.length; i++) {
        let price = prices[i];
        let profit = price - firstPrice;

        if (firstPrice > price) {
            firstPrice = price;
        }

        if (profit > result) {
            result = profit
        }
    }

    return result;
}

//Classic sliding window or 2 pointer
function maxProfit2(prices) {
    let left = 0;
    let right = 0;
    let profit = 0;
    let maxProfit = 0;

    while (right < prices.length) {
        if (prices[left] > prices[right]) {
            left++;
        } else {
            profit = prices[right] - prices[left];
            maxProfit = Math.max(maxProfit, profit);
            right++;
        }
    }

    return maxProfit
}

// console.log(maxProfit2([7,1,5,3,6,4]))
// console.log(maxProfit2([2,1,2,1,0,1,2]))
// console.log(maxProfit2([7,6,4,3,1]))