const InmuebleModel = require("../models/inmueble.model");

const checkInmuebleId = async (req, res, next) => {
  const { InmuebleId } = req.params;

  try {
    const inmueble = await InmuebleModel.findById(InmuebleId);

    if (!inmueble) {
      return res.json({ fatal: "El inmueble no existe" });
    }
    next();
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const checkValoresBodyInmueble = (req, res, next) => {
  const body = req.body;
  if (isNaN(body[0].piso)) {
    return res.json({ fatal: "El piso no es numérico" });
  }
  if (typeof body[0].letra != "string") {
    return res.json({ fatal: "La letra es incorrecta" });
  }
  if (isNaN(body[0].extension)) {
    return res.json({ fatal: "La extensión no es numérica" });
  }
  if (isNaN(body[0].num_habitaciones)) {
    return res.json({ fatal: "El número de habitaciones no es numérico" });
  }
  if (typeof body[0].alquilado != "boolean") {
    return res.json({ fatal: "El dato de alquilado no es boolean" });
  }
  if (typeof body[0].nombre_propietario != "string") {
    return res.json({ fatal: "El nombre del propietario es incorrecto." });
  }
  if (typeof body[0].nombre_propietario != "string") {
    return res.json({ fatal: "El nombre del propietario es incorrecto." });
  }
  next();
};

module.exports = { checkInmuebleId, checkValoresBodyInmueble };
