





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










(function(){
    while (1) {
        let choice = prompt("Choose a service \n 1. Deposit \n 2. withdraw \n 3. Balance \n 4. Transfer");
    choice = parseInt(choice);
    if (choice === 1) {
        let depoNo = prompt("How much do you want to deposit.");
        depoNo = parseInt(depoNo);
        account1.balance = account1.balance + depoNo;
    } else if (choice === 2) {
        let withdrawNo = prompt("How much do you want to withdraw.");
        withdrawNo = parseInt(withdrawNo);
        if (withdrawNo > account1.balance) {
            alert("Your account balance is insufficient to withdraw the amount of money you entered.");
        } else {
            account1.balance = account1.balance - withdrawNo;
        }
    } else if (choice === 3) {
        alert("Your account balance is " + account1.balance);
    } else if (choice === 4) {
        let transferNo = prompt("How much do you want to transfer.");
        transferNo = parseInt(transferNo);
        if (transferNo > account1.balance) {
            alert("You don't have sufficient ammount.");
            console.log("You don't have sufficient ammount.");
        } else {
            account2.firstName = prompt("Enter the account's first name that you want to transfer to.");
            account2.lastName = prompt("Enter the account's last name that you want to transfer to.");
            account2.bankNo = prompt("Enter the account's 4 digit bank no that you want to transfer to.");
            account2.balance = account2.balance + transferNo;
            account1.balance = account1.balance - transferNo;
            alert("Transferred succesfully");
        }
        
    } else {
        alert("Wrong input. Try again!");
    }
        
    }

})();