TODO:

1.Create an angular application (bootstrap with ng-app).
Create a controller and a template.
Initialize the list of repos in the controller.
Display the data on the view as a list of panels where the following is displayed:
	Repo’s full name that is a link to the repo,
	Repo owner’s login ID and avatar,
	Repo’s description.
Output only 10 repos that come first alphabetically, order by full name ascending.

2. Update the application so that the filtering params can be set on the page via inputs.
Default values should populate the inputs on load:
	Filter: empty,
	Sort by name: asc,
	Limit: 10.
Each time any of the values changes, the displayed list updates accordingly.

3. Update the application so that it gets the list of repos via the Github search API.
Add a panel with the search param that will allow to narrow the search request by:
	Maximum repo size,
	Minimum number of forks,
	Minimum number of stars.
Add the “Search” button that will query the data based on the specified parameters.
Create a separate service named “Repository” for this and inject in the controller.
Using $resource get the following related data and add to each repo view:
	Languages,
	Contributors names and avatars.


TO RUN

Open main.html in browser