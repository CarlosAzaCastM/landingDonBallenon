# Don Ballenón — Landing Page Oficial (Sucursal Av. Las Américas)

Landing page estática de alto rendimiento para el restaurante y marisquería costera **Don Ballenón** (`Av. Las Américas #206, Col. Las Américas, C.P. 20239, Aguascalientes, Ags., México`).

## Concepto y Diseño Visual

- **Dirección Creativa:** *Despacho Costero y Cartelera de Cervecería Al Fresco*.
- **Paleta de Colores:** Inspirada en la etiqueta clásica de **Cerveza Pacífico** (`#F5B800` Amarillo Pacífico, `#0A2342` Azul Marino de Puerto, `#C83E2B` Rojo Ancla y `#F4F7FA` Blanco Sal Marina).
- **Interactividad (React Bits):**
  - `BlurTextHeading`: Titular interactivo con refracción suave y curva exponencial compatible con SSR.
  - `InteractiveMenuBoard`: Tablero de cocina y barra con efecto *Spotlight* al paso del cursor, filtrado por tiempos y calculadora en tiempo real de **"Tu Comanda de Mesa"** con envío directo por WhatsApp.
  - `LivePortStatus`: Indicador en vivo de apertura de cocina/terraza y ambiente musical según el día de la semana en horario de Aguascalientes (`America/Mexico_City`).
- **SEO Local:** HTML5 semántico, meta etiquetas geográficas (`MX-AGU`), Open Graph y marcado estructurado JSON-LD (`Restaurant` + `BarOrPub` + `Menu` + `AggregateRating`).

## Stack Técnico

- [Astro 5](https://astro.build/)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [React 19](https://react.dev/) (Islas estáticas selectivas)

## Comandos del Proyecto

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar versión de producción estática
npm run build

# Previsualizar build de producción
npm run preview
```
