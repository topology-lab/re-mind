@echo off
setlocal ENABLEDELAYEDEXPANSION

cd %~dp0
for %%a in (%*) do (
	echo %%~na%%~xa
	set OUTFILE=%%~na.min%%~xa
	jpegtran -copy none -optimize -outfile "!OUTFILE!" %%a
)
exit