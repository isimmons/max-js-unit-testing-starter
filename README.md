# JS-unit-testing-starter

From the course on Academind but modified to my opinions

# refactoring the form submit

I pretty much followed the course for splitting up the form submit function. In a real world app I think the whole thing needs to be rewritten. I should have a validation function that takes the formData and returns a validation object containing form and field errors. From there that might be split up further. But this is just demo and playing around type stuff to practice splitting up functions for testing to keep them simple and single responsiblity.

I'll refactor all of it later in typescript with zod for validation. Focusing on basic unit testing for now.

# integration/interaction testing

When we test the cleanNumbers function, even though it calls 3 other functions that have already been tested, it can be called an integration or interaction test. It tests the interaction of cleanNumbers with each of those other functions. Our test should be written in such a way as to only test the correct input and output to cleanNumbers though. The test is for the 1 responsibility that cleanNumbers has. Everything else is implimentation knowlege which is something our test should know nothing about.

# SRP thoughts

I want to write some thoughts on SRP (Single Responsibility Principal) and how it applies to unit testing. For now, just a couple of off the top thoughts.

1. The goal here is not to make the project up of single line functions (silly).
2. Even the most complext and hundreds of lines long class/component can and often does have only one responsibility, as it should.
3. Thinking in SRP, our cleanNumbers function should not be both validating and constructing validation result text and applying that text to the DOM all as separate functions just for the sake of SRP. Starting in our formSubmitHandler we here is the logic and how I think it should be correctly split up.

- get the form data
- validate the form data (return validation obj containing success/failure and errors object if failure)
- output errors if failure or update dom, redirect, or success toast if success to let the user know it was a success or failure
  3 logic responsibilies = 3 functions here.
  Then validation can if needs be, split up into multiple validation functions

Of course we get all this goodness when using zod for schema validation and if we want to unit test our validation function it's self we can use one of several packages to mock a zod validation [zod mocking](https://zod.dev/?id=mocking)
