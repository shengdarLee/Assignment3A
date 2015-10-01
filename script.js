//COMM644
//Assinment3, Part 1
//-----------------------------------------------------------------
//Practice with Arrays (5 points)
// STEP 1
/*
1.	Create a string array that contains your five favorite movies. Then, use the console to display the second movie in your array.
*/
/*
        var movies = ["The Sting", "The Music Man", "movie 3", "movie 4", "movie 5"];
        console.log(movies[1]);
*/

// STEP 2
/*
2.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Then, use the console to display the first movie in your array.
*/
/*
        var movies = new Array(5);
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "movie 3";
        movies[3] = "movie 4";
        movies[4] = "movie 5";
        console.log(movies[0]);
*/

// STEP 3
/*
3.	Add a new movie into the 3rd position within your array. Then, use the console to display the length of the array. You should now have 6 total movies stored in the array.*/
/*
        var movies = ["The Sting", "The Music Man", "new movies 3", "Sue", "Mark", "Joan"];
        console.log(movies.length);
*/

// STEP 4
/*
4.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 5 total movies in your array. Now, use the delete operator to remove the first movie in the array. Use the console to display the contents of the array.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "movie 3";
        movies[3] = "movie 4";
        movies[4] = "movie 5";
        delete movies[0];
        console.log(movies);
*/

// STEP 5
/*
5.	Declare an array called movies. Then, assign one of your favorite movies to each index in the array until you have 7 total movies in your array. Now, use a for loop to iterate through the array and display each movie within the console window.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "movie 3";
        movies[3] = "movie 4";
        movies[4] = "movie 5";
        movies[5] = "movie 6";
        movies[6] = "movie 7";
        for (var i = 0; i < movies.length; i++) {
            console.log(movies[i]);
        }
*/

// STEP 6
/*
6.	Now, use a for-in loop to iterate through the array and display each movie within the console window.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "movie 3";
        movies[3] = "movie 4";
        movies[4] = "movie 5";
        movies[5] = "movie 6";
        movies[6] = "movie 7";
        for (var x in movies) {
            console.log(movies[x]);
        }
*/

// STEP 7
/*
7.	Using the for-in loop to iterate through the array, display each movie within the console window in a sorted view.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "Movie 3";
        movies[3] = "Movie 4";
        movies[4] = "Movie 5";
        movies[5] = "Movie 6";
        movies[6] = "Movie 7";
        movies.sort();
        for (var x in movies) {
            console.log(movies[x]);
        }
*/

// STEP 8
/*
8.	Under the previous movies array, create a new array called leastFavMovies. Populate the array with the 3 movies that you regret watching. Display both arrays within the console window so that it’s formatted to look like this (note the spacing, you must include that too):
Movies I like:

Movie 1
Movie 2
Movie 3
…

Movies I regret watching:

Movie 1
Movie 2
Movie 3
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "Movie 3";
        movies[3] = "Movie 4";
        movies[4] = "Movie 5";
        movies[5] = "Movie 6";
        movies[6] = "Movie 7";
        console.log("Movies I like:\n\n\n");
        for (var x in movies) {
            console.log(movies[x]);
        }
        var leastFavMovies = [];
        leastFavMovies[0] = "leastFavMovies 1";
        leastFavMovies[1] = "leastFavMovies 2";
        leastFavMovies[2] = "leastFavMovies 3";
        console.log("\n\nMovies I regret watching:\n\n\n");
        for (var x in leastFavMovies) {
            console.log(leastFavMovies[x]);
        }
*/

// STEP 9
/*
9.	Now, use the concat() method to merge the two arrays together into a single array called movies. Use the console window to display the list in reverse sorted order.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "Movie 3";
        movies[3] = "Movie 4";
        movies[4] = "Movie 5";
        movies[5] = "Movie 6";
        movies[6] = "Movie 7";

        var leastFavMovies = [];
        leastFavMovies[0] = "leastFavMovies 1";
        leastFavMovies[1] = "leastFavMovies 2";
        leastFavMovies[2] = "leastFavMovies 3";

        movies = movies.concat(leastFavMovies);
        console.log(movies.reverse());
*/

// STEP 10
/*
10.	Return just the last item in the array and display it within the console window.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "Movie 3";
        movies[3] = "Movie 4";
        movies[4] = "Movie 5";
        movies[5] = "Movie 6";
        movies[6] = "Movie 7";

        var leastFavMovies = [];
        leastFavMovies[0] = "leastFavMovies 1";
        leastFavMovies[1] = "leastFavMovies 2";
        leastFavMovies[2] = "leastFavMovies 3";
        
        movies = movies.concat(leastFavMovies);
        console.log(movies.pop());
*/

// STEP 11
/*
11.	Remove the previous method and this time return just the first item in the array and display it within the console window.
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "Movie 3";
        movies[3] = "Movie 4";
        movies[4] = "Movie 5";
        movies[5] = "Movie 6";
        movies[6] = "Movie 7";

        var leastFavMovies = [];
        leastFavMovies[0] = "leastFavMovies 1";
        leastFavMovies[1] = "leastFavMovies 2";
        leastFavMovies[2] = "leastFavMovies 3";

        movies = movies.concat(leastFavMovies);
        console.log(movies.shift());
*/

// STEP 12
/*
12.	Programmatically retrieve the movies in your array that you do not like and return their indices. Then, using those indices, programmatically add movies that you do like. 
*/
/*
        var movies = [];
        movies[0] = "The Sting";
        movies[1] = "The Music Man";
        movies[2] = "Movie 3";
        movies[3] = "Movie 4";
        movies[4] = "Movie 5";
        movies[5] = "Movie 6";
        movies[6] = "Movie 7";

        var leastFavMovies = [];
        leastFavMovies[0] = "leastFavMovies 1";
        leastFavMovies[1] = "leastFavMovies 2";
        leastFavMovies[2] = "leastFavMovies 3";

        movies = movies.concat(leastFavMovies);

        var newFavMovies = [];
        newFavMovies[0] = "newFavMovies 1";
        newFavMovies[1] = "newFavMovies 2";
        newFavMovies[2] = "newFavMovies 3";

        for (var i in leastFavMovies) {
            index = movies.indexOf(leastFavMovies[i]);
            movies.splice(index, 1, newFavMovies[i]);
        }
        
            for (var j in movies) {
                console.log(movies[j]);
            }
*/

//STEP 13
/*
13.	Create two associative arrays called employee1 and employee2 respectively. Each array should have an employeeid, name, title, department, and whether or not the employee is a current employee of the company. Now, add both of those associative arrays to a new array called employees. Then, programmatically display the name of the second employee within a console window.
*/
/*
        var employee1 = [];
        employee1["id"] = 11;
        employee1["name"] = "Fred";
        employee1["title"] = "Engineer";
        employee1["department"] = "IT";
        employee1["isCurrent"] = true;

        var employee2 = [];
        employee2["id"] = 12;
        employee2["name"] = "Sarah";
        employee2["title"] = "Clerk";
        employee2["department"] = "Personel";
        employee2["isCurrent"] = true;

        employees = [employee1, employee2];
        console.log(employees[1]["name"]);
*/

// STEP 14
/*
14.	Using the above code, modify the code slightly so that you’re using a loop to loop through the array and printing out the names of both employees.
*/
/*
        var employee1 = [];
        employee1["id"] = 11;
        employee1["name"] = "Fred";
        employee1["title"] = "Engineer";
        employee1["department"] = "IT";
        employee1["isCurrent"] = true;

        var employee2 = [];
        employee2["id"] = 12;
        employee2["name"] = "Sarah";
        employee2["title"] = "Clerk";
        employee2["department"] = "Personel";
        employee2["isCurrent"] = true;

        employees = [employee1, employee2];
        for (var index in employees) {
        console.log(employees[index]["name"]);
        }
*/

// STEP 15
/*
15.	And to really tick you off, add a third employee and set his employment status to false. Then, programmatically loop through the array but don’t display an employee if they aren’t a current employee of the company. Basically, only the first two should appear in the console window.
*/
/*
        var employee1 = [];
        employee1["id"] = 11;
        employee1["name"] = "Fred";
        employee1["title"] = "Engineer";
        employee1["department"] = "IT";
        employee1["isCurrent"] = true;

        var employee2 = [];
        employee2["id"] = 12;
        employee2["name"] = "Sarah";
        employee2["title"] = "Clerk";
        employee2["department"] = "Personel";
        employee2["isCurrent"] = true;

        var employee3 = [];
        employee3["id"] = 13;
        employee3["name"] = "Paul";
        employee3["title"] = "Manager";
        employee3["department"] = "Procurement";
        employee3["isCurrent"] = false;

        employees = [employee1, employee2, employee3];
        for (var index in employees) {
        if (employees[index]["isCurrent"]) {
            console.log(employees[index]["name"]);
        }
        }
*/

// STEP 16
/*
16.	Create a multi-dimensional array that contains your 5 favorite movies and their ranking from 1-5. The array should look something like this: 
movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
Now, loop through the array and filter out and display only the movie names. You must use the filter() method and you’ll need to filter out the names by their primitive data type.
*/
/*
        var movies = [["Movie 1", 1], ["Movie 2", 2], ["Movie 3", 3], ["Movie 4", 4], ["Movie 5", 5]];
        for (var index in movies) {
        var movieName = movies[index].filter(function(item) {
            return typeof item == "string";
        });
        console.log(movieName);
        }
*/

//-----------------------------------------------------------------
//Practice with Functions (5 points)

// STEP 1
/*
1.	Create an anonymous function named displayMessage that accepts one parameter. Within the function write a statement that prints out the value of the parameter out into the console window. Now, call the function and pass in a string as the parameter in the function call.
*/
/*
        var displayMessage = function (par) {
           console.log(par);
        }
        displayMessage ("anonymous!");
*/

// STEP 2
/*
2.	Create a named function named calculate that accepts two parameters. Within the function write a statement that returns the modulus of the first and second parameters. Now, call the function and pass in two numbers as parameters into the function call. Make sure to display the result within the console window.
*/
/*        function calculate(number1, number2) {
            var remainder = number1 % number2;
            return remainder;
        } 
        console.log(calculate(57, 31));*/

// STEP 3
/*
3.	Create a string array called employees and populate the array with several employee names. Then, create an anonymous function called showEmployee. The function should accept a parameter. Call this function, passing in the employees array into the function as a parameter. Make sure to display the result in the console window. Within the function, loop through the passed in array and display the result so that it looks exactly like this in the console window:

Employees: 

ZAK 
JESSICA 
MARK 
FRED 
SALLY
*/
/*
        var employees = new Array("Zak", "Fred", "Sally", "Jessica", "John", "Mike", "Paul");
        var showEmployee = function (names) {
           console.log("Employees:\n\n");
            for (var index in names) {
                console.log(names[index]);
            }
        }
        showEmployee (employees);
*/

//COMM644
//Assinment3, Part 2558

//The Rock, Paper, Scissors Game (10 points)

/*
        var userChoice = prompt("Would you like rock, paper, or scissors?");
        userChoice = userChoice.toLowerCase();

        if (!(userChoice == "rock" || userChoice == "paper" || userChoice == "scissors")) {
            alert("You can only choose rock, paper, or scissors, please try again!");
        }

        var computerChoice = Math.random();

        if (computerChoice <= 0.3333) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.6666) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }

        if (userChoice == computerChoice) {
            alert("The result is a tie!");
        } else if (userChoice == "rock") {
            if (computerChoice == "scissors") {
                alert("The computer got scissors, you win!");
            } else {
                alert("The computer got paper, you lose!");   
            }
        } else if (userChoice == "paper") {
            if (computerChoice == "paperrock") {
                alert("The computer got rock, you win!");
            } else {
                alert("The computer got scissors, you lose!");   
            }
        } else if (userChoice == "scissors") {
            if (computerChoice == "paper") {
                alert("The computer got paper, you win!");
            } else {
                alert("The computer got rock, you lose!");   
            } 
        }
*/

//The Basic Calculator (10 points)

/*
        var num1 = prompt("Pleaae enter the first number.");
        var num2 = prompt("Please enter the second number.");
        var operation = prompt("Which operation would you like to perform (add, subtract, multiply, or divide)?");
        num1 = Number(num1);
        num2 = Number(num2);
        operation = operation.toLowerCase();
        alert(calculate(num1, num2, operation));

        function calculate(num1, num2, operation) {
        switch (operation) {
            case "add":
                return num1 + num2;
                break;
            case "subtract":
                return num1 - num2;
                break;					
            case "multiply":
                return num1 * num2;
                break;					
            case "divide":
                return num1 / num2;
                break;					
            default:
                alert("You didn't correctly enter either add, subtract, multiply, or divide. Please try again!");
        }
        }
*/

//Death by JavaScript (4 points each for 20 points total)

// STEP 1
/*
1.	Write a JavaScript function that when called, returns a passed in string with letters in alphabetical order. Assume punctuation and number symbols are not included in the passed-in string.

Sample Data and Output
Example string: 'webmaster' 
Expected Output: 'abeemrstw'
*/
/*
        function sortString(inputString) {
            var charArray = inputString.split("");
            charArray.sort();
            var outputString = "";
            for (var x in charArray) {
                outputString = outputString + charArray[x];
            }
            return outputString;
        }

        console.log(sortString("webmaster"));
*/

// STEP 2
/*
2.	Write a JavaScript function that accepts a string as a parameter and when called, converts the first letter of each word of the string to upper case characters and return it.

Sample Data and Output
Example string: 'the quick brown fox' 
Expected Output: 'The Quick Brown Fox'
*/
/*
        function capFirstChar (inputString) {
            var wordArray = inputString.split(" ");
            var outputString = "";
            
            for (var x in wordArray) {
                wordArray[x] = wordArray[x].charAt(0).toUpperCase() + wordArray[x].slice(1);
                outputString = outputString + wordArray[x] + " ";
            }
            return outputString;
        }
        console.log(capFirstChar('the quick brown fox'));
*/

// STEP 3
/*
3.	Write a JavaScript function that accepts a string as a parameter and when called, counts the number of vowels within the string and returns that number.

Sample Data and Output
Example string: 'The quick brown fox' 
Expected Output: 5
*/
/*        var inputString = "The Quick Brown Fox";
        function countVowels() {
            var vowelCount = 0;
            
            for (var i = 0; i < inputString.length; i++) {
                charAtI = inputString.charAt(i);
                if (charAtI == 'a' || charAtI == 'e' || charAtI == 'i' || charAtI == 'o' || charAtI == 'u') {
                    vowelCount ++;
                }
            }
                     return vowelCount;
        }

                        console.log(countVowels());
  */  

// STEP 4
/*
4.	Write a JavaScript function that when called, generates a string id (specified length) of 8 random characters and returns those characters as a string. This is a great application to learn for making password generator-type applications.

Sample Data and Output
Expected Output: RCv1SBUC or PmJkc2Y2 or nIi5L0FA
*/
/*
        function generate() {
            var passCode = '';
            var singleCode = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            for ( var i = 0; i <= 7; i++) {
            var index = Math.floor(Math.random() * 62);
            passCode = passCode.concat(singleCode[index]);
            } 
            return passCode;
        } 
       console.log(generate());
*/

// STEP 5
/*
5.	Write a JavaScript function that accepts a list of country names as input and when called, returns the longest country name as the output.

Sample Data and Output
Sample function: Longest_Country_Name(["Australia", "Germany", "United States of America"])
Expected output: "United States of America"
*/
        var countryNames = [];
/*

        function Longest_Country_Name(countryNames) {
            var index = 0;
            var maxCountryNameLength = countryNames[0].length;
            for (var i = 1; i < countryNames.length; i++) {
                countryNameLength = countryNames[i].length;
                if (countryNameLength > maxCountryNameLength) {
                    index = i;
                    maxCountryNameLength = countryNameLength;
                }             
            }
              return countryNames[index];           
        }

        console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));
*/

