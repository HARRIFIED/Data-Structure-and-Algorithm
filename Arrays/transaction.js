/**
 * Question
    You are given a list of transactions:
 * [
    { userId: "A", type: "credit", amount: 100 },
    { userId: "A", type: "debit", amount: 30 },
    { userId: "B", type: "credit", amount: 50 },
    { userId: "A", type: "debit", amount: 50 }
   ]

   Task
    Compute the final balance for each user
    If a user’s balance ever goes negative at any point, flag that user
    Return:
        balances
        list of flagged users

 */

function record (transactions) {
    const balances = {};
    const invalidUsers = new Set();

    for (tx of transactions) {
        // initialize a balance record if it doesn't exist
        if (!balances[tx.userId]) {
            balances[tx.userId] = 0;
        }

        if (tx.type === "credit") {
            balances[tx.userId] += tx.amount;
        }
        if (tx.type === "debit") {
            if (balances[tx.userId] < tx.amount) {
                invalidUsers.add(tx.userId);
                continue;
            } 
            balances[tx.userId] -= tx.amount;
        }

        // check realtime for negative balances
        if (balances[tx.userId] < 0) {
            invalidUsers.add(tx.userId);
        }
    }
    return {balances, invalidUsers: Array.from(invalidUsers)};
}

console.log(record(
    [
        { userId: "A", type: "credit", amount: 100 },
        { userId: "A", type: "debit", amount: 40 },
        { userId: "A", type: "debit", amount: 80 },
        { userId: "B", type: "credit", amount: 50 },
        { userId: "B", type: "debit", amount: 10 }
    ]
));