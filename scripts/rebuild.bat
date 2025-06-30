@echo off
echo Limpiando directorios...
if exist dist rmdir /s /q dist
if exist .astro rmdir /s /q .astro

echo Instalando dependencias...
npm ci

echo Construyendo proyecto...
npm run build

echo Build completado!
echo Los archivos estan en el directorio 'dist'
pause
