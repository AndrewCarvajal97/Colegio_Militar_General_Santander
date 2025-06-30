# 🚀 Guía de Despliegue - GitHub Pages con CI/CD

## ✅ Configuraciones ya realizadas

Tu proyecto ya está configurado con:

- ✅ Workflow de GitHub Actions (`.github/workflows/deploy.yml`)
- ✅ Configuración de Astro para GitHub Pages (`astro.config.mjs`)
- ✅ Scripts optimizados en `package.json`
- ✅ `.gitignore` configurado correctamente

## 📝 Pasos para activar el despliegue automático

### 1. Actualizar la configuración del sitio

En el archivo `astro.config.mjs`, necesitas cambiar `YOUR_USERNAME` por tu nombre de usuario real de GitHub:

```javascript
site: 'https://TU_USUARIO_DE_GITHUB.github.io',
base: '/frontend_Hackaton',
```

**Ejemplo:** Si tu usuario es "john-doe", debe quedar:
```javascript
site: 'https://john-doe.github.io',
base: '/frontend_Hackaton',
```

### 2. Configurar GitHub Pages en tu repositorio

1. Ve a tu repositorio en GitHub
2. Haz clic en **Settings** (Configuración)
3. En el menú lateral, busca **Pages**
4. En **Source**, selecciona **GitHub Actions**
5. Guarda los cambios

### 3. Verificar permisos del repositorio

Asegúrate de que tu repositorio tenga los permisos correctos:

1. Ve a **Settings** > **Actions** > **General**
2. En **Workflow permissions**, selecciona:
   - ✅ **Read and write permissions**
   - ✅ **Allow GitHub Actions to create and approve pull requests**

### 4. Hacer push de los cambios

```bash
git add .
git commit -m "feat: configure CI/CD for GitHub Pages deployment"
git push origin main
```

### 5. Verificar el despliegue

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Una vez completado (✅ verde), tu sitio estará disponible en:
   `https://TU_USUARIO.github.io/frontend_Hackaton`

## 🔧 Comandos útiles para desarrollo

```bash
# Desarrollo local
npm run dev

# Build de producción local (para probar)
npm run build:prod

# Vista previa del build
npm run preview

# Limpiar archivos de build
npm run clean

# Verificar tipos (si tienes TypeScript)
npm run type-check
```

## 🛠️ Solución de problemas comunes

### Problema: El sitio no carga correctamente
**Solución:** Verifica que el `base` en `astro.config.mjs` coincida exactamente con el nombre de tu repositorio.

### Problema: Recursos (CSS/JS) no se cargan
**Solución:** Los paths relativos deberían funcionar automáticamente con la configuración actual.

### Problema: El workflow falla
**Solución:** 
1. Verifica que el repositorio tenga permisos de escritura para Actions
2. Asegúrate de que el branch principal se llame "main" (no "master")

### Problema: Changes no se reflejan
**Solución:** 
1. Espera 1-2 minutos después del despliegue
2. Fuerza la recarga del navegador (Ctrl+F5)
3. Verifica que el commit haya trigger el workflow

## 📁 Estructura de archivos de despliegue

```
frontend_Hackaton/
├── .github/
│   └── workflows/
│       └── deploy.yml          # ← Workflow de CI/CD
├── astro.config.mjs           # ← Configuración para Pages
├── package.json               # ← Scripts optimizados
└── [resto del proyecto...]
```

## 🌟 Características del despliegue automático

- ✅ **Trigger automático:** Se despliega en cada push a `main`
- ✅ **Despliegue manual:** Puedes activarlo desde la pestaña Actions
- ✅ **Build optimizado:** Usa el comando de producción de Astro
- ✅ **Caché inteligente:** Acelera builds subsecuentes
- ✅ **Detección automática:** Detecta si usas npm o yarn
- ✅ **Manejo de errores:** Logs detallados en caso de fallos

## 🎯 URLs finales

Una vez desplegado:

- **Sitio principal:** `https://TU_USUARIO.github.io/frontend_Hackaton`
- **Repositorio:** `https://github.com/TU_USUARIO/frontend_Hackaton`
- **Actions:** `https://github.com/TU_USUARIO/frontend_Hackaton/actions`

## 📞 Próximos pasos recomendados

1. **Dominio personalizado** (opcional): Puedes configurar un dominio propio en Settings > Pages
2. **HTTPS forzado**: GitHub Pages incluye HTTPS automáticamente
3. **Monitoreo**: Revisa periódicamente la pestaña Actions para ver el estado de los despliegues
4. **Optimización**: Considera agregar herramientas como Lighthouse CI para medir performance

---

**¡Tu proyecto está listo para desplegarse automáticamente! 🎉**

Solo recuerda actualizar `YOUR_USERNAME` en `astro.config.mjs` y seguir los pasos de configuración en GitHub.
