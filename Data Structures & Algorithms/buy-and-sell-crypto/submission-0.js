class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit=0
        for(let i=0;i<prices.length;i++){
            for(let j=i+1;j<prices.length;j++){
                let temp=prices[j]-prices[i]
                if(temp>profit){
                    profit=temp
                }
            }
        }
        return profit<0?0:profit
    }
}
