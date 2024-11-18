const fs = require("fs");

function registrar(nombre, edad, tipo, color, enfermedad) {
  const nuevaCita = { nombre, edad, tipo, color, enfermedad };

  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

  citas.push(nuevaCita);

  fs.writeFileSync("citas.json", JSON.stringify(citas, null, 2), "utf-8");
  console.log("Cita registrada con éxito:", nuevaCita);
}

function leer() {
  const citas = JSON.parse(fs.readFileSync("citas.json", "utf-8"));

  if (citas.length > 0) {
    console.log("Citas registradas:");
    citas.forEach((cita, index) => {
      console.log(`${index + 1}.`, cita);
    });
  } else {
    console.log("No hay citas registradas.");
  }
}

module.exports = { registrar, leer };
