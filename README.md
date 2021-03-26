# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

------------

### Technical Test Overview
Objective: Create a Pick-up Location input box and apply the styling as per www.rentalcars.com
homepage.

Format: Using any framework you like, implement the following user stories, and provide a link
to a git repo with everything needed to run your example. Quality should be considered as a
default.

You are not limited to any technology so impress us with what you are comfortable with. The
solution would work in all modern browsers.

For brevity, this test is for desktop only, however consideration should be made for a mobile first
approach.

##AC1:
Given I am a visitor to the rentalcars.com homepage
Then I should see a Search Widget
And a text box labelled 'Pick-up Location'
And the styling as per the rentalcars.com homepage.

##AC2:
Given I am on the Search box within the rentalcars.com homepage
Then I should see the placeholder text within the 'Pick Up Location' input box: 'city, airport,
station, region and district...'
AND the styling is as per the rentalcars.com homepage

##AC3:
Given I am on the Search box within the rentalcars.com homepage
When I click/tap into 'Pick Up Location' box
Then a focus state is applied (browser default)

##AC4: AA criteria (optional)
Given I am on the Search box within the rentalcars.com homepage
When I use a screen reader
Then the correct criteria is read out for the 'Pick Up Location' box

Objective: Return raw data/search results but without any styling

##AC1:
Given I am a visitor on the Search Box within the rentalcars.com homepage
When I enter a single alphanumeric character into the pick up location
Then the placeholder text disappears
AND no search results list is displayed

##AC2:
Given I am a visitor on the Search Box within the rentalcars.com homepage
When I enter 2 or more alphanumeric characters into the pick up location
Then I see a list of search results

##AC3:
Given I have entered a matched search term for pick up location on desktop
Then the maximum number of search results displayed is 6

##AC4:
Given I am a visitor on the Search Box within the rentalcars.com homepage
When I enter a search term in the pick up location that is not recognised eg XX
Then I should see the message 'No results found'

##AC5:
Given the search results list is displayed
When I remove the search term leaving only 1 character
Then the search results list no longer displayed
Search endpoint:
https://cors.io/?https://www.rentalcars.com/FTSAutocomplete.do?solrIndex=fts_en&solrRows={
number_of_results_required}&solrTerm={search_term}
Where
{number_of_results_required} is an integer
And
{search_term} is a string
The search endpoint will return a JSON object, you should deduce the format yourself, using the
existing rentalcars.com website as a guide.
