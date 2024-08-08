# Day 10 

* This script observes the checkbox and for your first click it sets the lastChecked value 
* If your click is checking a box and holding a shift key it will check each checkbox if it is the current checkbox or the lastChecked and then set inBetween equal to true indicating that checkbox is inbetween the ones we need to be checking which in turn checks it off. 

## Fix

* Fixed issue of resetting the checkboxes by implementing a reset button to be able to reset the boxes without refreshing 
* Timeout function is to add a tiny delay to the boxes resetting as them resetting instantly is a bit jarring visually 
