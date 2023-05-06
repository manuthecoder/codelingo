export const data = [
  {
    type: "chat",
    prompt: "Which of these defines a variable that can be reassigned?",
    answer: ["let varName = 2", "const varName = 2", "var varName = 2"],
    correctAnswer: 2,
  },
  {
    type: "build",
    prompt: "How do you define a constant variable, `foo`?",
    choices: ["var", "const", "foo", "=", '"example value"'],
    correctOrder: [1, 2, 3, 4],
  },
  {
    type: "chat",
    prompt: "Which of the following is a string?",
    answer: ["123", '"hello"', "true"],
    correctAnswer: 1,
  },
  {
    type: "build",
    prompt: "Create a variable called name and assign it the value John.",
    choices: ["let", "const", "name", "=", '"John"'],
    correctOrder: [0, 2, 3, 1],
  },
  {
    type: "build",
    prompt: "Create a constant variable called age and assign it the value 30.",
    choices: ["var", "const", "age", "=", "30"],
    correctOrder: [1, 2, 3, 4],
  },
  {
    type: "chat",
    prompt: "What is the difference between == and ===?",
    answer: [
      "== checks for value equality, while === checks for value and type equality.",
      "== checks for value and type equality, while === checks for value equality.",
      "== and === are the same.",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt: "What does the typeof operator return?",
    answer: [
      "The data type of a variable",
      "The value of a variable",
      "The name of a variable",
    ],
    correctAnswer: 0,
  },
  {
    type: "build",
    prompt:
      "Create an array called fruits with the values apple, banana, and orange.",
    choices: [
      "const",
      "fruits",
      "=",
      "[",
      '"apple"',
      ",",
      '"banana"',
      ",",
      '"orange"',
      "]",
      ";",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8],
  },
  {
    type: "chat",
    prompt: "What does the push method do?",
    answer: [
      "Adds an element to the beginning of an array",
      "Adds an element to the end of an array",
      "Removes the last element of an array",
    ],
    correctAnswer: 1,
  },
  {
    type: "chat",
    prompt: "What is the output of the following code? console.log(2 + '2')",
    answer: ["'22'", "4", "NaN"],
    correctAnswer: 0,
  },
  {
    type: "build",
    prompt: "Create an object called person with properties name and age.",
    choices: [
      "const",
      "person",
      "=",
      "{",
      "name",
      ":",
      '"John"',
      ",",
      "age",
      ":",
      "30",
      "}",
      ";",
    ],
    correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    type: "chat",
    prompt: "What is the difference between let and var?",
    answer: [
      "let has block scope, while var has function scope.",
      "var has block scope, while let has function scope.",
      "let and var are the same.",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt: "What does the pop method do?",
    answer: [
      "Removes an element from the beginning of an array",
      "Removes an element from the end of an array",
      "Adds an element to the end of an array",
    ],
    correctAnswer: 1,
  },
  {
    type: "chat",
    prompt: "What does the typeof operator return for null?",
    answer: ["'object'", "'null'", "'undefined'"],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt:
      "What is the output of the following code? `console.log(Math.max(4, 8, 2, 6))`",
    answer: ["4", "8", "2", "6"],
    correctAnswer: 1,
  },
  {
    type: "chat",
    prompt: "What is the difference between `null` and `undefined`?",
    answer: [
      "`null` is explicitly set by the programmer to indicate no value, while `undefined` means that a variable has not been assigned a value.",
      "`undefined` is explicitly set by the programmer to indicate no value, while `null` means that a variable has not been assigned a value.",
      "`null` and `undefined` are the same.",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt: "What is the purpose of the `break` statement in a loop?",
    answer: [
      "To exit the loop immediately",
      "To skip the current iteration of the loop and move on to the next",
      "To jump to a specific point in the loop",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt: "What is the difference between a `for` loop and a `while` loop?",
    answer: [
      "A `for` loop is used when you know how many times you want to iterate, while a `while` loop is used when you want to iterate until a specific condition is met.",
      "A `while` loop is used when you know how many times you want to iterate, while a `for` loop is used when you want to iterate until a specific condition is met.",
      "`for` and `while` loops are the same.",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt:
      "Which of the following is not a way to access an object's property?",
    answer: [
      "object.propertyName",
      "object['propertyName']",
      "object.getPropertyName()",
      "object.propertyName()",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt: "What is the syntax for adding a new property to an object?",
    answer: [
      "object.propertyName = value",
      "object['propertyName'] = value",
      "object.setProperty('propertyName', value)",
      "object.newProperty = value",
    ],
    correctAnswer: 3,
  },
  {
    type: "chat",
    prompt:
      "What is the difference between an object's `hasOwnProperty` method and the `in` operator?",
    answer: [
      "`hasOwnProperty` checks if the property exists in the object's prototype chain, while `in` operator checks if the property exists in the object itself",
      "`in` operator checks if the property exists in the object's prototype chain, while `hasOwnProperty` checks if the property exists in the object itself",
      "`hasOwnProperty` and `in` operator are the same",
      "neither `hasOwnProperty` nor `in` operator can be used to check if a property exists in an object",
    ],
    correctAnswer: 1,
  },
  {
    type: "chat",
    prompt: "Which of the following is a comparison operator?",
    answer: ["==", "=", "+", "-"],
    correctAnswer: 0,
  },
  {
    type: "build",
    prompt:
      "How do you declare a function named 'add' that takes two parameters, 'a' and 'b'?",
    choices: ["function", "add", "(", "a", ",", "b", ")", "{", "}", "return"],
    correctOrder: [0, 1, 2, 3, 4, 5, 7, 8, 9],
  },
  {
    type: "chat",
    prompt:
      "Which of the following is NOT a primitive data type in JavaScript?",
    answer: ["number", "boolean", "string", "array"],
    correctAnswer: 3,
  },
  {
    type: "chat",
    prompt:
      "What is the correct syntax to create an array named 'myArray' with 3 elements, '1', '2', and '3'?",
    answer: [
      "var myArray = [1,2,3]",
      "var myArray = (1,2,3)",
      "var myArray = {1,2,3}",
      'var myArray = "1',
      "2",
      '3"',
    ],
    correctAnswer: 0,
  },
  {
    type: "build",
    prompt:
      "How do you write a conditional statement that checks if a variable 'x' is greater than 10 and less than or equal to 20?",
    choices: ["if", "(", "x", ">", "10", "&&", "x", "<=", "20", ")", "{", "}"],
    correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  },
  {
    type: "chat",
    prompt: "Which of the following is a loop statement?",
    answer: ["if", "for", "while", "switch"],
    correctAnswer: 1,
  },
  {
    type: "build",
    prompt:
      "How do you create a new string by concatenating 'hello' and 'world'?",
    choices: ["var", "newString", "=", '"hello"', "+", '"world"', ";"],
    correctOrder: [0, 1, 2, 3, 4, 5, 6],
  },
  {
    type: "chat",
    prompt: "What is the purpose of the 'console.log()' method in JavaScript?",
    answer: [
      "to output a value to the console",
      "to declare a variable",
      "to create a loop",
      "to define a function",
    ],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt:
      "Which of the following is a method used to remove the last element of an array?",
    answer: [".removeLast()", ".pop()", ".shift()", ".slice()"],
    correctAnswer: 1,
  },
  {
    type: "chat",
    prompt:
      "Which of the following is a JavaScript operator used to assign a value to a variable?",
    answer: ["=", "==", "===", "=>"],
    correctAnswer: 0,
  },
  {
    type: "chat",
    prompt: "What is the purpose of the 'Math.random()' method in JavaScript?",
    answer: [
      "to generate a random number between 0 and 1",
      "to generate a random integer between 0 and 100",
      "to generate a random number between 0 and a specified number",
      "to generate a random integer between two specified numbers",
    ],
    correctAnswer: 0,
  },
];
