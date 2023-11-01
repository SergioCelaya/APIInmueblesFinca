const router = require('express').Router();

const InmueblesController = require('../../controllers/inmuebles.controller');

const { checkInmuebleId } = require('../../middlewares/inmuebles.middleware');

router.get('/', InmueblesController.getInmuebles);
router.get('/:InmuebleId', InmueblesController.getInmueblesById);
router.post('/', InmueblesController.createInmueble);
router.put('/:InmuebleId',checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:InmuebleId',checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;
