# Proyecto WEB SCRAPPING
WEB SCRAPPING + API REST

## Origen de datos
- https://www.librerias-picasso.com/libros-de/lenguajes-de-programacion-2314/

## Librerías necesarias
- Node.js (versión v20.11.0)
- MongoDB
- npm (gestor de paquetes de Node.js)

## Instalación
1. Clona el repositorio:
    ```sh
    git clone https://github.com/yeckdemies/Proyecto_9.git
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd Proyecto_9
    ```
3. Instala las dependencias:
    ```sh
    npm install
    ```

## Extracción de datos: método Web Scrapping
1. Lanzamos el siguiente script
    ```sh
    npm run scrapping
    ```
Este proceso crea el archivo productos.json en el mismo directorio donde lo ejecutamos.

## ¡Importante!
Antes de realizar carga de datos es necesario extraer primero los datos. 

## Carga inicial de datos (Opcional)
En este proyecto se pueden cargar los datos a través del API como se indicará posteriormente o usando la semilla.
1. Navega al directorio seeds
    ```sh
    cd Proyecto_9/src/utils/
    ```
2. Ejecuta la semilla
    ```sh
    node seed.js
    ```
## Iniciar API en Desarrollo
1. Inicia el servidor en modo desarrollo:
    ```sh
    npm run dev
    ```
    
## Rutas API
1. Insertar Productos
- `POST http://localhost:3000/api/v1/products/createProducts`

2. Consultar Productos
- `GET http://localhost:3000/api/v1/products`

## Validación
Para validar que todo funciona correctamente, con Postman o Insomnia puedes hacer peticiones a las rutas de la API.

## Paquetes Necesarios
- `express`: Framework para construir aplicaciones web y APIs.
- `mongoose`: ODM (Object Data Modeling) para MongoDB y Node.js.
- `dotenv`: Cargar variables de entorno desde un archivo `.env`.
- `puppeteer`: Para la realización de scrapping.

