const router = require("express").Router();

const InmueblesController = require("../../controllers/inmuebles.controller");

const {
  checkInmuebleId,
  checkValoresBodyInmueble,
} = require("../../middlewares/inmuebles.middleware");

//GEt
router.get("/", InmueblesController.getInmuebles);
router.get("/:InmuebleId", InmueblesController.getInmueblesById);
//Post
router.post("/", checkValoresBodyInmueble, InmueblesController.createInmueble);
//PUT
router.put("/:InmuebleId", checkInmuebleId, InmueblesController.updateInmueble);
//DELETE
router.delete("/:InmuebleId", checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;
