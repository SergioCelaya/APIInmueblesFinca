const { Schema, model } = require("mongoose");

const inmuebleSchema = new Schema(
  {
    piso: Number,
    letra: String,
    extension: Number,
    num_habitaciones: Number,
    alquilado: Boolean,
    nombre_propitario: String,
    email: {
      type: String,
      match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor,añade un email correcto.']}
  },
  {
    versionKey: false,
    timestamps: true,
    toJSON: {
      virtuals: true,
      transform: function (doc, ret) {
          delete ret.id;
      }
  }
  }
);

inmuebleSchema.virtual('extensionUnidades').get(function(){
  return `${this.extension} m2`;
})

module.exports = model("inmueble", inmuebleSchema);
