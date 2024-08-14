Notes for day 6 
* When fetching from a json to an array convert it from a promise to a .json then push it into 
the array using the spread operator to avoid nesting

* To find matches to an input, filter the array by using the regex operation 'g' which is global so it will search the entire string if it matches your input 'bos' => 'boston'

* As well as 'i' for inclusive to avoid uppercase and lowercase specificity 

* To have the results display while you're typing instead having to click off, observe 
the 'keyup' event listener instead of 'change' 

* To display the results map the results from the findMatches function and create new span 
elements containing the values and assign them to the suggestions variable 

* This process will be more efficiently done in react.js so possibly refactor this project as react code in the future 

* Make sure any additional elements js creates for the html and formatted correctly in css 
