# Colegio Militar General Santander - Sitio Web Completo con Chatbot

Este proyecto es una recreación avanzada del sitio web del Colegio Militar General Santander, desarrollado con Astro y Tailwind CSS, que incluye un chatbot interactivo y funcionalidades completas.

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
- **JavaScript** - Interactividad y funcionalidades dinámicas

## 📋 Características del Sitio Web

### Secciones Principales:
1. **Hero Section** - Presentación principal con lema institucional
2. **Nosotros** - Misión, visión y política de calidad
3. **Historia** - 59 años de trayectoria institucional
4. **Niveles Educativos** - Preescolar, Primaria, Básica y Media
5. **Carrusel de Instalaciones** - Galería interactiva de las instalaciones
6. **Galería Institucional** - Imágenes categorizadas por actividades
7. **Admisiones** - Proceso de inscripción y requisitos
8. **Contacto** - Información de contacto y formulario

### 🤖 Chatbot Inteligente (NUEVA FUNCIONALIDAD)

El chatbot incluye las siguientes funcionalidades:

#### Características del Chatbot:
- **Botón flotante** con las imágenes icon2023.png (hombre) e icon2025.png (mujer)
- **Cambio de género** del asistente virtual
- **Interfaz responsiva** que se adapta a dispositivos móviles
- **Paleta de colores personalizada**: 
  - Verde: `rgb(52, 183, 13)`
  - Rojo: `#dc3545`
  - Azul: `#5771FE`

#### Funcionalidades del Chatbot:

**1. Sistema PQR (Peticiones, Quejas y Reclamos)**
- Formulario completo con validación
- Campos: Nombres, Apellidos, Email, Teléfono
- Tipos: Petición, Queja, Reclamo, Sugerencia
- Áreas: Académica, Administrativa, Disciplinaria, Financiera, Servicios
- Generación automática de número de radicado
- Confirmación de envío con tiempos de respuesta

**2. Información Académica (Simulada)**
- Consulta de notas por períodos
- Reporte de comportamiento disciplinario
- Horarios de clase detallados
- Calendario académico con eventos

**3. Información Administrativa (Simulada)**
- Estado de pagos (matrículas y pensiones)
- Solicitud de documentos académicos
- Información sobre uniformes institucionales
- Detalles del servicio de transporte

### 🎨 Header Mejorado
- **Barra superior** con certificaciones ISO 9001:2015 e ICONTEC
- **Información de contacto** en la barra superior
- **Navegación fija** con efectos de scroll
- **Menú móvil** completamente funcional

### 🖼️ Carrusel de Instalaciones
- **5 slides** con instalaciones del colegio
- **Controles de navegación** (anterior/siguiente)
- **Indicadores visuales** y thumbnails
- **Auto-play** con pausa en hover
- **Soporte táctil** para dispositivos móviles
- **Animaciones suaves** y transiciones

### 🎭 Galería Filtrable
- **6 categorías** de filtrado:
  - Todas las imágenes
  - Actividades Académicas
  - Deportivas
  - Culturales  
  - Formación Militar
  - Eventos Especiales
- **Animaciones** de filtrado suaves
- **Efectos hover** en las tarjetas
- **Diseño responsivo** en grid

### Características Técnicas:
- ✅ Diseño completamente responsivo
- ✅ Chatbot interactivo con múltiples funcionalidades
- ✅ Navegación suave entre secciones
- ✅ Animaciones CSS personalizadas
- ✅ Efectos de hover y transiciones
- ✅ Formularios funcionales con validación
- ✅ Carrusel automático con controles manuales
- ✅ Galería filtrable por categorías
- ✅ Paleta de colores institucional
- ✅ Certificaciones visibles en header

## 🛠️ Instalación y Ejecución

### Prerequisitos:
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación:

1. **Navegar al directorio del proyecto:**
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
│   │   ├── Header.astro          # Navegación con certificaciones
│   │   ├── Footer.astro          # Pie de página completo
│   │   ├── Chatbot.astro         # Chatbot inteligente
│   │   ├── Carousel.astro        # Carrusel de instalaciones
│   │   └── Gallery.astro         # Galería filtrable
│   ├── layouts/
│   │   └── Layout.astro          # Layout principal
│   └── pages/
│       └── index.astro           # Página principal
├── public/
│   ├── favicon.svg               # Icono del sitio
│   ├── icon2023.png             # Avatar masculino del chatbot
│   └── icon2025.png             # Avatar femenino del chatbot
├── astro.config.mjs             # Configuración de Astro
├── tailwind.config.mjs          # Configuración de Tailwind
├── package.json                 # Dependencias del proyecto
└── README.md                    # Este archivo
```

## 🎨 Diseño y Estilo

### Paleta de Colores:
- **Azul Militar:** #1e40af (Primary)
- **Verde Institucional:** rgb(52, 183, 13) (Chatbot/Accent)
- **Rojo Alerta:** #dc3545 (Alertas/Errores)
- **Azul Especial:** #5771FE (Destacados)
- **Amarillo Dorado:** #eab308 (Accent secundario)
- **Gris Oscuro:** #0f172a (Secondary)

### Tipografías:
- **Inter:** Texto general, navegación, chatbot
- **Playfair Display:** Títulos y elementos destacados

### Componentes Visuales:
- Cards con efectos hover
- Gradientes militares
- Iconos SVG personalizados
- Animaciones suaves en scroll
- Chatbot con interfaz moderna
- Carrusel con controles avanzados
- Galería con filtros dinámicos

## 📱 Responsividad

El sitio está optimizado para:
- **Móviles:** 320px - 768px
- **Tablets:** 768px - 1024px  
- **Desktop:** 1024px+

### Chatbot Responsivo:
- En móviles: Ocupa casi toda la pantalla
- En desktop: Ventana flotante en esquina inferior derecha
- Controles táctiles optimizados

## 🤖 Uso del Chatbot

### Para activar el chatbot:
1. Click en el botón flotante (esquina inferior derecha)
2. Selecciona una opción del menú principal
3. Navega usando los botones de "atrás"

### Cambiar avatar del asistente:
- Click en el icono de configuración en el header del chat
- Alterna entre avatar masculino y femenino

### Funcionalidades disponibles:
- **PQR:** Formulario completo para quejas, peticiones y reclamos
- **Académico:** Notas, comportamiento, horarios, calendario
- **Administrativo:** Pagos, documentos, uniformes, transporte

## 🔧 Personalización

Para modificar el contenido o diseño:

1. **Contenido:** Editar `src/pages/index.astro`
2. **Chatbot:** Modificar `src/components/Chatbot.astro`
3. **Carrusel:** Actualizar `src/components/Carousel.astro`
4. **Galería:** Cambiar `src/components/Gallery.astro`
5. **Estilos:** Modificar `tailwind.config.mjs`
6. **Header:** Actualizar `src/components/Header.astro`

## 📞 Información de Contacto

- **Dirección:** Diagonal 32 #30a-05, Bucaramanga
- **Teléfono:** (607) 7008460 Ext - 2006
- **Móvil:** +57 301 718 9949
- **Email:** info@colmilgeneralsantander.edu.co

## 🏆 Lema Institucional

> "Patria, Superación y Orden"

## 🎯 Características Destacadas

### ✨ Nuevas Funcionalidades Implementadas:

1. **Chatbot Inteligente**
   - Sistema PQR completo
   - Información académica simulada
   - Información administrativa simulada
   - Cambio de avatar (masculino/femenino)

2. **Header Avanzado**
   - Certificaciones ISO e ICONTEC
   - Barra superior con contacto
   - Navegación mejorada

3. **Carrusel Interactivo**
   - 5 slides de instalaciones
   - Controles manuales y automáticos
   - Soporte táctil

4. **Galería Filtrable**
   - 6 categorías diferentes
   - Filtros dinámicos
   - Animaciones suaves

5. **Diseño Responsivo Completo**
   - Optimizado para todos los dispositivos
   - Interfaz moderna y atractiva
   - Colores institucionales

---

**Desarrollado con ❤️ usando Astro, Tailwind CSS y JavaScript vanilla**

*Este proyecto es una recreación completa del sitio web del Colegio Militar General Santander con chatbot inteligente y funcionalidades avanzadas para fines educativos y de demostración técnica.*

## 🚀 Próximas Mejoras Sugeridas

- Integración con backend real para el chatbot
- Base de datos para el sistema PQR
- Autenticación de usuarios
- Dashboard administrativo
- Notificaciones push
- Integración con sistemas académicos reales
