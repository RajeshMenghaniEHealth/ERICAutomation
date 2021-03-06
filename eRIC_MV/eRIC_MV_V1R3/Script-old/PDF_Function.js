var mvObjects = require("mvObjects");
var Data = require("Data");
//var PDF_Function = require("PDF_Function");


function Debug ()
{
//test app 


//var vProcess = Sys.Process("iMDSoft.Metavision");
exestatus = true;
//vProcess = Sys.Process("iMDSoft.Metavision");
var imagepath = "C:\\tmp\\TC013"
aqFileSystem.DeleteFolder(imagepath,true);
aqFileSystem.CreateFolder(imagepath);
//exestatus = mvObjects.selectMenuOption(exestatus,"Medical","eHOC");
}

function debug2()
{



var docObj =  loadDocument("C:\\Users\\60167354\\Desktop\\Report.pdf");
textStripperObj = JavaClasses.org_apache_pdfbox_util.PDFTextStripper.newInstance();
text = textStripperObj.getText_2(docObj);

catalog = docObj.getDocumentCatalog();

// Get the page collection
pageArray = catalog.getAllPages();
// Get information about the document
info = docObj.getDocumentInformation();

// Log the total number of pages to the log
Log.Message("Pages: " + docObj.getNumberOfPages());


// Log the title of the document to the log
Log.Message("Title: " + info.getTitle());

// Log the author of the document to the log
Log.Message("Author: " + info.getAuthor()); 
// Log the creator of the document to the log
Log.Message("Creator: " + info.getCreator());

// Log the date and time when the document was created in the local settings
Log.Message("Creation Date: " + info.getCreationDate().getTime().toLocaleString());
Log.Message("Modification Date: " + info.getModificationDate().getTime().toLocaleString());

Log.Message("details",text);

// Get the desired page
var pageObj1,pageObj2,pageObj3,imgMap1,imgMap2,imgMap3,imgArray1,imgArray2,imgArray3,imageObj1,imageObj2,imageObj3,imageObj4;
 pageObj1 = getPage(docObj, 1);
 pageObj2 = getPage(docObj, 2);
 pageObj2 = getPage(docObj, 2);
 pageObj3 = getPage(docObj, 3);
 
// Obtain HashMap of the images from the specified page
imgMap1 = pageObj1.getResources().getXObjects();
imgMap2 = pageObj2.getResources().getXObjects();
imgMap2 = pageObj2.getResources().getXObjects();
imgMap3 = pageObj3.getResources().getXObjects();

// Get an array of the images
imgArray1 = imgMap1.values().toArray();
imgArray2 = imgMap2.values().toArray();
imgArray2 = imgMap2.values().toArray();
imgArray3 = imgMap3.values().toArray();

// Loop through the images on a page
//imageObj = imgArray.items(imgIndex);
//for (i=0; i < imgArray.length();i++)
//{{
//////  // Get an image
//imageObj = imgArray.items(i);
////////
//}

// Get all the images by its index
imageObj1 = imgArray1.items(0);
imageObj2 = imgArray2.items(0);
imageObj3 = imgArray2.items(1);
imageObj4 = imgArray3.items(0);

//Saving all the Images
imageObj1.write2file_2("C:\\Users\\60167354\\Desktop\\Work\\Pulse and Respiratory Rate");
imageObj2.write2file_2("C:\\Users\\60167354\\Desktop\\Work\\Non Invasive Blood Pressure");
imageObj3.write2file_2("C:\\Users\\60167354\\Desktop\\Work\\Invasive Blood Pressure");
imageObj4.write2file_2("C:\\Users\\60167354\\Desktop\\Work\\Temperature");

  }


function getPage(docObj, pageIndex)
{
  var pageArray, pageObj;

  // Obtain a collection of the pages 
  pageArray = docObj.getDocumentCatalog().getAllPages();
   Log.Message("Length of pageArray "+pageArray.Count);
 

  // Obtain the specified page
  pageObj =  pageArray.get(pageIndex);

  // Return the result
  return pageObj;

}

 
 
function loadDocument(fileName)
{
  var docObj;

  // Load the PDF file to the PDDocument object
  
   //   docObj = JavaClasses.org_apache_pdfbox_pdmodel.PDDocument

  docObj = JavaClasses.org_apache_pdfbox_pdmodel.PDDocument.load_3(fileName);

  // Return the resulting PDDocument object
  return docObj;
}


//******************************************************************************************//
//******************************************************************************************//
// Name :DeletingFiles
// Desc :Function for Deleting the PDF file which is Saved on the Script run 
// Owner :Sangiliraja J
// Creation date:Jan 31, 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function DeletingFiles()
{
var sPath = "C:\\Users\\60167354\\Desktop\\Test\\Report.pdf";

// Deletes the files
aqFile.Delete(sPath);

//The following line deletes pdf files placed in the Test folder
aqFileSystem.DeleteFile("C:\\Users\\60167354\\Desktop\\Test\\Report.pdf")

//The following line deletes all files with the .tmp extension from the Test folder
aqFileSystem.DeleteFile("C:\\Users\\60167354\\Desktop\\Test\\*.tmp")

}
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
//******************************************************************************************//
// Name :findTextallpages
// Desc :Function to get all pages in PDF file and search the specified string in the extracted content 
// Owner :Satheeshkumar C 
// Creation date:30-Jan-2018
// Update By : 
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function findTextallpages(filepath,pageIndex,searchtext,exestatus)
{
  if (equal(exestatus,true)) 
    {
      var docObj =  loadDocument(filepath);
      textStripperObj = JavaClasses.org_apache_pdfbox_util.PDFTextStripper.newInstance();
      textStripperObj.setSortByPosition(true);
      text = textStripperObj.getText_2(docObj);
      
         if  (pageIndex === null || pageIndex === "" || pageIndex === undefined) 
         {
            // To get no of pages
                   var pagecount = docObj.getNumberOfPages();
                   Log.Message("No of pages in file : " +pagecount );
                   var pagecontent= [];
           // To search through all the pages in file  
                  for (var i=1; i<=pagecount; i++){
                  textStripperObj.setStartPage(i);
                  textStripperObj.setEndPage(i);
   
                  pagecontent[i] = textStripperObj.getText_2(docObj);
                  Log.Message("Details :" + pagecontent[i] );
   
                 if (aqString.Find(pagecontent[i],searchtext)> -1){
                  Log.CheckPoint("Document contains specified value " +searchtext+ " in all the pages");
                  exestatus = true;
                   }
                   else{
                       Log.Error("Document does not contain specified value " +searchtext+ " in all the pages");
                       exestatus = false;
                   }
               } 
          }  
           else
            { 
            // To search the specified values in single page
                  textStripperObj.setStartPage(pageIndex);
                  textStripperObj.setEndPage(pageIndex);
   
                  var pagecontent = textStripperObj.getText_2(docObj);
                  Log.Message("Details :" + pagecontent);
   
                 if (aqString.Find(pagecontent,searchtext)> -1){
                  Log.CheckPoint("Document contains specified value "  +searchtext+ "in given pages");
                  exestatus = true;
                   }
                   else{
                       Log.Error("Document does not contain specified value "  +searchtext+ "in given pages");
                     exestatus = false;  
                   }
              }
              
    }
     else{
       Log.Message("findTextallpages","The action is skipped since the execution status is set as '"+exestatus+"'");
 
       } 
 return exestatus ; 
}

//******************************************************************************************//
//******************************************************************************************//


//******************************************************************************************//
//******************************************************************************************//
// Name :findtext
// Desc :Function to extract the text between two specified limits and comparing with expected values 
// Owner :Satheeshkumar C 
// Creation date:30-Jan-2018
// Update By : 
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function findtext (filepath,starttext,endtext,searchtext,exestatus){

  if (equal(exestatus,true)){
      var docObj =  loadDocument(filepath);
      textStripperObj = JavaClasses.org_apache_pdfbox_util.PDFTextStripper.newInstance();
      textStripperObj.setSortByPosition(true);
      text = textStripperObj.getText_2(docObj);
      
    var startposition = aqString.Find(text,starttext);
    var endposition = aqString.Find(text,endtext);
         
         if (startposition != -1 && endposition != -1 && endposition >startposition )
         {
          var extText =  text.substring(startposition,endposition);
             if (aqString.Find(extText,searchtext)> -1){
                  Log.CheckPoint("Document contains specified value: " + searchtext + " inbetween " + starttext + " and " +endtext );
                  exestatus = true;
               }else{
                  Log.Error("Document does not contain specified value: " + searchtext + " inbetween " + starttext + " and " +endtext);
                  exestatus = false;
                  }
         }else
             {
             Log.Error("Specified starttext " + starttext + " and endtext " +endtext+" values are not present in PDF")
             exestatus = false;
             }
     
  
  }
  else{
  Log.Message("findText","The action is skipped since the execution status is set as '"+exestatus+"'");
  }
return exestatus ;  
  
}

//******************************************************************************************//
//******************************************************************************************//




//******************************************************************************************//
//******************************************************************************************//




//******************************************************************************************//
//******************************************************************************************//

// Name :getImage 
// Desc :Function for getting all the images on the pdf
// Owner :Sangiliraja J
// Creation date:Jan 31, 2018
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function getImage(FilePath,ImageFolderPath,ImageFilePath1,ImageFilePath2,ImageFilePath3,ImageFilePath4,exestatus)
{
if (equal(exestatus,true)) 
    
{
      var docObj =  loadDocument(FilePath);
      textStripperObj = JavaClasses.org_apache_pdfbox_util.PDFTextStripper.newInstance();
      
var pageObj1,pageObj2,pageObj3,imgMap1,imgMap2,imgMap3,imgArray1,imgArray2,imgArray3,imageObj1,imageObj2,imageObj3,imageObj4;
 pageObj1 = getPage(docObj, 1);
 pageObj2 = getPage(docObj, 2);
 pageObj2 = getPage(docObj, 2);
 pageObj3 = getPage(docObj, 3);
 
// Obtain HashMap of the images from the specified page
imgMap1 = pageObj1.getResources().getXObjects();
imgMap2 = pageObj2.getResources().getXObjects();
imgMap2 = pageObj2.getResources().getXObjects();
imgMap3 = pageObj3.getResources().getXObjects();

// Get an array of the images
imgArray1 = imgMap1.values().toArray();
imgArray2 = imgMap2.values().toArray();
imgArray2 = imgMap2.values().toArray();
imgArray3 = imgMap3.values().toArray();

// Get all the images by its index
imageObj1 = imgArray1.items(0);
imageObj2 = imgArray2.items(0);
imageObj3 = imgArray2.items(1);
imageObj4 = imgArray3.items(0);
if (aqFileSystem.Exists(ImageFolderPath))
{
aqFileSystem.DeleteFolder(ImageFolderPath,true)
aqFileSystem.CreateFolder(ImageFolderPath)
//Saving all the Images
imageObj1.write2file_2(ImageFilePath1);
imageObj2.write2file_2(ImageFilePath2);
imageObj3.write2file_2(ImageFilePath3);
imageObj4.write2file_2(ImageFilePath4);

}
else (aqFileSystem.CreateFolder(ImageFolderPath))
{

//Saving all the Images
imageObj1.write2file_2(ImageFilePath1);
imageObj2.write2file_2(ImageFilePath2);
imageObj3.write2file_2(ImageFilePath3);
imageObj4.write2file_2(ImageFilePath4);
}
  // Log the total number of pages to the log
Log.Message("Total number Pages in pdf: " + docObj.getNumberOfPages());

}
     
else{
       Log.Message("Getting all eHOC Images","The action is skipped since the execution status is set as '"+exestatus+"'");
 
     }   
 return exestatus ; 
}


//******************************************************************************************//
//******************************************************************************************//

//******************************************************************************************//
//******************************************************************************************//

// Name :ConvertActualPdftoImage 
// Desc :Function to convert the eNMIC test PDF file to Images and save in the specified folder
// Owner :Jyoti Sonar
// Creation date:Feb 07, 2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function ConvertActualPdftoImage(TestName, pageIndex)
{
  
var docObj;
var pageObj0, imgBuffer1, imgFile, imgFormat, pageIndex, pictureObj;
var pagecount = 2;
//pageIndex = 0;

var pdffilename = Data.getData(TestName,"eNMIC","FileName");
var pdffilepath = Data.getData(TestName,"eNMIC","Folderpath");
var pfname = Data.getData(TestName,"eNMIC","ActualFileName");   //PDF eNMIC file from test run
var imgfolderpath = Data.getData(TestName,"eNMIC","ImageFolderPath");
var ImgFileName = Data.getData(TestName,"eNMIC","ActualImgFileName");   //Image filename after converting the PDF to image

docObj = PDF_Function.loadDocument(pfname);

// Get the desired page
pageObj0 = PDF_Function.getPage(docObj, pageIndex);

    
// Convert the page to image data
  imgBuffer1 = pageObj0.convertToImage();
  
  //concat the pageIndex to create new images for each page in the PDF.
  var timgname = aqString.SubString(ImgFileName, 0, aqString.GetLength(ImgFileName)-4);
  var imgFile1 = aqString.Concat(timgname, pageIndex);
  ImgFileName = aqString.Concat(imgFile1, ".bmp");
  
  Log.Message("Image Filename is "+ImgFileName);

  // Create a new file to save
  imgFile = JavaClasses.java_io.File.newInstance(ImgFileName);
   

  // Get the image format from the name
  imgFormat = aqString.SubString(ImgFileName, aqString.GetLength(ImgFileName)-3, 3);
  
  // Save the image to the created file
  JavaClasses.javax_imageio.ImageIO.write(imgBuffer1, imgFormat, imgFile);
  Log.Message("Image File is saved to "+imgfolderpath+"with name as "+imgFile);

  // Create a Picture object
  pictureObj = Utils.Picture;

  // Load the image as a picture
  pictureObj.LoadFromFile(ImgFileName);
  Log.Message("Image loaded "+pictureObj);
  

  // Return the picture object
  return pictureObj; 

}

//******************************************************************************************//
//******************************************************************************************//

// Name :ConvertSourcePdftoImage 
// Desc :Function to convert the the expected eNMIC PDF file to Images and save in the specified folder. This file needs to be saved for 
// Owner :Jyoti Sonar
// Creation date:Feb 08, 2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//


function ConvertSourcePdftoImage(TestName, pageIndex)
{
  
var docObj;
var pageObj0, imgBuffer1, imgFile, imgFormat, pageIndex, pictureObj;
var pagecount = 2;
//pageIndex = 0;

var pdffilename = Data.getData(TestName,"eNMIC","FileName");
var pdffilepath = Data.getData(TestName,"eNMIC","Folderpath");
var pfname = Data.getData(TestName,"eNMIC","SourceFileName");   //Expected result for PDF eNMIC file. The has to be downloaded and saved under the test folder.
var imgfolderpath = Data.getData(TestName,"eNMIC","ImageFolderPath");
var ImgFileName = Data.getData(TestName,"eNMIC","SourceImgFileName");   //Image filename after converting the expected eNMIC PDF to image.

docObj = PDF_Function.loadDocument(pfname);

// Get the desired page
pageObj0 = PDF_Function.getPage(docObj, pageIndex);

    
// Convert the page to image data
  imgBuffer1 = pageObj0.convertToImage();
  
  //concat the pageIndex to create new images for each page in the PDF.
  var timgname = aqString.SubString(ImgFileName, 0, aqString.GetLength(ImgFileName)-4);
  var imgFile1 = aqString.Concat(timgname, pageIndex);
  ImgFileName = aqString.Concat(imgFile1, ".bmp");
  
  Log.Message("Image Filename is "+ImgFileName);

  // Create a new file to save
  imgFile = JavaClasses.java_io.File.newInstance(ImgFileName);
   

  // Get the image format from the name
  imgFormat = aqString.SubString(ImgFileName, aqString.GetLength(ImgFileName)-3, 3);
  
  // Save the image to the created file
  JavaClasses.javax_imageio.ImageIO.write(imgBuffer1, imgFormat, imgFile);
  Log.Message("Image File is saved to "+imgfolderpath+"with name as "+imgFile);

  // Create a Picture object
  pictureObj = Utils.Picture;

  // Load the image as a picture
  pictureObj.LoadFromFile(ImgFileName);
  Log.Message("Image loaded "+pictureObj);
  

  // Return the picture object
  return pictureObj; 

}

//******************************************************************************************//
//******************************************************************************************//

// Name :compareimg 
// Desc :Function to compare the source image and the expected image.
// Owner :Jyoti Sonar
// Creation date:Feb 08, 2019
// Update By :
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//

function compareimg(Actualpic, Sourcepic, ApictureObj1, SourcepicObj1, i)
{
    // Compare two images
      if (!Actualpic.Compare(Sourcepic, false, 200, false, 15))
      {
        // If the images are different...
        // Post image differences to the log
        Log.Picture(Actualpic.Difference(Sourcepic, false, 5, false, 5));

        // Post a warning message
        Log.Warning("Pages " + aqConvert.IntToStr(i+1) + " are different. eNMIC Documents are different.");

        // Break the loop
        //break;
      } else
      {
        // Post a message that the pages are equal
        Log.Message("Page " + aqConvert.IntToStr(i+1) + " matches.");
      }
}

module.exports.findtext = findtext;
module.exports.compareimg = compareimg;
module.exports.ConvertActualPdftoImage = ConvertActualPdftoImage;
module.exports.ConvertSourcePdftoImage = ConvertSourcePdftoImage;
module.exports.findTextallpages = findTextallpages;
module.exports.DeletingFiles = DeletingFiles;
module.exports.getImage = getImage;
module.exports.getPage = getPage;
module.exports.loadDocument = loadDocument;
module.exports.ConvertSourcePdftoImage = ConvertSourcePdftoImage;