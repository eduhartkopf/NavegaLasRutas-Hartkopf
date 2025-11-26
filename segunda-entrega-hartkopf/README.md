# E-Commerce React – Proyecto Académico

Este proyecto es una aplicación de e-commerce desarrollada con React y Vite. Forma parte de una entrega académica cuyo objetivo es implementar un catálogo de productos, navegación mediante React Router, páginas dinámicas y conexión con Firestore para la carga manual de productos e imágenes.

La app permite recorrer categorías, ver detalles de productos, agregarlos al carrito, gestionar cantidades, y navegar entre distintas rutas. También integra un modo claro/oscuro mediante Context API.

## Características principales

- Catálogo completo de productos.

- Filtro por categorías desde la barra de navegación.

- Sistema de rutas configurado con React Router.

- Página de detalles de cada producto.

- Carrito de compras totalmente funcional.

- Persistencia de datos mediante JSON y posteriormente Firestore.

- Implementación de Theme Context para modo claro/oscuro.

- Componentes reutilizables organizados por carpetas.

- Integración con Firebase Storage para las imágenes.

- Configuración lista para escalar a checkout, login y más.

## Tecnologías utilizadas

- React

- Vite

- React Router

- Firebase (Firestore)

- Context API

- Lucide React Icons

- CSS personalizado + Bootstrap en algunas vistas

- JSON estático como base de datos inicial

## Instalación

- Clonar el repositorio.

- Instalar dependencias con el administrador de paquetes correspondiente.

- Iniciar el servidor de desarrollo.

- Abrir la aplicación en el puerto asignado por Vite.

- Configurar variables de entorno si se utiliza Firebase.

- Enlazar imágenes en Firebase Storage o ImgBB y vincular las URLs en Firestore.

## Estructura del proyecto

El proyecto está dividido en carpetas organizadas que facilitan la lectura y el mantenimiento:

Componentes para navegación, catálogo, carrito, tarjetas y vistas específicas.

- Context para gestionar el tema claro/oscuro.

- Carpeta de data para productos en JSON.

- Archivo principal con la configuración de rutas.

- Estilos modulares para cada componente.

## Carga manual de productos en Firestore

El proyecto utiliza una carga manual para asegurar control y evitar errores siendo la primera integración con Firebase. El proceso consiste en:

- Subir las imágenes a Firebase Storage o ImgBB.

- Copiar la URL de cada imagen.

- Crear documentos dentro de la colección correspondiente.

- Completar los campos como título, precio, descripción, categoría, stock, imagen, destacado, etc.

- Guardar y verificar que las imágenes carguen correctamente en la app.

## Modo claro/oscuro

La app incluye un Theme Context personalizado que permite:

- Cambiar el tema desde un botón en la barra de navegación.

- Aplicar clases light y dark de forma dinámica.

- Mantener la UI consistente en todas las rutas.

## Objetivos de la entrega académica

- Aplicar conceptos de React moderno.

- Implementar navegación real con React Router.

- Comprender cómo dividir una aplicación en componentes reutilizables.

- Practicar consumo de datos locales y remotos.

- Incorporar una base de datos en la nube mediante Firebase.

- Desarrollar habilidades reales para un proyecto escalable.

## Estado del proyecto

Actualmente en desarrollo activo. Se continúa ampliando:

- Optimización del carrito.

- Mejora del componente de categorías.

- Integración progresiva con Firestore.

- Ajustes visuales en modo oscuro.

- Preparación para checkout y futuros módulos de autenticación.

## Licencia

Uso académico. Puede reutilizarse, modificarse y expandirse libremente.
