---
name: Don Ballenón
description: Sistema de diseño costero "al fresco" inspirado en la etiqueta clásica de Cerveza Pacífico y las carteleras de puerto.
colors:
  pacifico-gold: "#F5B800"
  pacifico-bright: "#FFCC00"
  pacifico-deep: "#E0A800"
  port-navy: "#0A2342"
  port-navy-elevated: "#12345E"
  port-navy-muted: "#173A66"
  seafoam-muted: "#C2D8F0"
  ancla-red: "#C83E2B"
  sea-salt-canvas: "#F4F7FA"
  crisp-white: "#FFFFFF"
  coastal-wash: "#E6EEF6"
typography:
  display:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "3.5rem"
    fontWeight: 800
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 800
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Bricolage Grotesque, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 800
    lineHeight: 1.15
  body:
    fontFamily: "Be Vietnam Pro, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "JetBrains Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: "6px"
  md: "12px"
  lg: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.port-navy}"
    textColor: "{colors.pacifico-gold}"
    rounded: "{rounded.md}"
    padding: "14px 24px"
  button-primary-hover:
    backgroundColor: "{colors.port-navy-elevated}"
  button-pacifico:
    backgroundColor: "{colors.pacifico-gold}"
    textColor: "{colors.port-navy}"
    rounded: "{rounded.md}"
    padding: "12px 20px"
  button-pacifico-hover:
    backgroundColor: "{colors.pacifico-bright}"
  card-cartela:
    backgroundColor: "{colors.crisp-white}"
    textColor: "{colors.port-navy}"
    rounded: "{rounded.lg}"
    padding: "24px"
---

# Design System: Don Ballenón

## Overview

**Creative North Star: "Despacho Costero y Cartelera de Cervecería Al Fresco"**

El sistema visual de Don Ballenón captura la energía luminosa de una terraza de mariscos a mediodía acompañada de una Cerveza Pacífico en formato Ballena servida al punto de nieve. En lugar de recurrir a plantillas oscuras de restaurante genérico o cuadrículas de tarjetas flotantes idénticas, la interfaz se estructura como un tablero de despacho portuario dividido en bandas horizontales francas con costuras visibles (`2px solid #0A2342`).

La autoridad cromática recae en el contraste directo entre el **Amarillo Cerveza Pacífico (`#F5B800`)** y el **Azul Marino de Puerto (`#0A2342`)** sobre un lienzo limpio de **Sal Marina (`#F4F7FA`)**, eliminando por completo los grises neutros y los fondos beige/crema genéricos.

**Key Characteristics:**
- Bandas horizontales continuas separadas por costuras estructurales de `2px solid #0A2342` que organizan la narrativa por tiempos.
- Jerarquía por inversión cromática directa entre campos bañados en Amarillo Pacífico y paneles de mando en Azul Marino Profundo.
- Tipografía expresiva de cartelera (`Bricolage Grotesque`) combinada con precisión tabular (`JetBrains Mono`) para precios, horarios y coordenadas GPS.
- Interactividad estática de alto valor (React Bits BlurText y Spotlight Ledger) que mantiene el contenido 100% visible desde el primer renderizado SSR.

## Colors

Una paleta solar de alto contraste inspirada en la iconografía cervecera de Mazatlán y las fachadas marítimas blanqueadas por la sal.

### Primary
- **Amarillo Cerveza Pacífico** (`#F5B800`): Color protagonista que baña el primer viewport, la cartelera musical y los sellos de autenticidad. Siempre lleva texto en Azul Marino de Puerto (`#0A2342`) para garantizar un contraste superior a 10:1.
- **Destello Solar Pacífico** (`#FFCC00`): Iluminación radial y estado activo/hover sobre controles amarillos.
- **Ámbar de Barril** (`#E0A800`): Tono periférico para degradados solares sutiles.

### Secondary
- **Azul Marino de Puerto** (`#0A2342`): Tinta tipográfica principal, bordes estructurales de `2px` y fondo de paneles invertidos (como el simulador de comanda y la bitácora de ubicación).
- **Azul Navío Elevado** (`#12345E`): Superficie secundaria dentro de bloques marinos oscuros.

### Tertiary
- **Rojo Ancla y Salsa Brava** (`#C83E2B`): Acento puntual reservado para anclas náuticas, indicadores de foco de teclado (`:focus-visible`) y detalles de alerta/picor.

### Neutral
- **Blanco Sal Marina** (`#F4F7FA`): Lienzo base luminoso y fresco que evita el cliché del fondo beige cálido.
- **Blanco Espuma** (`#FFFFFF`): Superficie elevada para el tablero de menú interactivo y las cartelas fotográficas.
- **Bruma de Muelle** (`#E6EEF6`): Fondo de contraste suave para separar cursos de contenido.
- **Azul Marino Atenuado** (`#173A66`): Tinta secundaria sobre fondos claros y amarillos (contraste > 6.7:1).
- **Espuma Celeste** (`#C2D8F0`): Tinta secundaria sobre fondos Azul Marino Profundo (contraste > 9.5:1).

### Named Rules
**The Navy-on-Gold Rule.** Jamás coloques texto blanco sobre Amarillo Pacífico (`#F5B800`); toda tipografía o iconografía sobre superficie amarilla utiliza exclusivamente Azul Marino de Puerto (`#0A2342`) o Azul Marino Atenuado (`#173A66`).

**The Zero-Gray Rule.** Queda prohibido el uso de escalas de gris neutras (`#666`, `slate`, `zinc`); todo texto secundario o borde sutil se tiñe con el matiz azul marino del puerto.

## Typography

**Display Font:** Bricolage Grotesque (con fallback a `system-ui, sans-serif`)
**Body Font:** Be Vietnam Pro (con fallback a `system-ui, sans-serif`)
**Label/Mono Font:** JetBrains Mono (`monospace`)

**Character:** Un maridaje entre la fuerza gráfica de los rótulos costeros mexicanos (`Bricolage Grotesque` en pesos 700–800) y la legibilidad geométrica contemporánea (`Be Vietnam Pro`), respaldado por cifras monoespaciadas (`JetBrains Mono`) para que precios, coordenadas y horarios se lean como una bitácora real.

### Hierarchy
- **Display** (`800`, `clamp(2.25rem, 4.5vw, 3.5rem)`, `line-height: 1.06`): Titular del primer viewport con `text-wrap: balance`.
- **Headline** (`800`, `clamp(1.875rem, 3.2vw, 3rem)`, `line-height: 1.08`): Encabezados de cada curso horizontal (`h2`).
- **Title** (`800`, `1.25rem – 1.5rem`, `line-height: 1.15`): Nombres de platillos, sesiones musicales y subtítulos de sección (`h3`).
- **Body** (`400 – 500`, `1rem`, `line-height: 1.6`): Descripciones gastronómicas y reseñas con ancho máximo de línea estricto de `60ch` y `text-wrap: pretty`.
- **Label** (`700`, `0.75rem`, `letter-spacing: 0.04em`): Sellos de puerto, precios en pesos mexicanos, coordenadas GPS y horarios con `font-variant-numeric: tabular-nums`.

### Named Rules
**The No-Kicker Rule.** Ningún encabezado (`h1`, `h2`, `h3`) lleva una etiqueta pequeña ("eyebrow" o "kicker") encima; el titular abre directamente el bloque con su propio peso visual.

**The 60ch Measure Rule.** Todo párrafo descriptivo y cita de reseña se restringe a un máximo de `60ch` con `text-wrap: pretty` para impedir líneas de más de 80 caracteres o palabras huérfanas al final del bloque.

## Layout

El layout se organiza como una secuencia de **Cursos Horizontales de Puerto** a ancho completo separados por costuras firmes (`border-bottom: 2px solid #0A2342`), con un contenedor central de `1280px` (`max-w-7xl`) y padding horizontal adaptable (`16px` en móvil, `24px` en tablet, `32px` en desktop).

En lugar de repetir rejillas de 3 tarjetas iguales, cada curso emplea una topología asimétrica distinta:
- **Primer Viewport (7 / 5 cols):** Titular interactivo y estado del puerto en vivo a la izquierda; cartela fotográfica tripartita con costuras internas a la derecha.
- **Ritual Costero (5 / 7 cols):** Panel invertido en Azul Marino a la izquierda y tres filas horizontales apiladas a la derecha.
- **Carta del Puerto (8 / 4 cols):** Tablero interactivo con Spotlight a la izquierda y calculadora de comanda fija (`sticky`) a la derecha.

## Elevation & Depth

El sistema utiliza una jerarquía híbrida de **costuras arquitectónicas de 2px** combinadas con sombras de elevación neutras y difusas. Se prohíben tanto las sombras duras neobrutalistas (`4px 4px 0`) como los resplandores cromáticos (`colored glow shadows`).

### Shadow Vocabulary
- **Shadow Coastal** (`box-shadow: 0 12px 28px -8px rgba(0, 0, 0, 0.12)`): Elevación estándar para la cartela principal y el tablero de menú.
- **Shadow Coastal Large** (`box-shadow: 0 20px 38px -12px rgba(0, 0, 0, 0.18)`): Elevación para el panel de comanda en mesa y los contenedores maestros.

### Named Rules
**The Neutral Shadow Rule.** Toda sombra proyectada usa exclusivamente negro translúcido neutro (`rgba(0, 0, 0, 0.12)`), nunca sombras coloreadas sobre fondos oscuros.

## Shapes

Bordes redondeados francos (`12px` en botones y controles, `16px` en tableros y cartelas) enmarcados por trazos sólidos de `2px` en Azul Marino de Puerto (`#0A2342`). Las divisiones internas dentro de un contenedor usan costuras de `1px` o `2px` de lado a lado en lugar de anidar cajas con borde dentro de otras cajas con borde.

## Components

### Buttons
- **Shape:** Esquinas redondeadas firmes (`12px` radius) con altura táctil mínima de `44px` a `52px`.
- **Primary:** Fondo Azul Marino de Puerto (`#0A2342`), texto Amarillo Pacífico (`#F5B800`), borde de `2px solid #0A2342`, padding `14px 24px`.
- **Hover / Focus:** Transición suave de color a `#12345E`; anillo `:focus-visible` de `3px solid #C83E2B` con `3px` de offset.
- **Secondary (Pacífico Gold):** Fondo Amarillo Pacífico (`#F5B800`), texto Azul Marino (`#0A2342`), hover en `#FFCC00`.

### Chips
- **Style:** Etiquetas de categoría y nivel de picor con esquinas de `6px` a `8px`, sin bordes anidados innecesarios, usando relleno `#E6EEF6` o `#F5B800` y texto `#0A2342`.
- **State:** En la barra de filtros (`tablist`), el tab activo toma fondo `#F5B800` y texto `#0A2342` sobre el riel `#0A2342`.

### Cards / Containers
- **Corner Style:** `16px` (`rounded-2xl`) en contenedores principales.
- **Background:** Blanco Espuma (`#FFFFFF`) o Azul Marino (`#0A2342`).
- **Shadow Strategy:** `var(--shadow-coastal)` acompañado de borde exterior `2px solid #0A2342`.
- **Internal Padding:** `24px` a `32px` (`p-6 sm:p-8`), dividiendo sub-elementos con `divide-y-2` en lugar de tarjetas internas.

### Navigation
- **Style:** Barra superior fija (`sticky top-0`) sobre fondo `#FFFFFF` con costura inferior `2px solid #0A2342`, emblema SVG de ballena enmarcado en amarillo `#F5B800`, enlaces con área táctil `>= 44px` y botón directo a Google Maps.

### Interactive Menu Board & Table Round Builder
- **Description:** Tablero interactivo React Bits con iluminación radial tipo Spotlight (`rgba(245, 184, 0, 0.22)`) que sigue el cursor, filtrado instantáneo por tiempos de cocina y calculadora en vivo ("Tu Comanda de Mesa") que genera un enlace pre-llenado de WhatsApp con el pedido y el total estimado en MXN.

## Do's and Don'ts

### Do:
- **Do** usar Amarillo Cerveza Pacífico (`#F5B800`) como campo cromático dominante en secciones clave con texto en Azul Marino (`#0A2342`).
- **Do** garantizar objetivos táctiles de al menos `44x44px` en todos los botones, filtros y controles de cantidad.
- **Do** aplicar `font-variant-numeric: tabular-nums` en todos los precios, horarios, calificaciones y coordenadas GPS.
- **Do** dividir el contenido interno de los paneles mediante líneas de costura (`divide-y`, `border-b`) en vez de anidar tarjetas.

### Don't:
- **Don't** colocar eyebrows o kickers por encima de los encabezados (`h1`, `h2`, `h3`).
- **Don't** anidar tarjetas con borde dentro de otras tarjetas con borde (`nested-cards`).
- **Don't** usar carruseles o marquees de desplazamiento infinito automático que oculten información o distraigan la lectura.
- **Don't** usar grises neutros ni fondos crema/beige por defecto (`#FAF3E0`).
