
function enterEditText(searchProcess, findObject, textToEnter) {

	control = searchProcess.Find("Name", findObject, 1000);
	if (control.Exists) {
		control.click();
		control.Keys(textToEnter);
	} else {
		Log.Error("The object was not found. enterEditText function. object: " + findObject);
	}
  
} // enterEditText

function buttonClick(searchProcess, propertyName, findObject) {

	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) {
		control.click();
	} else {
		Log.Error("The object was not found. buttonClick function. object: " + findObject);
	}
  
} // buttonClick

function objectFocusClick(searchProcess, propertyName, findObject) {

	control = searchProcess.Find(propertyName, findObject, 1000);
	if (control.Exists) {
		control.focus();
		control.click();
	} else {
		Log.Error("The object was not found. objectHover function. object: " + findObject);
	}
  
} // buttonClick


function waitForObject(searchProcess, findObject, timeOut) {

      // wait for an object to appear on screen  
      retCode = false;
      loopTime = 0;
  
      while (!retCode.Exists && loopTime < timeOut) {
        retCode = searchProcess.Find("Name", findObject, 1000);
        aqUtils.Delay(1000);
        loopTime = loopTime + 1;
      } // while
  
      if (retCode.Exists) {
        Log.Message("Found object: "+ retCode.FullName);
        return true;
      } else {
        Log.Error("The object was not found. waitForObject function. Object: " + findObject);
        return false;
      }  
    
} // waitForObject

function waitForObjectNotVisible(searchProcess, findObject, timeOut) {
// wait for an object to no longer exist on the screen
  
	retCode = true;
	loopTime = 0;
  
	while (retCode.Exists && loopTime < timeOut) {
		retCode = searchProcess.Find("Name", findObject, 1000);
		aqUtils.Delay(1000);
		loopTime = loopTime + 1;
	} // while
  
	if (retCode.Exists) {
		Log.Error(findObject + " not closed within timeout - waitForObjectNotVisible function.");
	}	
     
} // waitForObject

function getObjectProperty(vBaseObject, vFindProperty, vFindText, vGetProperty) {
// Gets a property value for a searched object
  try {
    var vFoundObject = vBaseObject.Find(vFindProperty, vFindText, 1000);
  } catch(err) {
    throw "object not found. Error: " + err;
  }
  var vFoundText = aqObject.GetPropertyValue(vFoundObject, vGetProperty);
  return vFoundText;
} // getObjectProperty

function waitForObjectProperty(searchProcess, findObject, findProperty, findText, timeOut) {
// wait for an object property to be displayed
  
  found = false;
  loopTime = 0;
  
  // Find the combobox
  var thisCombo = searchProcess.Find("Name", findObject, 1000);

  while (loopTime < timeOut) {
  	var vFoundText = aqObject.GetPropertyValue(thisCombo.Text, findProperty);
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
    Log.Error(findProperty + " does not exist for " + findObject + " - waitForObjectProperty function.");
  }   
} // waitForObject

function selectComboItem(searchProcess, comboBox, textSelect) {

  // Find the combobox
  var thisCombo = searchProcess.Find("Name", comboBox, 1000);
  thisCombo.click();
                                               
  var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
  aqUtils.Delay(500);
  PropArray = new Array("ClrClassName", "WPFControlText");
  ValuesArray = new Array("ImdComboBoxItem", textSelect+"*");
  buttonClick(searchProcess, PropArray, ValuesArray);

} // selectComboItem

function selectComboItem_Test() {
  vProcess = Sys.Process("iMDSoft.Metavision");
  selectComboItem(vProcess, "WPFObject(\"cboTextCombo_3\")", "Other hospital ICU")
  selectComboItem(vProcess, "WPFObject(\"cboTextCombo_4\")", "Unknown")
} // selectComboItem_Test

function selectComboItem_MR(searchProcess, comboBox, textSelect) {

	// Find the combobox
	var thisCombo = searchProcess.Find("Name", comboBox, 100);
	if (!thisCombo.Exists) {
		Log.Error("Object does not exist. object: "+ comboBox);
		return;
	}
	thisCombo.click();
	aqUtils.Delay(500);
	thisCombo.Keys("[Up][Up]");  // Go to top of list
                                          
	var vFoundText = ""
	var vLoopCount = 0;
	vFoundText = aqObject.GetPropertyValue(thisCombo, "SelectedText");
	while ((aqString.Compare(vFoundText, textSelect, false) != 0) || (vLoopCount > 200)) { 
		//Log.Message(vFoundText);  
		aqUtils.Delay(500);
		thisCombo.Keys("[Down]");
		aqUtils.Delay(500);
		//thisCombo.click();
		vFoundText = aqObject.GetPropertyValue(thisCombo, "SelectedText");
		vLoopCount++;
	} 
  
	aqUtils.Delay(500);
} // selectComboItem_MR

function selectComboItem_CO(searchProcess, comboBox, textSelect) {

	// Find the combobox
	var thisCombo = searchProcess.Find("Name", comboBox, 100);
	if (!thisCombo.Exists) {
		Log.Error("Object does not exist. object: "+ comboBox);
		return;
	}
	thisCombo.click();
	aqUtils.Delay(500);
                                          
	var vFoundText = ""
	var vLoopCount = 0;
	vFoundText = aqObject.GetPropertyValue(thisCombo, "SelectedText");
	while ((aqString.Compare(vFoundText, textSelect, false) != 0) || (vLoopCount > 100)) { 
		Log.Message(vFoundText);  
		aqUtils.Delay(500);
		thisCombo.Keys("[Down]");
		aqUtils.Delay(500);
		thisCombo.click();
		vFoundText = aqObject.GetPropertyValue(thisCombo, "SelectedText");
		vLoopCount++;
	} 
  
	aqUtils.Delay(500);
} // selectComboItem_CO

function selectComboItem_FL(searchProcess, comboBox, textSelect) {

	var popUpFrame = searchProcess.Find("Name", "WPFObject(\"PopupContentControl\", \"\", 1)", 1000);
	aqUtils.Delay(500);
	
	PropArray = new Array("ClrClassName", "WPFControlText");
	ValuesArray = new Array("ComboBoxEditItem", textSelect);
	buttonClick(popUpFrame, PropArray, ValuesArray);

	aqUtils.Delay(500);
} // selectComboItem_FL

function selectCheckComboItem(searchProcess, comboBox, textSelect) {

	// Finc the combobox
	var thisCombo = searchProcess.Find("Name", comboBox, 1000);
	thisCombo.click();
                                               
	var popUpFrame = searchProcess.Find("Name", "WPFObject(\"NonLogicalAdornerDecorator\", \"\", 1)", 1000);
	aqUtils.Delay(500);
	PropArray = new Array("ClrClassName", "WPFControlText");
	ValuesArray = new Array("ImdCheckedComboBoxItem", textSelect+"*");
	buttonClick(searchProcess, PropArray, ValuesArray);
	thisCombo.click();
  
} // selectComboItem

function ImdListBoxSelection(listSelectionObjectName, textSelection) {

  // Main MV process
  vProcess = Sys.Process("iMDSoft.Metavision");

  buttonClick(vProcess, "Name", listSelectionObjectName);
  
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
  
} // ImdListBoxSelection

function ImdListBoxSelection_TEST() {                     
  ImdListBoxSelection("WinFormsObject(\"cboStatuses\")", "Admitted");
} // ImdListBoxSelection_TEST

function enterImdDateTimePicker(searchProcess, dateTimePicker, day, month, year, hour, minute) {

  	// Find the combobox
  	var thisDateTimePicker = searchProcess.Find("Name", dateTimePicker, 1000);
	// populate date with Now
    var chk = thisDateTimePicker.IsEmptyDate;
    if (equal (chk,true)){
  	thisDateTimePicker.click(10, 15);
 	  aqUtils.Delay(300);
	  }
	
	// Bypass date entry if day is "Now" as clicking on checkbox above defaults to Now
	if (day != "Now") {
		//thisDateTimePicker.Click(30, 15);
		if (hour == "") {
			thisDateTimePicker.Keys("[Left][Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year);
		} else {
			thisDateTimePicker.Keys("[Left][Left][Left][Left][Left]"+day+"[Right]"+month+"[Right]"+year+"[Right]"+hour+"[Right]"+minute);
		}	
	}
		
} // enterImdDateTimePicker

function selectListItem (itemValue) {

	PropArray = new Array("ClrClassName", "WPFControlText");
	ValuesArray = new Array("ListBoxItem", itemValue);
	Base_Objects.buttonClick(vProcess, PropArray, ValuesArray);
 
}

function scrollUntilVisible(objectToCheckVisible) {
  
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
   
} // scrollUntilVisible

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


module.exports.enterEditText = enterEditText;
module.exports.buttonClick = buttonClick;
module.exports.waitForObject = waitForObject;
module.exports.waitForObjectNotVisible = waitForObjectNotVisible;
module.exports.getObjectProperty = getObjectProperty;
module.exports.selectComboItem = selectComboItem;
module.exports.ImdListBoxSelection = ImdListBoxSelection;
module.exports.enterImdDateTimePicker = enterImdDateTimePicker;
module.exports.selectListItem = selectListItem;
module.exports.scrollUntilVisible = scrollUntilVisible;
module.exports.selectCheckComboItem = selectCheckComboItem;
module.exports.selectComboItem_MR = selectComboItem_MR;
module.exports.findToolTipOnView = findToolTipOnView;
module.exports.waitForObjectProperty = waitForObjectProperty;
module.exports.selectComboItem_CO = selectComboItem_CO;
module.exports.selectComboItem_FL = selectComboItem_FL;
module.exports.objectFocusClick = objectFocusClick;