call:killProcesses



::---------------------------------------------


::-- General functions-------------------


::---------------------------------------------


:killProcesses  - Wait 3 minutes before killing all tasks


echo.


echo Killing Excel, TestExecute and TestComplete...


echo.


taskkill  /fi "USERNAME eq adm_60201307" /im TestExecute.exe /t /f


taskkill /fi "USERNAME eq adm_60201307" /im TestComplete.exe /t /f


taskkill /fi "USERNAME eq adm_60201307" /im excel.exe /t /f


echo.


GOTO:EOF