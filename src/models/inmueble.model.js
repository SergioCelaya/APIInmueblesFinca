const { Schema, model } = require("mongoose");

const inmuebleSchema = new Schema(
  {
    piso: Number,
    letra: String,
    extension: Number,
    num_habitaciones: Number,
    alquilado: Boolean,
    nombre_propitario: String,
    email: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
module.exports = model("inmueble", inmuebleSchema);
