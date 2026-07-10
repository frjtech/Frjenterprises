# FRJ Enterprises LLC — Sitio Web

Sitio web estático (HTML/CSS/JS puro, sin frameworks ni costo de hosting) para FRJ Enterprises LLC, dirigido a vendedores que operan en Ayiti (Haití). Contenido en Kreyòl Ayisyen.

## Estructura

```
index.html          Página de inicio
shein.html           Servicio: comprar en Shein (formulario -> WhatsApp)
shipping.html         Directorio de agencias de envío (placeholder, editar)
shop.html            Catálogo "Shop Now" (placeholder, editar)
assets/css/style.css   Estilos
assets/js/config.js     Configuración central (WhatsApp, email, redes)
assets/js/main.js      Lógica (menú móvil, links de WhatsApp, filtros, formulario)
```

## Primeros pasos para personalizar

1. **Abre `assets/js/config.js`** y reemplaza:
   - `whatsapp`: tu número de WhatsApp Business con código de país, sin `+` ni espacios (ej. Haití: `509XXXXXXXX`, USA: `1XXXXXXXXXX`).
   - `email`, `instagram`, `facebook`, `location` con tus datos reales.

2. **Edita `shipping.html`**: las 4 tarjetas de agencias son ejemplos (`Ajans Livrezon #1-4`). Reemplázalas con las agencias reales que usas — nombre, teléfono/WhatsApp, ruta, tiempo de entrega. El botón "Kontakte Ajans" (`href="#"`) debe apuntar al WhatsApp o teléfono real de cada agencia.

3. **Edita `shop.html`**: las tarjetas de productos son ejemplos con emojis en lugar de fotos. Para usar fotos reales:
   - Crea una carpeta `assets/img/`, sube tus fotos ahí.
   - Reemplaza el `<div class="product-thumb">...emoji...</div>` por `<img src="assets/img/tu-foto.jpg" alt="...">`.
   - Actualiza nombre y precio en `<h4>` y `<div class="price">`.

4. **Formulario de Shein** (`shein.html`): no requiere servidor — al enviarlo, abre WhatsApp con el mensaje ya redactado con los datos del cliente.

## Cómo publicarlo gratis

**Opción A — GitHub Pages:**
1. Sube este repositorio a GitHub (rama `main`).
2. Ve a Settings → Pages → Source → selecciona la rama `main` y carpeta `/ (root)`.
3. Tu sitio queda en `https://<usuario>.github.io/<repositorio>/`.

**Opción B — Vercel/Netlify:** conecta el repositorio y despliega como sitio estático (sin build command necesario).

## Próximos pasos sugeridos

- Reemplazar los datos de contacto de ejemplo por los reales.
- Añadir fotos reales de los productos y agencias.
- Si más adelante quieres pagos en línea o carrito de compras, se puede migrar a Shopify u otra plataforma — este sitio está pensado como punto de partida simple y gratuito.
