# 🛒 Kiosco Master - Gestión Inteligente de Negocios

Una aplicación web completa para gestionar un kiosco, almacén o pequeño comercio. Panel de control para ventas, inventario, deudas de clientes y más.

## ✨ Características

- **📊 Dashboard**: Panel principal con estadísticas de ventas, stock bajo, deudas pendientes
- **🛒 Punto de Venta**: Sistema de venta con carrito y 4 métodos de pago (efectivo, transferencia, fiado, mixto)
- **📦 Inventario**: Gestión de productos con carga rápida por código de barras
- **💳 Cierre de Caja**: Conciliación diaria con desglose automático por método de pago
- **📔 La Libreta**: Gestión digital de deudas de clientes con historial de pagos
- **⚙️ Configuración**: Datos del negocio, Mercado Pago, WhatsApp, límites de fiado, respaldos

## 🚀 Inicio Rápido

1. Abre `index.html` en tu navegador (sin necesidad de servidor)
2. Los datos se guardan automáticamente en localStorage
3. Exporta backups desde Configuración → Seguridad

## 📊 Métodos de Pago Soportados

- **Efectivo**: Con cálculo automático de vuelto
- **Transferencia**: Almacena alias y CVU de Mercado Pago
- **Fiado**: Registra deudas de clientes con histórico de pagos
- **Mixto**: Combina efectivo + transferencia en una sola venta

## 📥 Importar Productos por CSV

La aplicación soporta importar productos desde un archivo CSV. Formato:

```
barcode,nombre,precio,categoria
7791234567890,Coca Cola 600ml,150,Bebidas
5901234567012,Leche 1L,180,Lácteos
```

Usa el archivo `ejemplo_productos.csv` como referencia.

## ⚡ Carga Rápida de Inventario

1. Importa tu CSV con códigos de barras
2. Usa el botón "⚡ Carga Rápida" en Inventario
3. Escanea códigos (o escribe manualmente)
4. Ingresa cantidad → Enter
5. Registra 100+ productos en 30-40 minutos con lector de barras

## 💾 Datos y Respaldos

- **Almacenamiento**: Todos los datos en localStorage del navegador
- **Respaldo**: Exporta JSON desde Configuración → Seguridad
- **Restauración**: Carga un respaldo anterior en cualquier momento

## 🛠️ Tecnología

- **React 18** (CDN via unpkg)
- **Babel Standalone** (Transpilación en cliente)
- **Lucide Icons** (Iconografía)
- **localStorage API** (Persistencia de datos)
- **CSS Grid/Flexbox** (Diseño responsivo)

## 📱 Compatibilidad

- ✅ Chrome/Edge (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Responsive (funciona en tablets)

## 📞 Características Opcionales

- **WhatsApp**: Alertas automáticas de stock bajo
- **Mercado Pago**: Integración para transferencias directas
- **Límites de Fiado**: Controla máximo de deuda por cliente

## 📄 Manual de Usuario

Consulta `Manual_de_Usuario.html` para un guía completa con ejemplos paso a paso.

## 📝 Licencia

Uso privado. Todos los derechos reservados.

---

**Versión**: 1.0.0 | **Última actualización**: Abril 2026
