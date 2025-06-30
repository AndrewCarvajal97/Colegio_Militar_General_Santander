@echo off
echo ========================================
echo    VERIFICACION PRE-DEPLOYMENT
echo ========================================

echo.
echo 1. Limpiando directorios antiguos...
if exist dist rmdir /s /q dist
if exist .astro rmdir /s /q .astro

echo.
echo 2. Instalando dependencias...
npm ci

echo.
echo 3. Ejecutando build...
npm run build

echo.
echo 4. Verificando estructura del dist...
if exist dist (
    echo ✓ Directorio dist creado
    if exist dist\_astro (
        echo ✓ Directorio _astro encontrado
    ) else (
        echo ✗ Directorio _astro NO encontrado
    )
    
    if exist dist\index.html (
        echo ✓ index.html encontrado
    ) else (
        echo ✗ index.html NO encontrado
    )
    
    if exist dist\.nojekyll (
        echo ✓ .nojekyll encontrado
    ) else (
        echo ✗ .nojekyll NO encontrado
    )
) else (
    echo ✗ Directorio dist NO fue creado
)

echo.
echo 5. Contando archivos en _astro...
for /f %%i in ('dir /b dist\_astro 2^>nul ^| find /c /v ""') do set count=%%i
echo Archivos encontrados: %count%

echo.
echo ========================================
echo    VERIFICACION COMPLETADA
echo ========================================
echo.
echo PROXIMOS PASOS:
echo 1. git add .
echo 2. git commit -m "fix: corregir paths para GitHub Pages"
echo 3. git push origin main
echo.
pause
