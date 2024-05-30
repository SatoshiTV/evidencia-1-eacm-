const BaseDeDatos = [
    {
        id: 'a',
        nombre: "Juan",
        apellido: "Perez",
        edad: 66,
        profesion: "Ing Mecanico"
    },
    {
        id: 2,
        nombre: "Sofía",
        apellido: "Rodríguez",
        edad: 22,
        profesion: "Lic Marketing Digital"
    },
    {
        id: 3,
        nombre: "Mariana",
        apellido: "García",
        edad: 33,
        profesion: "Ing Sistemas Computacionales"
    },
    {
        id:4,
        nombre: null,
        apellido: "Martínez",
        edad: 18,
        profesion: "Ing Industrial"
    },
    {
        id:5,
        nombre: "Valentina",
        apellido: "Gómez",
        edad: 26,
        profesion: "Lic Derecho"
    },
    {
        id:6,
        nombre: "Alejandro",
        apellido: "Flores",
        edad: 17,
        profesion: null
    },
];

function validarRegistros() {
    const registrosCorrectos = [];
    const registrosIncorrectos = [];

    BaseDeDatos.forEach(registro => {
        if (!registro.nombre || !registro.id || typeof registro.id !== 'number' || registro.profesion === null) {
            registrosIncorrectos.push(registro);
        } else {
            registrosCorrectos.push(registro);
        }
    });

    return { registrosCorrectos, registrosIncorrectos };
}

function mostrarRegistros(tipo) {
    const { registrosCorrectos, registrosIncorrectos } = validarRegistros();

    let resultadosHTML = `<h2>Registros ${tipo === 'correctos' ? 'Correctos' : 'Incorrectos'}</h2>`;
    const registrosMostrar = tipo === 'correctos' ? registrosCorrectos : registrosIncorrectos;

    registrosMostrar.forEach(registro => {
        resultadosHTML += `<p>${JSON.stringify(registro)}</p>`;
    });

    document.getElementById('resultados').innerHTML = resultadosHTML;
}

document.getElementById('btnCorrectos').addEventListener('click', () => mostrarRegistros('correctos'));
document.getElementById('btnIncorrectos').addEventListener('click', () => mostrarRegistros('incorrectos'));
