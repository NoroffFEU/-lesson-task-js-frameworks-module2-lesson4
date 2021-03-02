# JS Frameworks Module 2 Lesson Task 4

Using React Bootstrap components create a registration form with the following fields and validation rules:

-   `name` - required with minimum 4 characters
-   `email` - required with a valid email format
-   `password` - minimum eight characters, at least one letter, one number and one special character. Use a <a href="https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a" target="_blank">regular expression</a>.
-   `confirm password` - must be equal to password
-   `skills` - a multi-select React Select input.

Example array of skills to use: ["HTML", "CSS", "Sass", "JavaScript", "React", "Angular", "Vue", "PHP", "C#", "Wordpress", "MySQL"]

If the form passes validation display a success message ("Your registration was successful", for example) above the form and clear the inputs.
