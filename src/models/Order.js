const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Order = mongoose.model(
  "Order",
  new Schema(
    {
      name_order: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      priority: {
        type: String,
        required: true,
      },
      brand_machine: {
        type: String,
        required: true,
      },
      images: {
        type: Array,
        required: true,
      },
      available: {
        type: Boolean,
      },
      user: Object,
    },
    { timestamps: true }
  )
);

module.exports = Pet;
