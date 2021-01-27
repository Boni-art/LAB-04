function add(num1, num2){return num1 + num2;}

function subtract(num1, num2){return num1 - num2;}

function multiply(num1, num2){return num1 * num2;}

function divide(num1, num2){num1 / num2;}

function max(num1, num2){
    if (num1 > num2) {
        return num1
    } else if(num1 < num2){
        return num2
    }
    else{
        return "q";
    }
}

function min(num1, num2){
    if (num1 > num2) {
        return num2
    } else if(num1 < num2){
        return num1
    }
    else{
        return "q";
    }
}


(function(){
    while (1) {
        let arthimetic = prompt("Choose a service \n 1. Addition \n 2. Subtraction \n 3. Multiplication \n 4. Division \n 5. Max \n 6. Min" )
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
            alert("The sum is " + sum);        
        } else if(arthimetic === 2){
            let number1 = prompt("Enter the first number.");
            let number2 = prompt("Enter the second number.");
            number1 = parseInt(number1);
            number2 = parseInt(number2);
            let subtracted = subtract(number1, number2);
            alert("The difference is " + subtracted);
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
            alert("The multiple is " + multiple);
        } else if(arthimetic === 4){
            let number1 = prompt("Enter the first number.");
            let number2 = prompt("Enter the second number.");
            number1 = parseInt(number1);
            number2 = parseInt(number2);
            if (number2 == 0) {
                alert("The denominator can't be zero");
            } else {
                let dividend = divide(number1, number2);
            }
            alert("This is the dividend " + dividend);
        } else if (arthimetic === 5) {
            let number1 = prompt("Enter the first number.");
            let number2 = prompt("Enter the second number.");
            number1 = parseInt(number1);
            number2 = parseInt(number2);
            maximum = max(number1, number2);
            if (maximum === "q") {
                alert("They are equal");
            } else {
                alert("The maximum of the two is " + maximum);
            }
            
        } else if (arthimetic === 6) {
            let number1 = prompt("Enter the first number.");
            let number2 = prompt("Enter the second number.");
            number1 = parseInt(number1);
            number2 = parseInt(number2);
            minimum = min(number1, number2);
            if (minimum === "q") {
                alert("They are equal");
            } else {
                alert("The minimum of the two is " + minimum);
            }
            
        }else {
            alert("Your choice was incorrect")
        }
       
    }
    
})();