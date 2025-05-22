# Colegio Militar General Santander - Sitio Web

Este proyecto es una recreación del sitio web del Colegio Militar General Santander, desarrollado con Astro y Tailwind CSS.

## 🏫 Acerca del Colegio

El Colegio Militar General Santander es una institución educativa fundada en 1965 por 24 militares retirados. Con 59 años de historia, la institución se dedica a formar líderes con responsabilidad social bajo el lema **"Patria, Superación y Orden"**.

### Características de la Institución:
- **Fundado:** 1965
- **Ubicación:** Diagonal 32 #30a-05, Bucaramanga, Santander
- **Niveles:** Preescolar, Primaria, Básica Secundaria, Media Vocacional
- **Enfoque:** Formación militar con énfasis en valores y disciplina
- **Graduación:** Bachilleres con grado de Sub-Tenientes de reserva

## 🚀 Tecnologías Utilizadas

- **Astro** - Framework web moderno
- **Tailwind CSS** - Framework de CSS utilitario
- **TypeScript** - Tipado estático
- **HTML5 & CSS3** - Tecnologías web estándar

## 📋 Características del Sitio Web

### Secciones Principales:
1. **Hero Section** - Presentación principal con lema institucional
2. **Nosotros** - Misión, visión y política de calidad
3. **Historia** - 59 años de trayectoria institucional
4. **Niveles Educativos** - Preescolar, Primaria, Básica y Media
5. **Admisiones** - Proceso de inscripción y requisitos
6. **Contacto** - Información de contacto y formulario

### Características Técnicas:
- ✅ Diseño responsivo (móvil, tablet, desktop)
- ✅ Navegación suave entre secciones
- ✅ Animaciones CSS personalizadas
- ✅ Efectos de hover interactivos
- ✅ Menú móvil funcional
- ✅ Formulario de contacto
- ✅ Paleta de colores militar (azul, amarillo, blanco)
- ✅ Tipografías profesionales (Inter, Playfair Display)

## 🛠️ Instalación y Ejecución

### Prerequisitos:
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación:

1. **Clonar o navegar al directorio del proyecto:**
   ```bash
   cd C:\Users\Usuario\Desktop\proyecto_hackaton
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

4. **Abrir el navegador:**
   - Ve a `http://localhost:3000`

### Comandos disponibles:

```bash
# Modo desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de la construcción
npm run preview
```

## 📁 Estructura del Proyecto

```
proyecto_hackaton/
├── src/
│   ├── components/
│   │   ├── Header.astro       # Navegación principal
│   │   └── Footer.astro       # Pie de página
│   ├── layouts/
│   │   └── Layout.astro       # Layout principal
│   └── pages/
│       └── index.astro        # Página principal
├── public/                    # Archivos estáticos
├── astro.config.mjs          # Configuración de Astro
├── tailwind.config.mjs       # Configuración de Tailwind
├── package.json              # Dependencias del proyecto
└── README.md                 # Este archivo
```

## 🎨 Diseño y Estilo

### Paleta de Colores:
- **Azul Militar:** #1e40af (Primary)
- **Amarillo Dorado:** #eab308 (Accent)
- **Gris Oscuro:** #0f172a (Secondary)
- **Blanco:** #ffffff (Background)

### Tipografías:
- **Inter:** Texto general, navegación
- **Playfair Display:** Títulos y elementos destacados

### Componentes Visuales:
- Cards con efectos hover
- Gradientes militares
- Iconos SVG personalizados
- Animaciones suaves en scroll
- Diseño de tarjetas elevadas

## 📱 Responsividad

El sitio está optimizado para:
- **Móviles:** 320px - 768px
- **Tablets:** 768px - 1024px
- **Desktop:** 1024px+

## 🔧 Personalización

Para modificar el contenido o diseño:

1. **Contenido:** Editar `src/pages/index.astro`
2. **Estilos:** Modificar `tailwind.config.mjs`
3. **Componentes:** Actualizar archivos en `src/components/`
4. **Layout:** Cambiar `src/layouts/Layout.astro`

## 📞 Información de Contacto (Ficticia para el Proyecto)

- **Dirección:** Diagonal 32 #30a-05, Bucaramanga
- **Teléfono:** (607) 7008460 Ext - 2006
- **Móvil:** +57 301 718 9949
- **Email:** info@colmilgeneralsantander.edu.co

## 🏆 Lema Institucional

> "Patria, Superación y Orden"

---

**Desarrollado con ❤️ usando Astro y Tailwind CSS**

*Este proyecto es una recreación educativa del sitio web del Colegio Militar General Santander con fines de demostración técnica.*
