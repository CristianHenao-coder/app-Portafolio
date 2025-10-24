import { Schema, model, models } from "mongoose";

const ProjectSchema = new Schema(
  {
    
    title: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String},
    link: { type: String },

  },

  {
    timestamps: true,
    collection: "Projects",
  }
);

const Project = models.project || model("Projects", ProjectSchema);
export default Project;