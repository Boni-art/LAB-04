





let account1 = {
    firstName: "",
    lastName: "",
    bankNo:"", 
    balance: ""
};

let account2 = {
    firstName2: "",
    lastName2: "",
    bankNo:"", 
    balance: ""
};


account1.firstName = prompt("Enter your first name.");
account1.lastName = prompt("Enter your second name.");
account1.bankNo = 2345;
account1.balance = 0;
account2.balance = 0;

function deposit(account, amount) {
    account.balance += amount
}

function withdraw(account, withdrawAmount) {
    if (withdrawAmount > account.balance) {
        alert("Your account balance is insufficient to withdraw the amount of money you entered.");
    } else {
        account.balance -= withdrawAmount;
    }
}

function balance(account) {
    alert("Your account balance is " + account.balance);
}

function transfer(account, accountBeingTransferred, transferAmount) {
    if (transferAmount > account.balance) {
        alert("You don't have sufficient ammount.");
    } else {
        accountBeingTransferred.firstName = prompt("Enter the account's first name that you want to transfer to.");
        accountBeingTransferred.lastName = prompt("Enter the account's last name that you want to transfer to.");
        accountBeingTransferred.bankNo = prompt("Enter the account's 4 digit bank no that you want to transfer to.");
        accountBeingTransferred.balance += transferAmount;
        account.balance -= transferAmount;
        alert("Transferred succesfully");
    }
}








(function(){
    while (1) {
        let choice = prompt("Choose a service \n 1. Deposit \n 2. withdraw \n 3. Balance \n 4. Transfer");
    choice = parseInt(choice);
    if (choice === 1) {
        let depoNo = prompt("How much do you want to deposit.");
        depoNo = parseInt(depoNo);
        deposit(account1, depoNo);
    } else if (choice === 2) {
        let withdrawNo = prompt("How much do you want to withdraw.");
        withdrawNo = parseInt(withdrawNo);
        withdraw(account1, withdrawNo);
    } else if (choice === 3) {
        balance(account1);
    } else if (choice === 4) {
        let transferNo = prompt("How much do you want to transfer.");
        transferNo = parseInt(transferNo);
        transfer(account1, account2, transferNo);
        
    } else {
        alert("Wrong input. Try again!");
    }
        
    }

})();