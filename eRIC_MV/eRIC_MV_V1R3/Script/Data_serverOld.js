function Check ()
{

UpdateData("CMP1_TC001","Navigation","UserID","60103654");
var objData = getData("CMP3_TC035","Medications","quantity")
user = objData
Log.Message(user);

} 


//******************************************************************************************//
//******************************************************************************************//
// Name :getData
// Desc :Function to fetch the data from the datasheet
// Owner :Arul 
// Creation date:May 2017
// Update By : 
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function getData(TestName,SheetName,ColName)
{
TestName = TestName.trim();
SheetName = SheetName.trim();
ColName = ColName.trim();

var cn = ADO.CreateConnection();
var rs = ADO.CreateRecordset();
//var strConn = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source = "+Project.Path +"..\\..\\eRIC_TestAutomation_Data.xls;Persist Security Info=False;Extended Properties=Excel 8.0;"
var strConn = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source = "+Project.Path +"..\\..\\eRIC_TestAutomation_Data.xls;Persist Security Info=False;Extended Properties=\"Excel 8.0;HDR=Yes;IMEX=1;\""
cn.Open(strConn);
var SQL = "select * from ["+SheetName+"$] where TC_NAME = '"+ TestName+"'";
rs.Open(SQL, cn);
if(rs.bof)
{
Log.Message("No data","The testcase '"+ TestName+"' do not have data in the sheet '"+SheetName+"'")
}
if(!rs.bof)
{
rs.MoveFirst()
while(!rs.eof)
{

//Log.message(rs.Properties.Item(2))

//return rs.fields.Item
//break;
//for(var i=1; i!= rs.fields.count; ++i)
//{
var strVal = rs.fields.Item(ColName).Value;
if (typeof strVal === 'string' || strVal instanceof String)
{
strVal = (strVal.trim());
}

break;
//Log.Message(strVal);
//}
//Log.Message("<br />");
//rs.MoveNext()
}
}
rs.Close();
cn.Close();
return strVal;

}
//******************************************************************************************//
//******************************************************************************************//
// Name :UpdateData
// Desc :Function to update the data from the datasheet
// Owner :Arul 
// Creation date:May 2017
// Update By : 
// Update date:
// Update desc:
//******************************************************************************************//
//******************************************************************************************//
function UpdateData(TestName,SheetName,ColName,Value)
{
TestName = TestName.trim();
SheetName = SheetName.trim();

var cn = ADO.CreateConnection();
var strConn = "Provider=Microsoft.Jet.OLEDB.4.0;Data Source = "+Project.Path +"..\\..\\eRIC_TestAutomation_Data.xls;Persist Security Info=False;Extended Properties=Excel 8.0;"
cn.Open(strConn);
var rs = ADO.CreateRecordset();
var SQL = "UPDATE ["+SheetName+"$] SET ["+ColName+"] = '"+Value+"' where TC_NAME = '"+ TestName+"'";
rs.Open(SQL, cn);
cn.Close();
}
//******************************************************************************************//
//******************************************************************************************//


module.exports.getData = getData;
module.exports.UpdateData = UpdateData;