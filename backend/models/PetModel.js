import mongoose from "mongoose";
import { optional, string } from "zod";

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["lost", "found", "adopt", "adopted"],
      required: true,
    },
    owner: {
      type: mongoose.Schema.Types.String,
      ref: "User",
      required: true,
    },
    date: {
      type: Date,
    },
    location: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.models.Pet || mongoose.model("Pet", petSchema);

export default Pet;
