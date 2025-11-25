// --- BASE DE DATOS DE PREGUNTAS (50 PREGUNTAS) ---
const questions = [
    // --- BÁSICO: SINTAXIS Y TIPOS (1-10) ---
    { text: "¿Cuál es la salida de print(type(10))?", options: ["<class 'float'>", "<class 'int'>", "<class 'number'>", "<class 'integer'>"], answer: 1, topic: "Tipos de Datos" },
    { text: "¿Qué palabra reservada define una función?", options: ["func", "def", "function", "define"], answer: 1, topic: "Sintaxis Básica" },
    { text: "¿Cómo se inicia un comentario de una línea?", options: ["//", "/*", "#", "<!--"], answer: 2, topic: "Comentarios" },
    { text: "¿Cuál es el resultado de 10 // 3?", options: ["3.33", "3", "3.0", "4"], answer: 1, topic: "Operadores Aritméticos" },
    { text: "¿Qué estructura es inmutable?", options: ["Lista", "Diccionario", "Set", "Tupla"], answer: 3, topic: "Estructuras de Datos" },
    { text: "¿Qué operador se usa para potencias?", options: ["^", "**", "pow", "//"], answer: 1, topic: "Operadores Aritméticos" },
    { text: "¿Cómo se declara una variable booleana verdadera?", options: ["true", "True", "TRUE", "verdadero"], answer: 1, topic: "Tipos Booleanos" },
    { text: "¿Qué función convierte un string a entero?", options: ["str()", "parse()", "int()", "float()"], answer: 2, topic: "Casting" },
    { text: "¿Cuál es la sintaxis correcta para 'if'?", options: ["if x > 5:", "if (x > 5)", "if x > 5 then", "if x > 5;"], answer: 0, topic: "Control de Flujo" },
    { text: "¿Cómo se crea una lista vacía?", options: ["list = {}", "list = []", "list = ()", "list = new List"], answer: 1, topic: "Listas" },

    // --- INTERMEDIO: ESTRUCTURAS Y MÉTODOS (11-20) ---
    { text: "¿Qué método añade un elemento al final de una lista?", options: ["push()", "insert()", "add()", "append()"], answer: 3, topic: "Métodos de Listas" },
    { text: "¿Qué devuelve len('Python')?", options: ["6", "5", "7", "Error"], answer: 0, topic: "Funciones Built-in" },
    { text: "¿Cómo se manejan excepciones?", options: ["try/catch", "try/except", "do/rescue", "try/error"], answer: 1, topic: "Manejo de Errores" },
    { text: "¿Cómo se importa solo 'pi' de 'math'?", options: ["import math.pi", "from math import pi", "import pi from math", "using math.pi"], answer: 1, topic: "Módulos" },
    { text: "¿Qué hace strip() en un string?", options: ["Quita espacios extremos", "Quita todos espacios", "Divide el string", "Invierte"], answer: 0, topic: "Métodos de String" },
    { text: "¿Cuál NO es un tipo de dato en Python?", options: ["List", "Dictionary", "Tuple", "Array"], answer: 3, topic: "Tipos de Datos" },
    { text: "¿Cómo obtienes el último elemento de una lista 'L'?", options: ["L[last]", "L[-1]", "L[len(L)]", "L.end()"], answer: 1, topic: "Indexación" },
    { text: "¿Qué palabra clave detiene un bucle?", options: ["stop", "return", "break", "exit"], answer: 2, topic: "Control de Flujo" },
    { text: "¿Qué hace 'range(3)'?", options: ["Genera [1, 2, 3]", "Genera [0, 1, 2]", "Genera [0, 1, 2, 3]", "Error"], answer: 1, topic: "Bucles" },
    { text: "¿Qué operador verifica pertenencia en una lista?", options: ["exists", "inside", "in", "has"], answer: 2, topic: "Operadores Lógicos" },

    // --- INTERMEDIO-AVANZADO: FUNCIONES Y POO (21-30) ---
    { text: "¿Qué es una función Lambda?", options: ["Función con nombre", "Función anónima", "Un módulo", "Una clase"], answer: 1, topic: "Funciones Avanzadas" },
    { text: "¿Qué es '__init__' en una clase?", options: ["Destructor", "Constructor", "Método estático", "Variable global"], answer: 1, topic: "POO" },
    { text: "¿Qué significa 'self'?", options: ["Referencia a la clase", "Referencia a la instancia", "Palabra reservada del sistema", "Variable global"], answer: 1, topic: "POO" },
    { text: "¿Qué devuelve bool([])?", options: ["True", "False", "None", "Error"], answer: 1, topic: "Truthiness" },
    { text: "¿Qué estructura usa pares clave-valor?", options: ["Lista", "Tupla", "Diccionario", "Set"], answer: 2, topic: "Diccionarios" },
    { text: "¿Cómo se crea un Set vacío?", options: ["{}", "[]", "set()", "new Set()"], answer: 2, topic: "Sets" },
    { text: "¿Qué hace el operador 'is'?", options: ["Compara valores", "Compara identidades de objeto", "Asigna valor", "Verifica tipo"], answer: 1, topic: "Operadores de Identidad" },
    { text: "¿Qué es un decorador?", options: ["Comentario", "Función que modifica otra función", "Clase hija", "Variable estética"], answer: 1, topic: "Decoradores" },
    { text: "¿Qué hace 'pass'?", options: ["Termina el programa", "Nada (placeholder)", "Salta iteración", "Devuelve valor"], answer: 1, topic: "Control de Flujo" },
    { text: "¿Qué método une una lista de strings en uno solo?", options: ["concat()", "merge()", "join()", "append()"], answer: 2, topic: "Métodos de String" },

    // --- AVANZADO: CONCEPTOS PROFUNDOS (31-40) ---
    { text: "¿Qué es el GIL?", options: ["Global Interface Lock", "Global Interpreter Lock", "General Instruction List", "Graphic Interface Lib"], answer: 1, topic: "Concurrencia" },
    { text: "¿Qué es un generador?", options: ["Función con return", "Función con yield", "Lista grande", "Bucle infinito"], answer: 1, topic: "Generadores" },
    { text: "¿Qué es un 'list comprehension'?", options: ["Una lista comprimida", "Sintaxis corta para crear listas", "Un error de lista", "Una librería"], answer: 1, topic: "List Comprehension" },
    { text: "¿Cuál es mutable?", options: ["Tupla", "String", "Int", "Lista"], answer: 3, topic: "Mutabilidad" },
    { text: "¿Para qué sirve 'with open(...) as f'?", options: ["Cierra el archivo automáticamente", "Solo abre lectura", "Mejora velocidad", "Crea archivo temporal"], answer: 0, topic: "Manejo de Archivos" },
    { text: "¿Qué es *args?", options: ["Multiplica argumentos", "Argumentos variables posicionales", "Argumentos keywords", "Puntero"], answer: 1, topic: "Argumentos de Función" },
    { text: "¿Qué es **kwargs?", options: ["Potencia de argumentos", "Argumentos variables posicionales", "Argumentos variables con nombre", "Error"], answer: 2, topic: "Argumentos de Función" },
    { text: "¿Qué es PEP 8?", options: ["Nuevo Python", "Guía de estilo", "Librería estándar", "Compilador"], answer: 1, topic: "Estándares" },
    { text: "¿Qué librería se usa para ciencia de datos?", options: ["Django", "Flask", "Pandas", "PyGame"], answer: 2, topic: "Ecosistema" },
    { text: "¿Qué hace map(func, lista)?", options: ["Crea un mapa", "Aplica func a cada item de lista", "Filtra la lista", "Reduce la lista"], answer: 1, topic: "Programación Funcional" },

    // --- EXPERTO (41-50) ---
    { text: "¿Qué imprime: print(0.1 + 0.2 == 0.3)?", options: ["True", "False", "Error", "0.3"], answer: 1, topic: "Punto Flotante" },
    { text: "¿Qué estructura es LIFO?", options: ["Cola", "Pila (Stack)", "Set", "Diccionario"], answer: 1, topic: "Algoritmos" },
    { text: "¿Qué método elimina un item por valor?", options: ["del", "pop()", "remove()", "delete()"], answer: 2, topic: "Métodos de Listas" },
    { text: "¿Qué es un entorno virtual?", options: ["Máquina virtual", "Espacio aislado de dependencias", "Simulador online", "Juego"], answer: 1, topic: "Entornos" },
    { text: "¿Qué retorna 'type(type)'?", options: ["Error", "type", "class 'type'", "object"], answer: 2, topic: "Metaprogramación" },
    { text: "¿Cómo se invierte una lista 'L' rápidamente?", options: ["L.reverse()", "L[::-1]", "Ambas", "Ninguna"], answer: 2, topic: "Slicing" },
    { text: "¿Qué es PyPI?", options: ["Python Pie", "Python Package Index", "Python Private Interface", "Python Public Init"], answer: 1, topic: "Ecosistema" },
    { text: "¿Cuál es el operador ternario?", options: ["a ? b : c", "if a then b else c", "b if a else c", "a > b > c"], answer: 2, topic: "Sintaxis" },
    { text: "¿Qué es docstring?", options: ["Documento string", "String de documentación", "Variable string", "Archivo .doc"], answer: 1, topic: "Documentación" },
    { text: "¿Qué imprime print('a' * 3)?", options: ["aaa", "a*3", "Error", "97"], answer: 0, topic: "Operadores de String" }
];

// --- ESTADO DE LA APLICACIÓN ---
let currentQuestionIndex = 0;
let score = 0;
let incorrectTopics = new Set();
let userName = "";

// Referencias DOM
const btnStart = document.getElementById('btn-start');
const btnRestart = document.getElementById('btn-restart');
const btnDownload = document.getElementById('download-btn');
const usernameInput = document.getElementById('username');

const screens = {
    welcome: document.getElementById('screen-welcome'),
    quiz: document.getElementById('screen-quiz'),
    results: document.getElementById('screen-results')
};

// --- EVENT LISTENERS ---
btnStart.addEventListener('click', startQuiz);
btnRestart.addEventListener('click', () => location.reload());
btnDownload.addEventListener('click', generateCertificate);

// --- FUNCIONES ---

function startQuiz() {
    const name = usernameInput.value.trim();

    if (!name) {
        usernameInput.style.borderColor = "var(--danger)";
        usernameInput.placeholder = "¡Nombre requerido!";
        setTimeout(() => {
            usernameInput.style.borderColor = "#e0e0e0";
            usernameInput.placeholder = "Ingresa tu Nombre Completo";
        }, 2000);
        return;
    }

    userName = name;
    switchScreen('quiz');
    loadQuestion();
}

function switchScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        finishQuiz();
        return;
    }

    const q = questions[currentQuestionIndex];
    
    // UI Updates
    document.getElementById('question-text').innerText = q.text;
    document.getElementById('question-counter').innerText = `Pregunta ${currentQuestionIndex + 1}/${questions.length}`;
    
    // Score temporal
    document.getElementById('score-temp').innerText = `Score: ${score}`;
    
    // Barra de progreso
    const progressPct = ((currentQuestionIndex) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${progressPct}%`;

    // Generar Opciones
    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => handleAnswer(idx, btn, q);
        container.appendChild(btn);
    });
}

function handleAnswer(selectedIndex, btn, questionObj) {
    // Bloquear todos los botones
    const allBtns = document.querySelectorAll('.option-btn');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = selectedIndex === questionObj.answer;

    if (isCorrect) {
        btn.classList.add('correct');
        score += 2; 
        document.getElementById('score-temp').innerText = `Score: ${score}`;
    } else {
        btn.classList.add('incorrect');
        incorrectTopics.add(questionObj.topic);
        // Mostrar respuesta correcta
        allBtns[questionObj.answer].classList.add('correct');
    }

    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 1200);
}

function finishQuiz() {
    switchScreen('results');
    
    // Mostrar Score Final
    document.getElementById('final-score').innerText = score;

    // Mensajes y Estilos
    const msgEl = document.getElementById('result-message');
    const topicsPanel = document.getElementById('topics-panel');
    const topicsList = document.getElementById('topics-list');

    // Lógica para Certificado de calificación perfecta
    const maxScore = questions.length * 2;
    
    if (score === maxScore) {
        msgEl.innerHTML = "🏆 <strong>¡PERFECTO!</strong> Conocimiento nivel experto.";
        msgEl.style.color = "#d4af37";
        topicsPanel.style.display = 'none';
    } else if (score >= (maxScore * 0.8)) {
        msgEl.innerText = "¡Excelente trabajo! Tienes bases muy sólidas.";
        msgEl.style.color = "var(--success)";
    } else {
        msgEl.innerText = "Buen intento. Te recomendamos repasar los siguientes temas:";
        msgEl.style.color = "var(--dark-gray)";
    }

    // Listar temas a repasar
    if (incorrectTopics.size > 0 && score < maxScore) {
        topicsPanel.style.display = 'block';
        topicsList.innerHTML = '';
        incorrectTopics.forEach(topic => {
            const li = document.createElement('li');
            li.innerText = topic;
            topicsList.appendChild(li);
        });
    }
}

function generateCertificate() {
    const certNode = document.getElementById('certificate-node');
    const btnTextOriginal = btnDownload.innerText;

    // 1. Datos dinámicos
    document.getElementById('cert-name-display').innerText = userName;
    document.getElementById('cert-score-display').innerText = `Puntaje: ${score} / ${questions.length * 2}`;
    document.getElementById('cert-date').innerText = `Fecha: ${new Date().toLocaleDateString()}`;

    // 2. Elegir estilo (Gold vs Standard)
    const maxScore = questions.length * 2;
    if (score === maxScore) {
        certNode.className = 'certificate gold';
    } else {
        certNode.className = 'certificate standard';
    }

    // 3. Generar
    btnDownload.innerText = "Generando imagen...";
    btnDownload.disabled = true;

    // Timeout para asegurar renderizado del DOM oculto
    setTimeout(() => {
        html2canvas(certNode, {
            scale: 2, // Mejor calidad
            useCORS: true,
            backgroundColor: null
        }).then(canvas => {
            const link = document.createElement('a');
            const cleanName = userName.replace(/[^a-z0-9]/gi, '_').toLowerCase();
            link.download = `Certificado_Python_${cleanName}.png`;
            link.href = canvas.toDataURL("image/png");
            link.click();

            btnDownload.innerText = btnTextOriginal;
            btnDownload.disabled = false;
        }).catch(err => {
            console.error(err);
            alert("Error al generar imagen");
            btnDownload.innerText = btnTextOriginal;
            btnDownload.disabled = false;
        });
    }, 200);
}