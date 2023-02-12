// STEP 1 Convert the following highlighted identifiers to Camel Case notation:

// let some_month
// let someMonth;

// function the Month()
// function theMonth()

// let current-month
// let currentMonth;

// let summer_month
// let summerMonth;

// let MyLibrary-function
// let myLibraryFunction;

// STEP 2 Give me an example of a:

// numeric literal expression 45

// string literal expression 'My name is Paulina'

// a Boolean literal expression true

// and a null literal expression null



// STEP 3 Give me two examples of complex / variable expressions.

// let result = (2 - 40) * 3;

// STEP 4  Declare (but do not assign) 9 variables for the following identifiers: First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You. Use Camel Casing and Hungarian Notation when naming your identifiers.

// let firstName;
// let strFirstName;

// let lastName;
// let strLastName;

// let address;
// let strAdress;

// let city;
// let strCity;

// let state;
// let strState;

// let zipCode;
// let strZipCode;

// let myAge;
// let numMyAge;

// let referralSource;
// let strReferralSource;

// let mayWeContactYou;
// let blnmayWeContactYou;



// STEP 5  Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.

// let firstName = 'Paulina';
// let myAge = 42;
// let city = 'San Diego';


// let firstName;
// firstName = 'Paulina';

// let myAge;
// myAge = 42;

// let city;
// city = 'San Diego';

// let firstName = 'Paulina', myAge = 42, city = 'San Diego';



// STEP 6  Create a variable.
// Add a number and a string and display the coerced result in the browser’s console window.

// let myAge = 42;

// console.log(`Paulina is ${myAge} years old`);

// // STEP 7 Create two variables.
// For the first variable, add a Boolean and a string and display the coerced result.

// let myName42 = 'Paulina is 42 ' + true;
// console.log(myName42);

// console.log(`${myName} is 42 ${isPaulina42}`);

// For the second variable, add a number and a Boolean and display the coerced result.

// let numBln = 2 + true;
// console.log(numBln);



// STEP 8 Is the following string literal valid? If not, how would you fix it?

// let someString = `Who once said, 'Only two things are infinite, the universe and human stupidity,' and I'm not sure about the former.`
// console.log(someString)


// STEP 9 Create a variable that produces a null value in the console window.
// Then, create a variable that produces an undefined value in the console window.
// let nullVar = null;
// console.log(nullVar);


// STEP 10 Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
// let myName = 'Paulina';
// console.log(typeof myName);

// let num = 1;
// console.log(typeof num);

// let isPaulina = true;
// console.log(typeof isPaulina);

// let myArray = ['Paulina', 'Amanda', 'Clara'];
// console.log(typeof myArray);

// let myVar;
// console.log(typeof myVar);


// STEP 11 Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows:

// Hello Zak Ruvalcaba, welcome to the JavaScript class!

// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.
// Substitute my name for your name. Although not necessary in practice, I want you to use 2 concatenation operators to construct this string of text. One after the text “Hello” and a second one after your name and before the comma.

// alert('Hello Paulina Segovia' + ', welcome to the JavaScript class!');



// STEP 12 Declare a variable called name and set it equal to your name.
// Substitute your name in the previous alert string with the variable instead.

// let myName = 'Paulina Segovia';
// alert(`Hello ${myName}, welcome to the JavaScript class!`);


// STEP 13 Declare a variable called course and set it equal to “JavaScript”.
// Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.

// let myName = 'Paulina Segovia';
// let course = 'Javascript';
// alert(`Hello ${myName}, welcome to the ${course} class!`);



// STEP 14 Rework the above string so that a line break is added right before the word “Welcome”. Your alert box should display as follows:

// Hello Zak Ruvalcaba.
// Welcome to the JavaScript class!

// let myName = 'Paulina Segovia';
// let course = 'Javascript';
// alert(`Hello ${myName}.\nWelcome to the ${course} class!`);


// STEP 15 Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable.

// let myName = prompt('Please, enter your name');
// let course = 'Javascript';
// alert(`Hello ${myName}.\nWelcome to the ${course} class!`);


// STEP 16 Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
 

// let myName = prompt('Please, enter your name');
// let course = prompt('What class are you taking?');
// alert(`Hello ${myName}.\nWelcome to the ${course} class!`);


// STEP 17 Declare a variable called x and assign it a value of 10.
// Declare a variable called y and assign it a value of 20.
// Display the sum of those two numbers in the console window.

// let x = 10;
// let y = 20;
// console.log(x + y);


// STEP 18 Declare a variable called x and assign it a value of 20.
// Add and assign 20 to that variable and display the result in the console window.
// The result should be 40.

// let x = 20;
// x+= 20;
// console.log(x);


// STEP 19 Declare a variable called x and assign it a value of 20.
// Multiply and assign 5 to that variable and display the result in the console window.
// The result should be 100.

// let x = 20;
// x*=5
// console.log(x);


// STEP 20 Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.
// Divide and assign 1 to that variable and display the result in the console window.
// The result should be 2. If you got 6.66 try again.


// let a = (20 % 3);
// a/=1;
// console.log(a);

// STEP 21 Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.

// let x = 3 + 2;
// let y = 10;
// console.log(x < y || x === y);


// STEP 22 Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.

// let x = 3 * 5;
// let y = 10 ;
// console.log(x > y && x === y);