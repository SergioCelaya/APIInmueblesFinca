const InmuebleModel = require('../models/inmueble.model');

const checkInmuebleId = async (req, res, next) => {
    const { InmuebleId } = req.params;

    try {
        const inmueble = await InmuebleModel.findById(InmuebleId);

        if (!inmueble) {
            return res.json({ fatal: 'El inmueble no existe' });
        }
        next();
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { checkInmuebleId }