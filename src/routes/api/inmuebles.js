const router = require("express").Router();

const InmueblesController = require("../../controllers/inmuebles.controller");

const {
  checkInmuebleId,
  checkValoresBodyInmueble,
} = require("../../middlewares/inmuebles.middleware");

//GET
router.get("/", InmueblesController.getInmuebles);
router.get("/:InmuebleId", InmueblesController.getInmueblesById);
//POST
router.post("/", checkValoresBodyInmueble, InmueblesController.createInmueble);
//PUT
router.put("/:InmuebleId", checkInmuebleId, InmueblesController.updateInmueble);
//DELETE
router.delete("/:InmuebleId", checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;
