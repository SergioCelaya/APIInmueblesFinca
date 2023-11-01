const router = require('express').Router();

const InmueblesController = require('../../controllers/inmuebles.controller');

//const { checkInmuebleId } = require('../../middlewares/Inmuebles.middleware');

router.get('/', InmueblesController.getInmuebles);
router.post('/', InmueblesController.createInmueble);
router.put('/:InmuebleId', InmueblesController.updateInmueble);
router.delete('/:InmuebleId', InmueblesController.deleteInmueble);

module.exports = router;
