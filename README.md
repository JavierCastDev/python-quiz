🐍 Python Certification App

Una Single Page Application (SPA) interactiva diseñada para evaluar conocimientos de Python, proporcionar retroalimentación inmediata y generar certificados personalizados de manera dinámica.

🔗 Ver Demo en Vivo

https://javiercastdev.github.io/python-quiz/


✨ Características Principales

⚡ Arquitectura SPA (Single Page Application): Navegación fluida entre la bienvenida, el cuestionario y los resultados sin recargas de página, manipulando el DOM con JavaScript puro.

🧠 Banco de Preguntas Completo: 50 preguntas que abarcan desde sintaxis básica hasta conceptos avanzados de Python.

🎨 UI/UX Moderna:

Diseño totalmente responsivo (Mobile-First).

Animaciones CSS avanzadas (Botón con borde de neón giratorio usando conic-gradient).

Feedback visual inmediato (acierto/error) al seleccionar respuestas.

🏆 Certificados Dinámicos:

Generación de imágenes en el cliente usando la librería html2canvas.

IDs Únicos: Algoritmo para generar folios de certificación únicos (ej: PY-8392-X7).

Firma digital basada en el host de despliegue.

📈 Sistema de Recomendaciones: Lógica que identifica los temas fallados y sugiere áreas de estudio específicas al usuario.

🛠️ Tecnologías Utilizadas

Este proyecto fue construido con un enfoque en los fundamentos del desarrollo web, evitando el uso excesivo de frameworks para demostrar dominio del lenguaje base.

HTML5 Semántico: Estructura clara y accesible.

CSS3 Moderno: Variables CSS (:root), Flexbox, Grid, Animaciones (@keyframes) y Media Queries.

JavaScript (ES6+):

Manipulación del DOM.

Manejo de Eventos.

Lógica de estado local.

Funciones asíncronas para la generación de imágenes.

Librerías Externas:

html2canvas: Para renderizar el nodo HTML del certificado como una imagen PNG descargable.

🚀 Instalación y Uso Local

Si deseas clonar y ejecutar este proyecto en tu máquina local:

Clonar el repositorio:

git clone [https://github.com/JavierCastDev/python-quiz.git](https://github.com/JavierCastDev/python-quiz.git)


Navegar a la carpeta:

cd python-quiz-app


Ejecutar:

Simplemente abre el archivo index.html en tu navegador favorito.

Nota: Para que la firma del certificado muestre el hostname correctamente, se recomienda usar una extensión como "Live Server" en VS Code, aunque funciona perfectamente abriendo el archivo directo.

💡 Aprendizajes Clave

Durante el desarrollo de este proyecto, se abordaron varios desafíos técnicos:

Generación de Imágenes en el Cliente: Implementar html2canvas requirió asegurar que los estilos CSS fueran compatibles y manejar la asincronía para evitar descargas vacías.

Gestión de Estado sin Backend: Mantener el puntaje y los temas incorrectos en memoria durante la sesión del usuario.

Animaciones de Alto Rendimiento: Crear el efecto de "borde neón" en el botón de inicio utilizando conic-gradient y máscaras CSS para un rendimiento óptimo de 60fps.

Validación de Datos: Asegurar la integridad de los IDs generados y manejar casos borde (como usuarios sin nombre).

⚖️ Licencia y Legal

Este proyecto está bajo la Licencia MIT.

Nota Legal: El logo de Python es una marca registrada de la Python Software Foundation (PSF). Este proyecto es educativo, con fines de portafolio y no está afiliado ni respaldado oficialmente por la PSF.

Hecho con 💻 y 🐍 por [].
