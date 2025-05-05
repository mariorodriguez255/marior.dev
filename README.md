# Portfolio de Mario Rodriguez

Mi portafolio personal, diseñado y desarrollado por mí mismo. Construido con TypeScript, TailwindCSS y Astro para mostrar mis proyectos y habilidades de desarrollo web.

## Sobre este proyecto

Este portfolio ha sido creado para presentar mi trabajo como desarrollador y mostrar mis habilidades técnicas en un formato atractivo y funcional.

## Características principales

- Diseño adaptable a modo oscuro y claro
- Colores personalizados que reflejan mi identidad profesional
- Puntuación 95/100 en Lighthouse
- Totalmente accesible y responsive
- Desarrollado con TypeScript para mayor seguridad
- Optimizado para SEO
- Navegación intuitiva entre secciones

## Personalización

Todo el tema es completamente personalizable. He configurado el proyecto de una manera específica para facilitar su mantenimiento y actualización.

### Colores

Los colores del tema se pueden personalizar editando el archivo `src/styles/global.css`.
Este archivo utiliza Tailwind CSS y variables CSS para personalizar los colores.
Mi portafolio utiliza las siguientes variables CSS:

- `--color-zag-dark`: Color oscuro principal
- `--color-zag-light`: Color claro principal
- `--color-zag-dark-muted`: Color oscuro con ligera opacidad
- `--color-zag-light-muted`: Color claro con ligera opacidad
- `--color-zag-accent-light`: Color de acento claro
- `--color-zag-accent-light-muted`: Color de acento claro con ligera opacidad
- `--color-zag-accent-dark`: Color de acento oscuro
- `--color-zag-accent-dark-muted`: Color de acento oscuro con ligera opacidad

### Textos y contenido

El contenido textual del portafolio se puede modificar editando el archivo `src/lib/variables.ts`.
Este archivo contiene todo el texto utilizado a lo largo del tema.

Por ejemplo, puedes encontrar:

```typescript
export const GLOBAL = {
  // Información del sitio
  username: "Mario Rodriguez",

  // ...

  // Imagen de perfil
  profileImage: "profile.webp",

  // Elementos del menú
  menu: {
    home: "/",
    projects: "/projects",
    blog: "/blog",
  }
};
