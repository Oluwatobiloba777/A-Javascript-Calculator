var choice = prompt("Enter Choice: +,-,/,*: ");
var num1 = parseFloat(prompt("Enter First Number: "));
var num2 = parseFloat(prompt("Enter Second number: "));


var result;

if (choice == '+'){
    result = num1 + num2;
} else if (choice == '-'){
    result = num1 - num2;
} else if (choice == '/'){
    result == num1 / num2;
} else if (choice == '*'){
    result = num1 * num2;
} else{
    result = 'Invalid';  
}
alert('The Anwser: ',result)