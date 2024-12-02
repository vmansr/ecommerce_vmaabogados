# E-Commerce - VMA Abogados Asociados SAS

Este proyecto es una plataforma de **e-commerce** que ofrece servicios jurídicos en diversas áreas como **consultas legales**, **liquidaciones** y **litigios** en las jurisdicciones **civiles**, **administrativas**, **familia**, **penales** y **laborales**. Este e-commerce permite a los usuarios agregar y ver productos o servicios jurídicos en una interfaz limpia y fácil de usar. 

El sistema también implementa un **CRUD** completo para gestionar productos (servicios legales) con la ayuda de **json-server** y la **Fetch API** para realizar solicitudes a la base de datos.

## Tecnologías Utilizadas

- **HTML5**: Para la estructura y la base del sitio web.
- **CSS3**: Para la creación de un diseño atractivo y responsivo.
- **JavaScript**: Para la lógica de interacción con el usuario y la manipulación del DOM.
- **json-server**: Para crear una API RESTful simulada que maneja las solicitudes **CRUD** (Crear, Leer, Actualizar, Eliminar).
- **Fetch API**: Para realizar las solicitudes HTTP y actualizar dinámicamente la interfaz del usuario.

## Instalación y Configuración

Sigue estos pasos para poner en marcha el proyecto en tu entorno local.

### 1. Clonar el Repositorio

Primero, clona el repositorio de GitHub:

### 2. Instalación de Dependencias
Este proyecto utiliza json-server para simular la API. Asegúrate de tener Node.js instalado en tu máquina.

En la carpeta del proyecto, ejecuta el siguiente comando para instalar las dependencias:

cd vma-abogados-ecommerce
npm install

### 3. Ejecutar el Servidor de Desarrollo
Para iniciar el servidor que manejará las solicitudes de la API (con json-server) y el servidor web, ejecuta:

npm run dev

Esto iniciará el servidor en http://localhost:3000. Puedes acceder a la página de tu e-commerce en el navegador.

### 4. Probar la Funcionalidad
- Agregar productos: Usa el formulario en la interfaz para agregar productos o servicios jurídicos relacionados con las consultas legales.
- Visualizar productos: Los productos agregados se mostrarán en la interfaz principal bajo la sección Mis Productos.
- Actualizar o eliminar productos: Los productos pueden ser modificados o eliminados desde la interfaz.

### Funcionalidades del Proyecto
1. Agregar Productos
Los administradores pueden agregar productos a través de un formulario en la interfaz. Cada producto tiene los siguientes atributos:

Nombre: Nombre del servicio jurídico (ej. "Consulta Legal").
Precio: El precio del servicio.
Imagen: La imagen que representa el servicio.

2. Mostrar Productos
Los productos agregados se muestran en una galería, con su nombre, precio e imagen. Los usuarios pueden ver todos los productos disponibles de manera sencilla.

3. CRUD con Fetch
El sistema implementa las operaciones CRUD (Crear, Leer, Actualizar, Eliminar) para gestionar los productos. Las solicitudes HTTP se manejan con la API Fetch de JavaScript, y los datos se almacenan en un archivo db.json administrado por json-server.

4. Validación del Formulario
El formulario de agregar productos incluye validación utilizando expresiones regulares para asegurarse de que los campos sean correctos. Los usuarios deben ingresar un nombre de producto válido, un precio correcto (número positivo) y una URL de imagen válida.

### Estructura del Proyecto
La estructura de carpetas y archivos del proyecto es la siguiente:

vma-abogados-ecommerce/
│
├── index.html       # Página principal del sitio
├── styles.css       # Archivo de estilos (CSS)
├── script.js        # Archivo JavaScript con la lógica de interacción
├── db.json          # Base de datos simulada por json-server
├── README.md        # Este archivo
└── package.json      # Archivo de configuración de dependencias

Este archivo `README.md` proporciona una descripción completa de cómo instalar, ejecutar y contribuir al proyecto. Además, incluye las tecnologías utilizadas y explica cómo personalizar el proyecto para adaptarlo a las necesidades específicas de la firma **VMA Abogados Asociados SAS**.



