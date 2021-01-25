(function(){
    let weight = prompt("Enter your weight in kg");
    let height = prompt("Enter your height in meter");
    weight = parseInt(weight);
    height = parseInt(height);

    let bmi = weight / (height * height);

    bmi = Number(bmi.toFixed(1));

    console.log("Your Bmi is : " + bmi);
    if (bmi < 18.5)
        console.log("Your are : Underweight");
    else if (bmi >= 18.5 && bmi <= 24.9)
        console.log("Your are : Normal");
    else if (bmi >= 25.0 && bmi <= 29.9)
        console.log("Your are : Overweight");
    else if (bmi >= 30.0)
        console.log("Your are : Obese");
    
})();