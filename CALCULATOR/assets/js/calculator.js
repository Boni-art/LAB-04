function add(num1, num2){return num1 + num2;}

function subtract(num1, num2){return num1 - num2;}

function multiply(num1, num2){return num1 * num2;}

function divide(num1, num2){num1 / num2;}




(function(){
    let arthimetic = prompt("Choose a service \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division")
    arthimetic = parseInt(arthimetic);
    if (arthimetic === 1) {
        let number1 = prompt("Enter the first number.");
        let number2 = prompt("Enter the second number.");
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        let sum = add(number1, number2); 
        let number3 = 0;
        while (number3 != "q") {
            number3 = prompt("Enter numbers until you finish and then enter q");
            if (number3 == "q") {
                break;
            } else {
                number3 = parseInt(number3);
                sum = add(sum, number3);
                number3 = 0;
            }
        }
        console.log("The sum is " + sum);        
    } else if(arthimetic === 2){
        let number1 = prompt("Enter the first number.");
        let number2 = prompt("Enter the second number.");
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        let subtracted = subtract(number1, number2);
        console.log("The difference is " + subtracted);
    } else if(arthimetic === 3){
        let number1 = prompt("Enter the first number.");
        let number2 = prompt("Enter the second number.");
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        let multiple = multiply(number1, number2); 
        let number3 = 0;
        while (number3 != "q") {
            number3 = prompt("Enter numbers until you finish and then enter q");
            if (number3 == "q") {
                break;
            } else {
                number3 = parseInt(number3);
                multiple = multiply(multiple, number3);
                number3 = 0;
            }
        }    
        console.log("The multiple is " + multiple);
    } else if(arthimetic === 4){
        let number1 = prompt("Enter the first number.");
        let number2 = prompt("Enter the second number.");
        number1 = parseInt(number1);
        number2 = parseInt(number2);
        if (number2 == 0) {
            console.log("The denominator can't be zero");
        } else {
            let dividend = divide(number1, number2);
        }
        console.log("This is the dividend " + dividend);
    } else {
        window.alert("Your choice was incorrect")
    }

    
})();