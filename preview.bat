@echo off
cd /d "%~dp0"
where py >nul 2>nul && (py preview.py) || (python preview.py)
pause
