// Nothing works
// Make things work as expected for people


/* Pseudocode
----------------*/

//Add New Tasks
//
//  On Button Pressed {
//    Create New List Item {
//      Checkbox
//      Label (Containg description)
//      Text Field (hidden)
//      Edit Button (button.edit)
//      Delete Button (button.delete)
//      In Process Button
//    }
//  }
//
//Edit Exisiting Tasks
//
//  On Edit Button Pressed {
//    IF not in edit mode {
//      Make Edit Button Green
//      Hide Label
//      Change list item class to edit mode
//    } ELSE is in edit mode
//      Make Edit Button Red
//      Save text into label
//      Exit Edit Mode
//    }
//  }

//
//Delete Tasks
//
//  ON Delete Button Pressed  {
//    Remove Item From List
//  }
//
//

//
//Complete Tasks
//
//  ON Checkbox checked {
//    Move Item to Completed Items List
//    Change Class so it shows strikethrough on text
//    Remove Edit button
//  }
//
//
//In Process Tasks
//
//  ON Start button checked {
//    Move Item to In Progress List
//    Change start Button to "stop"/pause button
//  }
//
//  ON Stop button pressed {
//    Return task to normal list
//    Switch Start button to Stop
//  }
//
//
// I think the best way to achieve the different elements is to create a task
// object. This way it can render itself differently via CSS depending on
// the currently assigned class. The Controller will be in JavaScript.
// The Model will be in HTML (since there will be no database/flat file). 
// This project should take a couple hours.