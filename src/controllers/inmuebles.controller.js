const InmuebleModel = require("../models/inmueble.model");

const getInmuebles = async (req, res) => {
  try {
    const inmuebles = await InmuebleModel.find();
    res.json(inmuebles);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const getInmueblesById = async (req, res) => {
  try {
    const { InmuebleId } = req.params;
    const inmueble = await InmuebleModel.findById(InmuebleId);
    if (!inmueble) {
      res.json({ fatal: "No existe el inmueble" });
    } else {
      res.json(inmueble);
    }
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const createInmueble = async (req, res) => {
  try {
    const result = await InmuebleModel.create(req.body);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const updateInmueble = async (req, res) => {
  try {
    const { InmuebleId } = req.params;
    const result = await InmuebleModel.findByIdAndUpdate(InmuebleId, req.body, {
      new: true,
    });
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

const deleteInmueble = async (req, res) => {
  try {
    const { InmuebleId } = req.params;
    const result = await InmuebleModel.findByIdAndDelete(InmuebleId);
    res.json(result);
  } catch (error) {
    res.json({ fatal: error.message });
  }
};

module.exports = {
  getInmuebles,
  createInmueble,
  updateInmueble,
  deleteInmueble,
  getInmueblesById,
};
