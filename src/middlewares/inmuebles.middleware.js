const InmuebleModel = require("../models/inmueble.model");

/**
 * Middleware para verificar la existencia de un inmueble por su ID en la base de datos.
 * Este middleware busca un inmueble en la base de datos utilizando el ID proporcionado en los parámetros de la solicitud (req.params).
 * Si el inmueble no se encuentra, responde con un mensaje de error.
 *
 * @param {object} req - Objeto de solicitud Express.js que debe contener el parámetro 'InmuebleId'.
 * @param {object} res - Objeto de respuesta Express.js.
 * @param {function} next - Función para pasar el control al siguiente middleware o ruta si el inmueble existe.
 *
 */
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

/**
 * Middleware para verificar los valores en el cuerpo de la solicitud (req.body) relacionados con un inmueble.
 * Este middleware se asegura de que los datos cumplan con ciertas condiciones antes de permitir que la solicitud continúe.
 *
 * @param {object} req - Objeto de solicitud Express.js.
 * @param {object} res - Objeto de respuesta Express.js.
 * @param {function} next - Función para pasar el control al siguiente middleware o ruta.
 *
 */
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
