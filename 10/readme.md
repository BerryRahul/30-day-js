Day 10 

* This script observes the checkbox and for your first click it sets the lastChecked value 
* If your click is checking a box and holding a shift key it will check each checkbox if it is the current checkbox or the lastChecked and then set inBetween equal to true indicating that checkbox is inbetween the ones we need to be checking which in turn checks it off. 

* Currently I don't like having refreshing the page to reset the checkbox, so I had and event listener observe a click anywhere on the table and if there is more then 2 boxes checked reset all the boxes. 
* However, the issue with this is that you cannot use the checkbox normally and check more then 2 boxes otherwise it will reset 
* Instead I should Implement a Button That would reset the checkboxes instead 