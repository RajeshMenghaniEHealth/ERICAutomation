var Data = require("Data");
function GeneralEvents_OnUnexpectedWindow(Sender, Window, LogParams)
{
  Log.Picture(Window, "Image of the unexpected window", "", pmHigher);
  exestatus = false;
}

function enterEditText(searchProcess, findObject, textToEnter,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find("Name", findObject, 1000);
  
  
if  (textToEnter === null || textToEnter === "" || textToEnter === undefined) {
  Log.Message("enterEditText","The data is blank, No value is entered in the object "+ findObject);      
  
	} 
else {
if (control.Exists) {
		control.click();
    control.Keys("^a");
    //aqUtils.Delay ("5000", "Wait to enter data");
		control.Keys(textToEnter);
    Log.CheckPoint("The data  '"+textToEnter+"' is entered in the object "+ findObject);  
	} 
  else {
		Log.Error("enterEditText","The object was not found. enterEditText function. object: " + findObject);
    exestatus = false;
   
	}
   	
 
	}
}

else {
  Log.Message("enterEditText","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
    
	  
} 

// enterEditText
//******************************************************************************************//
//******************************************************************************************//
function buttonClick(searchProcess, propertyName, findObject,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find(propertyName, findObject, 1000);
  
  if  (findObject === null || findObject === "" || findObject === undefined) {
  Log.Message("buttonClick","The data is blank, the object is not clicked"+ findObject);      
  
	} 
  else {
	if (control.Exists) {
    control.HoverMouse();
		control.click();
     Log.CheckPoint("Button '"+ findObject+"' is clicked."); 
	} else {
		Log.Error("buttonClick","The object was not found. buttonClick function. object: " + findObject);
    exestatus = false;
	}
  }
 
  }

else {
  Log.Message("buttonClick","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
   
} // buttonClick
//******************************************************************************************//
//******************************************************************************************//
function objectFocusClick(searchProcess, propertyName, findObject,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) {
		control.focus();
		control.click();
     Log.CheckPoint("Button is focused on '"+ findObject+"' and  clicked."); 
	} else {
		Log.Error("objectFocusClick","The object was not found. objectHover function. object: " + findObject);
    exestatus = false;
	}

  }

else {
  Log.Message("objectFocusClick","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;  
  
  
} // objectFocusClick
//******************************************************************************************//
//******************************************************************************************//
function waitForObject(searchProcess, findObject, timeOut,exestatus) {

if (equal(exestatus,true)) {
      // wait for an object to appear on screen  
      retCode = false;
      loopTime = 0;
  
      while (!retCode.Exists && loopTime < timeOut) {
        retCode = searchProcess.Find("Name", findObject, 1000);
        aqUtils.Delay(1000);
        loopTime = loopTime + 1;
      } // while
  
      if (retCode.Exists) {
        Log.Message("waitForObject","Found object: "+ retCode.FullName);
        return true;
      } else {
        Log.Error("waitForObject","The object was not found. waitForObject function. Object: " + findObject);
       return false;
      }  
  }

else {
  Log.Message("waitForObject","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
 
          
} // waitForObject
//******************************************************************************************//
//******************************************************************************************//
function waitForObjectNotVisible(searchProcess, findObject, timeOut,exestatus) {

if (equal(exestatus,true)) {

// wait for an object to no longer exist on the screen
  
	retCode = true;
	loopTime = 0;
  
	while (retCode.Exists && loopTime < timeOut) {
		retCode = searchProcess.Find("Name", findObject, 1000);
		aqUtils.Delay(1000);
		loopTime = loopTime + 1;
	} // while
  
	if (retCode.Exists) {
		Log.Error("waitForObjectNotVisible",findObject + " not closed within timeout - waitForObjectNotVisible function.");
    exestatus = false;
	}	

    }

else {
  Log.Message("waitForObjectNotVisible","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;   
   
     
} // waitForObjectNotVisible
//******************************************************************************************//
//******************************************************************************************//
function getObjectProperty(vBaseObject, vFindProperty, vFindText, vGetProperty,exestatus) {

if (equal(exestatus,true)) {

// Gets a property value for a searched object
  try {
    var vFoundObject = vBaseObject.Find(vFindProperty, vFindText, 1000);
  } catch(err) {
    throw "object not found. Error: " + err;
  }
  var vFoundText = aqObject.GetPropertyValue(vFoundObject, vGetProperty);
  return vFoundText;
  }

else {
  Log.Message("getObjectProperty","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
   
  
} // getObjectProperty
//******************************************************************************************//
//******************************************************************************************//
function waitForObjectProperty(searchProcess, findObject, findProperty, findText, timeOut,exestatus) {

if (equal(exestatus,true)) {

// wait for an object property to be displayed  
  found = false;
  loopTime = 0;
  
  // Find the combobox
  var thisCombo = searchProcess.Find("Name", findObject, 1000);

  while (loopTime < timeOut) {
  	var vFoundText = aqObject.GetPropertyValue(thisCombo, findProperty);
	if (vFoundText == findText) {
		found = true;
		break;
	} else {
	    aqUtils.Delay(1000);
	    loopTime = loopTime + 1;
	}
  } // while
  
  if (found) {
    //Log.Message(findProperty + " value found - waitForObjectProperty function.");
  } else {
    Log.Error("waitForObjectProperty",findProperty + " does not exist for " + findObject + " - waitForObjectProperty function.");
    exestatus = false;
  }  

   }

else {
  Log.Message("waitForObjectProperty","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;     
  
} // waitForObjectProperty
//******************************************************************************************//
//******************************************************************************************//
function selectComboItem(searchProcess, comboBox, textSelect,exestatus) {

if (equal(exestatus,true)) {

  // Find the combobox
  
    if  (textSelect === null || textSelect === "" || textSelect === undefined) {
  Log.Message("selectComboItem","The data is blank, the step is skipped"+ textSelect);      
  
	} 
  else {
  var thisCombo = searchProcess.Find("Name", comboBox, 1000);
  
  if (thisCombo.Exists && thisCombo.Visible) {
    thisCombo.click();
                                            
  //var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
  aqUtils.Delay(500);
  
  PropArray = new Array("ClrClassName", "WPFControlText");
  ValuesArray = new Array("ImdComboBoxItem", textSelect+"*");
  exestatus = buttonClick(searchProcess, PropArray, ValuesArray,exestatus);
  }
  else 
  {
  Log.Error("selectComboItem","The object is not found"&comboBox); 
  exestatus = false;
  }
  }
  }

else {
  Log.Message("selectComboItem","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;    
  
} // selectComboItem

function selectCheckComboItem(searchProcess, comboBox, textSelect,exestatus) {

if (equal(exestatus,true)) {

  if  (textSelect === null || textSelect === "" || textSelect === undefined) {
  Log.Message("selectCheckComboItem","The data is blank, the step is skipped"+ textSelect);      
  
	} 
  else {
	// Finc the combobox
	 thisCombo = searchProcess.FindChild("Name", comboBox, 1000);
  
  if (thisCombo.Exists && thisCombo.Visible) {
  Sys.HighlightObject(thisCombo);
	   thisCombo.click();
     
     //This code is added to handle un-clickable combo
     var height = thisCombo.Height;
     var width = thisCombo.Width;
     thisCombo.Click(2, height-5);
                                               
	var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
	aqUtils.Delay(500);
	PropArray = new Array("ClrClassName", "WPFControlText");
	ValuesArray = new Array("ImdCheckedComboBoxItem", textSelect+"*");
	exestatus = mvObjects.buttonClick(searchProcess, PropArray, ValuesArray,exestatus);
	thisCombo.click();
  
  }
  else 
  {
  Log.Error("selectCheckComboItem","The object is not found"&comboBox); 
  exestatus = false;
  }
  }
  }

else {
  Log.Message("selectCheckComboItem","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
  
    
} // selectComboItem
//******************************************************************************************//
//******************************************************************************************//
function ImdListBoxSelection(listSelectionObjectName, textSelection,exestatus) {

if (equal(exestatus,true)) {

  // Main MV process
  vProcess = Sys.Process("iMDSoft.Metavision");

  exestatus = buttonClick(vProcess, "Name", listSelectionObjectName,exestatus);
  
  // Loop for the expected form
  var formsList = vProcess.Find("ClrClassName", "ImdListBox", 1000);
  formsList.Keys("[Home]")
  var lastItem = "noLastItem";
  var isFound = false;
  var selectedText = "";
  
  while (lastItem != selectedText && !isFound) {
    selectedText = aqObject.GetPropertyValue(formsList, "Text");
    if (aqString.Compare(selectedText.OleValue, textSelection, false) == 0) {
      isFound = true;
      formsList.Keys("[Enter]")
      aqUtils.Delay(1000);
      break;
    } // if
    formsList.Keys("[Down]")
    aqUtils.Delay(500);
    lastItem = selectedText;
    selectedText = aqObject.GetPropertyValue(formsList, "Text");
  } // while

  aqUtils.Delay(500);
  
   }

else {
  Log.Message("ImdListBoxSelection","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
  
} // ImdListBoxSelection

//******************************************************************************************//
//******************************************************************************************//
function enterImdDateTimePicker(searchProcess, dateTimePicker, day, month, year, hour, minute,exestatus) {

if (equal(exestatus,true)) {

  	// Find the combobox
  	var thisDateTimePicker = searchProcess.Find("Name", dateTimePicker, 1000);
	// populate date with Now
    var chk = thisDateTimePicker.IsEmptyDate;
    if (equal (chk,true)){
  	thisDateTimePicker.click(10, 15);
 	  aqUtils.Delay(300);
	  }
    
  if (day < 10) 
  {day = "0"+day}
  if (month < 10) 
  {month = "0"+month}
    
	// Bypass date entry if day is "Now" as clicking on checkbox above defaults to Now
	if (day != "Now") {
	//	thisDateTimePicker.Click(30, 15);
		if (hour == "") {
			thisDateTimePicker.Keys("[Left][Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year);
		} else {
       
			thisDateTimePicker.Keys("[Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year+"[Right]"+hour+"[Right]"+minute);
      
      //If the hours is greater than 12 and minutes greater than 00 then -
      //If time is AM then change it to PM
      //If time is PM then change it to AM
      var dateTimeString = aqObject.GetPropertyValue(thisDateTimePicker, "Text");
      
      if( ((hour > 12) ||(hour == 12 && minute > 1)) && (aqString.Contains(dateTimeString, "AM") != -1) )
      {
        thisDateTimePicker.Keys("[Right]");
        thisDateTimePicker.Keys("[Up]");
      }     
      
      thisDateTimePicker.Keys("[Left][Left][Left][Left]"+day);
      }
      }
	  
  }
  
else {
  Log.Message("enterImdDateTimePicker","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
		
} // enterImdDateTimePicker
//******************************************************************************************//
//******************************************************************************************//
function selectListItem (itemValue,exestatus) {

if (equal(exestatus,true)) {
	PropArray = new Array("ClrClassName", "WPFControlText");
	ValuesArray = new Array("ListBoxItem", itemValue);
  var vProcess = Sys.Process("iMDSoft.Metavision");
	exestatus = mvObjects.buttonClick(vProcess,PropArray,ValuesArray,exestatus);
 }
  
else {
  Log.Message("selectListItem","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
  return exestatus;   
}

//******************************************************************************************//
//******************************************************************************************//
function selectComboListItem (itemValue,exestatus) {

if (equal(exestatus,true)) {
	PropArray = new Array("ClrClassName", "WPFControlText");
	ValuesArray = new Array("ImdComboBoxItem", itemValue);
  var vProcess = Sys.Process("iMDSoft.Metavision");
	exestatus = mvObjects.buttonClick(vProcess,PropArray,ValuesArray,exestatus);
 }
  
else {
  Log.Message("selectComboListItem","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
  return exestatus;   
}
//******************************************************************************************//
//******************************************************************************************//
function scrollUntilVisible(objectToCheckVisible,exestatus) {
  if (equal(exestatus,true)) {
  // Get the metavison process
  vProcess = Sys.Process("iMDSoft.Metavision");
  
  var checkCount = 0;
  
  objectToFind = vProcess.Find("Name", objectToCheckVisible, 1000);
  
  isVisible = aqObject.GetPropertyValue(objectToFind, "VisibleOnScreen");
  if (!isVisible && checkCount < 100) {
    // click tab down button
    tabScrollObject = vProcess.Find("Name", "WPFObject(\"mvTabScroll\")", 1000);
    while (!isVisible) {
        
      clickArea = aqObject.GetPropertyValue(tabScrollObject, "Height");
      tabScrollObject.Click(10, clickArea-20);
        
      isVisible = aqObject.GetPropertyValue(objectToFind, "VisibleOnScreen");
      if (!isVisible && checkCount > 100) {
        
        isVisible = true;
        breakFor = true;
      }
      //aqUtils.Delay(1000);
      checkCount++;
    } // while
    
    // click a few more times, for the checkboxes, make sure totally visible
    for (var i = 0; i < 4; i++) {
      tabScrollObject.Click(1, clickArea-20);
    }
        
   } // if 
   
   }
  
else {
  Log.Message("scrollUntilVisible","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
  return exestatus;   
   
} // scrollUntilVisible
//******************************************************************************************//
//******************************************************************************************//
function findToolTipOnView(startingX, startingY, viewObject, viewObjectNumber, toolTipText, timeoutLoopCount, xOry) {

	// Get the metavison process
	vProcess = Sys.Process("iMDSoft.Metavision");
    
	// Find all the chart objects
	chartControlObject = vProcess.FindAll("Name", viewObject, 100);
	chartControlObject = (new VBArray(chartControlObject)).toArray();
  
	var loopCounter = 0;
	var x = startingX;
	var y = startingY;
	var medTextFound = false;
	lastTChart = chartControlObject.length - viewObjectNumber;
	while (!medTextFound && loopCounter < timeoutLoopCount) {
		// Hover the mouse in chart area
		chartControlObject[lastTChart].HoverMouse(x, y);
		//chartControlObject[0].HoverMouse(x, positionY);
    
		// check the tool tip text
		vToolTipObject = aqObject.GetPropertyValue(chartControlObject[lastTChart], "ToolTip");
		vToolTipTextObject = aqObject.GetPropertyValue(vToolTipObject, "WPFControlText");
    
		// Check if object contains text for med used
		if (aqString.Find(vToolTipTextObject, toolTipText) != -1) {
			medTextFound = true;
			break;
		}
 		aqUtils.Delay(500);
		// Use "y" to move vertically
		if (xOry = "y") {
			y = y + 10;
		} else {
			x = x + 10;
		}
		loopCounter++;
	}
  
	if (medTextFound) {
		return true;
	} else {
		return false;
	}
}
//******************************************************************************************//
//******************************************************************************************//
// General function select any top menu option
function selectMenuOption(exestatus,menuName, menuOption, menuSubOption1, menuSubOption2, menuSubOption3, menuSubOption4, menuSubOption5) {

if (equal(exestatus,true)) {

	vProcess = Sys.Process("iMDSoft.Metavision");
  
  aqUtils.Delay(1000);

	// Open top level menu
	PropArray = new Array("Text", "Visible");
	ValuesArray = new Array(menuName, true);
	exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus);
  
	// Open menu Option
	if (!equal(menuOption, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuOption, true);
	   exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus); 
	}
	  
	// Open menu subOption1
	if (!equal(menuSubOption1, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption1, true);
	   exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus);
	}

	// Open menu subOption2
	if (!equal(menuSubOption2, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption2, true);
	  exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus);
	}

	// Open menu subOption3
	if (!equal(menuSubOption3, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption3, true);
	  exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus);
	}

	// Open menu subOption4
	if (!equal(menuSubOption4, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption4, true);
	    exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus); 
	}

	// Open menu subOption5
	if (!equal(menuSubOption5, undefined)) {
	   PropArray = new Array("Text", "Visible");
	   ValuesArray = new Array(menuSubOption5, true);
	    exestatus = mvObjects.buttonClick(vProcess, PropArray, ValuesArray,exestatus);
	}
   }
  
else {
  Log.Message("selectMenuOption","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
  return exestatus;  
  
}

//******************************************************************************************//
//******************************************************************************************//

	function verifyCaptionElement(position, expectedValue, logField,exestatus) {
	if (equal(exestatus,true)) {
	// Check Element in Caption Bar
   vProcess = Sys.Process("iMDSoft.Metavision");
   vContentControl5 = vProcess.Find("Name", "WPFObject(\"captionItemsGrid\", \"\")", 1000);
	vGrid = vContentControl5.Find("Name", "WPFObject(\"ContentPresenter\", \"\", " + position + ")", 1000);
	vStatusBarText = mvObjects.getObjectProperty(vGrid, "Name", "WPFObject(\"txtParamValue\")", "Text",exestatus);
	vStatusBarText =  (vStatusBarText.trim());

	if (aqString.Compare(vStatusBarText, expectedValue, false) == 0) {
	   Log.Checkpoint(logField + " found: " + expectedValue);
	   exestatus = true;
	} else {
	   Log.Error(logField + " expected: " + expectedValue + " Found value: " + vStatusBarText);
	   exestatus = false;
	   
	}
	 }

	else {
	Log.Message("verifyCaptionElement","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
	}
	return exestatus;
	
	}

//******************************************************************************************//
//******************************************************************************************//
function verifyObjectProperty(parent, attribute, object, property, expectedValue, elementname,exestatus) {

if (equal(exestatus,true)) {
	vproperty = getObjectProperty(parent, attribute, object, property,exestatus);
	if (aqString.Compare(vproperty, expectedValue, false) == 0) {
		Log.Checkpoint(elementname + " have the value : " + expectedValue);
     exestatus = true;
	} else {
	   	Log.Error(elementname + " expected: " + expectedValue + " Found value: " + vproperty)
      exestatus = false;
	}
   }

	else {
	Log.Message("verifyObjectProperty","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
	}
	return exestatus;
  
}

//******************************************************************************************//
//******************************************************************************************//
// Name :progressnotes
// Desc :Function to choose the progress notes and perform operation
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function progressnotes(DtTimeFilter,NoteName,exestatus)
{
if (equal(exestatus,true)) {
  
  // Main MV process
  
  vProcess = Sys.Process("iMDSoft.Metavision");
  
  //Get the savedtimevalue and modify it 
// DtTimeFilter = aqConvert.DateTimeToFormatStr(DtTimeFilter,"%d/%m/%Y %H:%M %p");

  var day =  aqDateTime.GetDay(DtTimeFilter); 
  var month =  aqDateTime.GetMonth(DtTimeFilter); 
  var year =  aqDateTime.GetYear(DtTimeFilter); 
  var hr =  aqDateTime.GetHours(DtTimeFilter); 
  var min =  aqDateTime.GetMinutes(DtTimeFilter); 
  

  // enter date and time field
  exestatus = mvObjects.enterDateTime(vProcess,"WPFObject(\"dtFromTime\")",44 ,19, day, month, year, hr, min, exestatus);    

  // click on the filter arrow
  exestatus = mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdRefresh\")",exestatus);
    
  // Click on perform mouse click
  exestatus = mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"slItems\")",exestatus);
      
  // Click on plus 
  exestatus = mvObjects.buttonClick(vProcess, "Name", "WPFObject(\"cmdViewItem\")",exestatus);
  
      }
 
else {
  Log.Message("progressnotes","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
  return exestatus;   
}

//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :enterDateTime
// Desc :Function to enter date and time in the date field
// Owner :Ragurathan
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function enterDateTime(searchProcess, dateTimePicker,XPos,YPos, day, month, year, hr, min,exestatus) {

if (equal(exestatus,true)) {

  	// Find the combobox
  	var thisDateTimePicker = searchProcess.Find("Name", dateTimePicker, 1000);
    // handler for zone
	   if (hr >= 12 & min >= 1)
        { hr = hr -12;
        var zone = "PM";}
     else {
       var zone = "AM";}
       
    // handler for lenght for two
        
    if (aqString.GetLength(day)===1)
    {day = "0"+day;}
    if (aqString.GetLength(month)===1)
    {month = "0"+month;}
    if (aqString.GetLength(hr)===1)
    {hr = "0"+hr;}
    if (aqString.GetLength(min)===1)
    {min = "0"+min;}
    // handler for morning hours
    if (hr==="00")
      {hr = 12;} 
    
	if (thisDateTimePicker.exists) {
	   thisDateTimePicker.DblClick(XPos, YPos);
		//  thisDateTimePicker.click;
		  thisDateTimePicker.Keys("[Left]"+day+month+year+hr+min+zone);
       //thisDateTimePicker.Keys("[Left][Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year+"[Right]"+hr+"[Right]"+min);
     
     exestatus = true;
     
      Log.Checkpoint("enterDateTime","The action is performed the data is set in '"+dateTimePicker+"'");
      
			}
  else { exestatus = false;
   Log.Error("enterDateTime","The action is NOT performed the data is NOT set in '"+dateTimePicker+"', due to object not found");
  }
  
  }
  
else {
  Log.Message("enterDateTime","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
		
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :ListCheckBoxSelection
// Desc :Fucntion to select list box
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function ListCheckBoxSelection(listSelectionObjectName, textSelection,exestatus) {

if (equal(exestatus,true)) {

  // Main MV process
  vProcess = Sys.Process("iMDSoft.Metavision");

 // exestatus = buttonClick(vProcess, "Name", listSelectionObjectName,exestatus);
  var parent = vProcess.Find("Name", listSelectionObjectName, 1000);
  
  // Loop for the expected form
 // var formsList = parent.Find("ClrClassName", "ListBoxItem", 1000);
  var RowCount = parent.ChildCount 
  for (i = 1; i <= RowCount; i++) {
  var formsList = parent.Find("Name", "WPFObject(\"ListBoxItem\", \"\", "+i+")", 1000);
      selectedText = aqObject.GetPropertyValue(formsList, "WPFControlText");
      // selectedText = aqObject.GetPropertyValue(formsList, "Text");
  if (aqString.Compare(selectedText, textSelection, false) == 0) {
          formsList.Click();
          formsList.Keys("[Enter]");
      aqUtils.Delay(1000);
       exestatus = true
       Log.Checkpoint("ImdListBoxSelection","The value as '"+textSelection+"' is selected on '"+listSelectionObjectName+"'");
      break;
    }
    aqUtils.Delay(200);
    }  
   }

else {
  Log.Message("ImdListBoxSelection","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
  
} 
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :SearchSelectItem
// Desc :Fucntion to find object based on x&Y corodinates
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function SearchSelectItem(searchProcess,findObject,XPOs,YPOs,itemValue,controller,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find("FullName", "*"+findObject+"*", 1000);
	if (control.Exists) {
		control.DblClick(XPOs,YPOs);    
    control.Keys(itemValue);
     Log.CheckPoint("SearchSelectItem, Object '"+ findObject+"' is double clicked and entered with value "+ itemValue);
     if (controller === 1){
     exestatus  = mvObjects.selectComboItem(searchProcess,findObject,itemValue,exestatus); 
     }
     if (controller === 2){
     control.Keys("[Enter]");
     }
	} else {
		Log.Error("SearchSelectItem","The object was not found. SearchSelectItem function. object: " + findObject);
    exestatus = false;
	}
 
  }

else {
  Log.Message("SearchSelectItem","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
   
} 
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :ClickCoordinates
// Desc :Function to find object using Hover Mouse and X&Y corodinates
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function ClickCoordinates(searchProcess,propertyName,findObject,XPOs,YPOs,exestatus) 
{


if (equal(exestatus,true)) 
{

	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) 
  {
    control.HoverMouse(XPOs,YPOs);
		control.Click(XPOs,YPOs);
    //control.keys(value);
    aqUtils.Delay(500);
     Log.CheckPoint("Object '"+ findObject+"' is clicked."); 
      
	} else 
  {
		Log.Error("ClickCoordinates","The object was not found. ClickCoordinates function. object: " + findObject);
    exestatus = false;
	}
   }

   
else {
  Log.Message("ClickCoordinates","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
   
} 
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :wildcardfullname
// Desc :Function to select object based on parent and child method
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function wildcardfullname(searchProcess, wildcardParent,wildcardChild, textSelect, exestatus, specialCase) {

if (equal(exestatus,true)) {

  // Find the combobox
  var thisCombo = searchProcess.Find("FullName", wildcardParent, 1000);
  thisCombo.click();
  
  
  //This code is added to handle un-clickable combo
  if(specialCase)
  {
     var height = thisCombo.Height;
     var width = thisCombo.Width;
     thisCombo.Click(2, height-5); 
   }
   
                                               
  //var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
  aqUtils.Delay(1000);
  PropArray = new Array("FullName", "WPFControlText");
  ValuesArray = new Array("*"+wildcardChild+"*", textSelect+"*");
  exestatus = HoveronMouse(searchProcess, PropArray, ValuesArray,exestatus);
  
  }

else {
  Log.Message("wildcardfullname","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;    
  
} 
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :selectToggleItem
// Desc :Function to find object using fullname 
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function selectToggleItem(searchProcess, FullNameToggle, textSelect,exestatus) {

if (equal(exestatus,true)) {

  // Find the combobox
  var thisCombo = searchProcess.Find("FullName", "*"+FullNameToggle+"*", 1000);
   //thisCombo.focus();
    //thisCombo.click();
                                               
  //var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
  PropArray = new Array("Name", "WPFControlText");
  ValuesArray = new Array("*TextBlock*", textSelect+"*");
  exestatus = buttonClick(searchProcess, PropArray, ValuesArray,exestatus);
  
  }

else {
  Log.Message("selectToggleItem","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;    
  
} 
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :HoveronMouse
// Desc :Mousehover functionality
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function HoveronMouse(searchProcess, propertyName,findObject,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find(propertyName, findObject, 1000);
  
  


if (control.Exists) {
    control.HoverMouse();
    control.Click(1,1);
		//control.Keys(keyName);
    Log.CheckPoint("Clicked on the object "+ findObject);  
	} 
  else {
		Log.Error("HoveronMouse","The object was not found. object: " + findObject);
    exestatus = false;
   
	}
   		
}

else {
  Log.Message("HoveronMouse","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
    
	  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :Fullnametext
// Desc :Find object using fullname text property
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date: 
// Update desc: 
//******************************************************************************************//
//******************************************************************************************//
 
function Fullnametext(searchProcess, findObject, textToEnter,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find("FullName", findObject, 1000);
  
  
if  (textToEnter === null || textToEnter === "" || textToEnter === undefined) {
  Log.Message("Fullnametext","The data is blank, No value is entered in the object "+ findObject);      
  
	} 
else {
if (control.Exists) {
		control.click();
    //added temp as issue in dropdown in medication module
    //control.click();
    aqUtils.Delay ("500", "Wait to enter data");
    control.Keys("^a[Del]");
		control.Keys(textToEnter);
    Log.CheckPoint("The data  '"+textToEnter+"' is entered in the object "+ findObject);  
	} 
  else {
		Log.Error("Fullnametext","The object was not found. enterEditText function. object: " + findObject);
    exestatus = false;
   
	}
   	
 
	}
}

else {
  Log.Message("Fullnametext","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
    
	  
} 
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :rightclick
// Desc :Function for mouse rightclick
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function rightclick(searchProcess,propertyName,findObject,XPOs,YPOs,exestatus) 
{


if (equal(exestatus,true)) 
{
	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) 
  {
		control.focus();
    control.ClickR(XPOs,YPOs);   
    aqUtils.Delay(500);
     Log.CheckPoint("Object '"+ findObject+"' is clicked."); 
     
	} else 
  {
		Log.Error("rightclick","The object was not found. rightclick function. object: " + findObject);
    exestatus = false;
	}
   }

   
else {
  Log.Message("rightclick","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
    
} 
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :doubleclick
// Desc :Function for mouse doubleclick
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function doubleclick(searchProcess,propertyName,findObject,XPOs,YPOs,exestatus) 
{


if (equal(exestatus,true)) 
{
	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) 
  {
		control.focus();
    control.DblClick (XPOs,YPOs);   
    aqUtils.Delay(500);
     Log.CheckPoint("Object '"+ findObject+"' is clicked."); 
     
	} else 
  {
		Log.Error("doubleclick","The object was not found. rightclick function. object: " + findObject);
    exestatus = false;
	}
   }

   
else {
  Log.Message("doubleclick","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
    
} 
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :generateRandomMRN
// Desc :Function for generating RandomMRN number
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function generateRandomMRN(vLength){

	var generatedNumber = "";
	var tempNumber;
	var tempString = "";
	for (i = 0; i < vLength; i++) { 
		tempNumber = Math.random() * 10 + 1;
		tempString = Math.round(tempNumber).toString()
		generatedNumber = generatedNumber + tempString;
	} // for
  
	return generatedNumber
	
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
// Name :selectradiobutton
// Desc :Function for selecting Radio button
// Owner :Ragurathan S
// Creation date:August 2017
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function selectradiobutton(searchProcess, radiobutton, textSelect,exestatus) {

if (equal(exestatus,true)) {

  // Find the combobox
  var thisCombo = searchProcess.Find("Name", radiobutton, 1000);
  thisCombo.click();
                                               
  //var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
  aqUtils.Delay(500);
  PropArray = new Array("ClrClassName", "WPFControlText");
  ValuesArray = new Array("ImdRadioButton", textSelect+"*");
  exestatus = buttonClick(searchProcess, PropArray, ValuesArray,exestatus);
  
  }

else {
  Log.Message("selectradiobutton","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;    
  
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//
function scrolmultiwindow(FormID, objectToCheckVisible,exestatus) {
  if (equal(exestatus,true)) {
  // Get the metavison process
  vProcess = Sys.Process("iMDSoft.Metavision");
  
  var checkCount = 0;
  
  objectToFind = vProcess.Find("FullName", objectToCheckVisible, 1000);
  
  isVisible = aqObject.GetPropertyValue(objectToFind, "VisibleOnScreen");
  if (!isVisible && checkCount < 100) {
    // click tab down button
    tabScrollObject = vProcess.Find("FullName", "*WPFObject(\"HwndSource: frmMain\", \"\","+FormID+"*WPFObject(\"mvTabScroll\")", 1000);
    while (!isVisible) {
        
      clickArea = aqObject.GetPropertyValue(tabScrollObject, "Height");
      tabScrollObject.Click(10, clickArea-20);
        
      isVisible = aqObject.GetPropertyValue(objectToFind, "VisibleOnScreen");
      if (!isVisible && checkCount > 100) {
        
        isVisible = true;
        breakFor = true;
      }
      //aqUtils.Delay(1000);
      checkCount++;
    } // while
    
    // click a few more times, for the checkboxes, make sure totally visible
    for (var i = 0; i < 4; i++) {
      tabScrollObject.Click(1, clickArea-20);
    }
        
   } // if 
   
   }
  
else {
  Log.Message("scrolmultiwindow","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
  return exestatus;   
   
} // scrolmultiwindow
//******************************************************************************************//
//******************************************************************************************//
function selectFullComboItem(searchProcess, FullName, textSelect,exestatus) {
 
if (equal(exestatus,true)) {
 
  // Find the combobox
  var thisCombo = searchProcess.Find("FullName", FullName, 1000);
  if (thisCombo.Exists && thisCombo.Visible) {
    thisCombo.ClickItem(textSelect)
                                           
  //var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
  aqUtils.Delay(500);
 
 // PropArray = new Array("ClrClassName", "Text");
// ValuesArray = new Array("ComboBoxItem", textSelect+"*");
// exestatus = buttonClick(searchProcess, PropArray, ValuesArray,exestatus);
  }
  else
  {
  Log.Error("selectFullComboItem","The object is not found"&FullName);
  exestatus = false;
  }
 
  }
 
else {
  Log.Message("selectFullComboItem","The action is skipped since the execution status is set as '"+exestatus+"'");
  
  }
   return exestatus;   
  
} // selectFullComboItem

//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
// Name :enterDateTimeNotEmpty
// Desc :Function for entering date and time when the values are exits
// Owner :Satheeshkumar
// Creation date:Nov 2017
// Update By :
// Update date: 
// Update desc:  
//******************************************************************************************//
function enterDateTimeNotEmpty(searchProcess, dateTimePicker, day, month, year, hour, minute,exestatus) {

if (equal(exestatus,true)) {

  	// Find the combobox
  	var thisDateTimePicker = searchProcess.Find("Name", dateTimePicker, 1000);
	
  	thisDateTimePicker.click(10, 15);
 	  aqUtils.Delay(300);
	  
	// Bypass date entry if day is "Now" as clicking on checkbox above defaults to Now
	if (day != "Now") {
	//	thisDateTimePicker.Click(30, 15);
		if (hour == "") {
			thisDateTimePicker.Keys("[Left][Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year);
		} else {
			thisDateTimePicker.Keys("[Left][Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year+"[Right]"+hour+"[Right]"+minute);
		}	
	}
  
  }
  
else {
  Log.Message("enterDateTimeNotEmpty","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
		
} // enterDateTimeNotEmpty
//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
// Name :selectFullNameObjType
// Desc :Function for selecting & entering data on objects with full name
// Owner :AJ
// Creation date:Nov 2017
// Update By :AJ
// Update date: 20 Nov 2017
// Update desc:  Option 1 for clickitem, 2 for Clicktab, 3 for check, 4 fopr settext
//******************************************************************************************//

function selectFullNameObjType(searchProcess, FullName, textSelect,Option, exestatus) {

if (equal(exestatus,true)) {

  // Find the combobox
  var thisCombo = searchProcess.Find("FullName", FullName, 1000);
  if  (textSelect === null || textSelect === "" || textSelect === undefined) {
  Log.Message("selectFullNameObjType","The data is blank, No value is entered in the object "+ FullName);      
  	} 
  else {  
    if (thisCombo.Exists && thisCombo.Visible) {
  
        if (equal(Option,1)){  
  
          thisCombo.ClickItem(textSelect);
           }                                        
  
        if (equal(Option,2)){  
  
            thisCombo.ClickTab(textSelect);
          }                                        
  
         if (equal(Option,3)){  
  
              var chk = thisCombo.Checked;
             if (equal(chk,false)&& equal(textSelect,"Yes") ){
  	               thisCombo.click();
 	                }
            if (equal(chk,true)&& equal(textSelect,"No") ){
  	             thisCombo.click();
 	               }    
            } 
        if (equal(Option,4)){  
            thisCombo.SetText(textSelect);
            thisCombo.Keys("[Tab]");
          }  
   
  }
    else 
    {
    Log.Error("selectFullNameObjType","The object is not found '"&FullName); 
    exestatus = false;
      }
    }
  }

else {
  Log.Message("selectFullNameObjType","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;    
  
} // selectFullNameObjType
//******************************************************************************************//
//******************************************************************************************//
function enterANZICSDateTimePicker(searchProcess, dateTimePickerParent, dtTime,exestatus) {

if (equal(exestatus,true)) {

 

  	// Find the date picker
  	var parentDate = searchProcess.Find("FullName", dateTimePickerParent , 1000);
    //".WinFormsObject(\"dateTimePicker1\")"
	// Find the check box
  	var thisDateTimeChk = parentDate.FindChild("Name", "WinFormsObject(\"checkBox1\")", 1000);
    var thisDateTimePicker = parentDate.FindChild("Name", "WinFormsObject(\"dateTimePicker1\")", 1000);
if  (dtTime === null || dtTime === "" || dtTime === undefined) {
  Log.Message("enterANZICSDateTimePicker","The data is blank, No value is entered in the object "+ dateTimePickerParent);      
  
	} 
else {    
     if (thisDateTimePicker.Exists && thisDateTimePicker.Visible) {   
  
           var chk = thisDateTimeChk.Checked;
           if (equal(chk,false)){
  	           thisDateTimeChk.click();
 	            aqUtils.Delay(300);
	             }
	           thisDateTimePicker.wDate = dtTime;
             
             Log.Checkpoint("enterANZICSDateTimePicker","The data '"+dtTime+"' is entered in the date field  "+dateTimePickerParent  );
    	}
      else 
         {
         Log.Error("enterANZICSDateTimePicker","The object is not found "&dateTimePickerParent); 
         exestatus = false;
         }
  }
    }
  
else {
  Log.Message("enterANZICSDateTimePicker","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  } 
   return exestatus;   
		
} // enterANZICSDateTimePicker

//******************************************************************************************//
function ftpTest()
{
var file_path = Project.Path;
var file = Project.Path +"\\Pathology_FG_1_SNOMED1_77570030310.HL7";

var ftp = new FtpConnection("ftp://10.140.89.19/9044") ;
//ftp.login("username", "password");

//ftp.cd("project")
ftp.put(file,"Pathology_FG_1_SNOMED1_77570030310.HL7") ;

ftp.close() ;
file.close() ;
}
//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
// Name :clearText
// Desc :Function to remove the values from text field
// Owner :Satheeshkumar
// Creation date:09-Dec-2017
// Update By :
// Update date: 
// Update desc:  
//******************************************************************************************//
function clearText(searchProcess, propertyName, findObject,exestatus) {

if (equal(exestatus,true)) {

	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) {
    control.Clear();
		
     Log.CheckPoint("Text value '"+ findObject+"' is removed."); 
	} else {
		Log.Error("clearText","The object was not found. clearText function. object: " + findObject);
    exestatus = false;
	}
 
  }

else {
  Log.Message("clearText","The action is skipped since the execution status is set as '"+exestatus+"'"); 
  
  }
  return exestatus;
   
} // clearText

//******************************************************************************************//
//******************************************************************************************//




module.exports.enterANZICSDateTimePicker = enterANZICSDateTimePicker;
module.exports.selectFullNameObjType = selectFullNameObjType;
module.exports.enterEditText = enterEditText;
module.exports.buttonClick = buttonClick;
module.exports.objectFocusClick = objectFocusClick;
module.exports.waitForObject = waitForObject;
module.exports.waitForObjectNotVisible = waitForObjectNotVisible;
module.exports.getObjectProperty = getObjectProperty;
module.exports.waitForObjectProperty = waitForObjectProperty;
module.exports.selectComboItem = selectComboItem;
module.exports.selectCheckComboItem = selectCheckComboItem;
module.exports.ImdListBoxSelection = ImdListBoxSelection;
module.exports.enterImdDateTimePicker = enterImdDateTimePicker;
module.exports.selectListItem = selectListItem;
module.exports.scrollUntilVisible = scrollUntilVisible;
module.exports.selectCheckComboItem = selectCheckComboItem;
module.exports.findToolTipOnView = findToolTipOnView;
module.exports.waitForObjectProperty = waitForObjectProperty;
module.exports.objectFocusClick = objectFocusClick;
module.exports.selectMenuOption = selectMenuOption;
module.exports.verifyCaptionElement = verifyCaptionElement;
module.exports.verifyObjectProperty = verifyObjectProperty;
module.exports.progressnotes = progressnotes;
module.exports.enterDateTime = enterDateTime;
module.exports.ListCheckBoxSelection = ListCheckBoxSelection;
module.exports.SearchSelectItem = SearchSelectItem;
module.exports.ClickCoordinates = ClickCoordinates;
module.exports.wildcardfullname = wildcardfullname;
module.exports.selectToggleItem = selectToggleItem;
module.exports.HoveronMouse = HoveronMouse;
module.exports.Fullnametext = Fullnametext;
module.exports.rightclick = rightclick;
module.exports.doubleclick = doubleclick;
module.exports.selectComboListItem = selectComboListItem;
module.exports.generateRandomMRN = generateRandomMRN;
module.exports.selectradiobutton = selectradiobutton;
module.exports.scrolmultiwindow = scrolmultiwindow;
module.exports.selectFullComboItem = selectFullComboItem;
module.exports.enterDateTimeNotEmpty = enterDateTimeNotEmpty;
module.exports.clearText = clearText;
