# Birthday Service Kata

###  Exercise:
 We have a BirthdayService that runs every day via a cron job

  It greets customers with has birthday on that day.
  It generates a discount code for them.
  It sends an email to them with the discount code.
  It logs the email sent.

 You work is to write the required tests for this functionality.
 You probably will need to modify the code to make it testable.
 Use different test doubles for the dependencies.

 Start by running the test below and fixing the errors.
 Add assertions to the test that matches the intent of the test.


 Maybe you need to apply some refactorings to make the code testable in line with the Small Safe Steps workshop.

## ITERATION 2 (Always green!)

 Enrich the exercise by adding more tests:

  Ensure that no email is sent to customer not having birthday today
  Make a test to ensure that the service fails gracefully if the email sending fails
  Make a test to ensure that the service fails gracefully if the repository fails


 Ensure the email is sent with the correct message

## How to start

Install dependencies:

```bash
npm install
```

Run the tests. The test framework is [vitest](https://vitest.dev/). Running this script, `vitest` will run and watch for changes.

```bash
npm run test
```

## References

 [La guía definitiva de los dobles de test](https://franiglesias.github.io/test-doubles-guide-1/)

