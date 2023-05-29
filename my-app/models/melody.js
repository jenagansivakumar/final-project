import { Schema, model, models } from "mongoose";

const MelodySchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  melody: {
    type: String,
    required: [true, "Melody is required!"],
  },
  tag: {
    type: String,
    required: [true, "Tag is required!"],
  },
});

const Melody = models.Melody || model("Melody", MelodySchema);

export default Melody;
