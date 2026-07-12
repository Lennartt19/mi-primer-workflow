const { sumar } = require("./index");

if (sumar(2, 3) !== 5) {
    console.error("❌ La prueba falló");
    process.exit(1);
}

console.log("✅ Todas las pruebas pasaron");