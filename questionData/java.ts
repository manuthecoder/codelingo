export const data = [
  {
    type: "chat",
    prompt: "Which of these defines a variable that can be reassigned?",
    answer: ["let foo = 2", "const foo = 2", "var foo = 2"],
    correctAnswer: 2,
  },
  {
    type: "build",
    prompt: "How do you define a constant variable, `foo`?",
    choices: ["var", "const", "foo", "=", '"example value"'],
    correctOrder: [1, 2, 3, 4],
  },
];
