// Find the web page object and then click it
//******************************************************************************************//
//******************************************************************************************//
function clickWebObject(webPage, propertyName, propertyValue, exestatus, TagName) 
{
  if (equal(exestatus,true))
  {
    if(TagName == undefined)
    {
      var webObject = webPage.NativeWebObject.Find(propertyName, propertyValue);
    }
    else
    {
      var webObject = webPage.NativeWebObject.Find(propertyName, propertyValue, TagName);
    }
  
    if(webObject.Exists)
    {
      if (webObject.VisibleOnScreen && webObject.Enabled)
      {
        Log.Message("Object found & enabled on screen!");
      }  
      aqUtils.Delay(1000);  
      webObject.Click();
      exestatus = true;
    }
  }
  
  return exestatus;
} 
//******************************************************************************************//
//******************************************************************************************//

// Find the web page object and then enter text 
//******************************************************************************************//
//******************************************************************************************//
function insertTextWebObject(webPage, propertyName, propertyValue, inputText, exestatus) 
{
  if (equal(exestatus,true))
  {
    var webObject = webPage.NativeWebObject.Find(propertyName, propertyValue);
      
    if(webObject.Exists)
    {
      if (webObject.VisibleOnScreen && webObject.Enabled)
      {
        Log.Message("Object found & enabled on screen!");
      }    
      webObject.Click();
      webObject.SetText(inputText);
      exestatus = true;
    }
  }  
  return exestatus;
} 
//******************************************************************************************//
//******************************************************************************************//

// Find the web page object and then get text 
//******************************************************************************************//
//******************************************************************************************//
function getTextFromWebObject(webPage, propertyName, propertyValue, exestatus) 
{
  if (equal(exestatus,true))
  {
    var webObject = webPage.NativeWebObject.Find(propertyName, propertyValue);
      
    if(webObject.Exists)
    {
      if (webObject.VisibleOnScreen && webObject.Enabled)
      {
        Log.Message("Object found & enabled on screen!");
      }    
      return webObject.Text;
    }
  }  
  return exestatus;
} 
//******************************************************************************************//
//******************************************************************************************//

//Find an element in the dropdown and scroll it till it is visible
//******************************************************************************************
//******************************************************************************************
function selectDropDownItem(webPage, propertyName, propertyValue, count, exestatus) 
{
  if (equal(exestatus,true))
  {
    
    //Click the down arrow if the item is down the list
    //Temp solution
    //Scroll down till the element is visible for selection
    //var downArrow = webPage.NativeWebObject.Find("style", "OVERFLOW: auto; HEIGHT: 150px; WIDTH: 178px");
    
    if(count < 5)
    {
      var element = webPage.FindChild(propertyName, propertyValue, 10);
      if(element.VisibleOnScreen)
      {
        element.Click();
      }
    }
    else
    {
      var panel; 
    
      for(i=5; i<count; i++)
      {
         
        panel = Aliases.browser.pageOperationalReportReportViewe.formReportviewerform.panelDivdropdown.panel;
        panel.Click(166, 108);        
      }
      panel.checkboxMroInIcu.ClickChecked(true);
      
      var element = webPage.FindChild(propertyName, propertyValue, 10);
      if(element.VisibleOnScreen)
      {
        element.Click();
      }
    }
  
  
    /*var element = webPage.FindChild(propertyName, propertyValue, 10);
    
    if(element.VisibleOnScreen)
    {
      element.Click();
    }
    else
    {
      //Scroll down till the element is visible for selection
      var downArrow = webPage.NativeWebObject.Find("style", "OVERFLOW: auto; HEIGHT: 150px; WIDTH: 178px");
      
      do{
          if(downArrow.VisibleOnScreen)
          {
            downArrow.Click();
          }
          var element = webPage.FindChild(propertyName, propertyValue, 10);
      }
      while(element.VisibleOnScreen)
      element.Click();
    }*/
      
  }
  
  return exestatus;
}

module.exports.clickWebObject = clickWebObject;
module.exports.insertTextWebObject = insertTextWebObject;
module.exports.selectDropDownItem = selectDropDownItem;