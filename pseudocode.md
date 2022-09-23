Resources
-Bootstrap: <https://getbootstrap.com/>

1. Display current date at top as text, centered:
    Example: Monday, December 13th
    
    moment.now = function () {
    return +new Date();
}
//US local format
var a = new Date('1/1/2016'); 
//"Fri Jan 01 2016 00:00:00 GMT-0600 (Central Standard Time)"

    center all text
thick black line separates header from scheduler

2. scroll down
    show rows with three sections:
    time----space for text input-------save button with floppy disk icon

3.  show time blocks for standard business hours
    9am - 5pm

4. each time block is color coded for past, present, or future
    page must pull the current time according to time zone and determine which hours are past, present, future.
    blocks' color should match accordingly
        gray = past
        red = current
        green = future

    Compare moment hour to 

5. click on a time block to enter an event
    add event and text

6.  click save button for that time blockd
    add event to screen
    local storage

7. text for event is saved in local storage 

8.  when page is refreshed, events remain populated on page. 