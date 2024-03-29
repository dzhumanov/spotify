import mongoose, { Schema, model } from "mongoose";

const ArtistSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
    },
    photo: {
      type: String,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    isPublished: {
      type: Boolean,
      default: false,
    },
  },
  {
    versionKey: false,
  }
);

const Artist = model("Artist", ArtistSchema);

export default Artist;
