# Steps

## Step-01

- [Install NodeJs](http://nodejs.org/download/)
- `npm install -g ember-cli bower phantomjs`
- `ember new emcli`
- `cd emcli`
- `ember serve`
- In your browser, visit `http://localhost:4200/` to see the app
- In your browser, visit `http://localhost:4200/tests` to see the qunit tests
- Congratulations, you now have your very own ember-cli app!
- It does not do much now, we will get to that next

## Step-02

- Modify index route to add a hardcoded model
	- `subl app/routes/index.js`
- Create integration tests for index
	- `subl tests/integration/index-test.js`
- Create unit tests for index route
	- `tests/integration/index-test.js`
- Note that any file within the `tests` directory or its subfolder that is named
  `*-test.js` will get detected and run
  - See `vendor/ember-cli-test-loader/test-loader.js`
- When running the tests, now you should see entries for:
	- Integration - Index: Main
	- Integration - Index: Colours
	- Unit - IndexRoute: Exists
	- Unit - IndexRoute: Model
	- ... and all test should be passing. If they are not, fix them!
- If you wish to do test driven development:
	- In this sample app, the steps are implementation first,
	  followed by tests
	- For test drien development, simply do this the other wat around
	- Write the tests first, and then implement them
