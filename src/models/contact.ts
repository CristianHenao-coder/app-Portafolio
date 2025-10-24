import { Schema, model, models } from "mongoose";

const ContactSchema = new Schema(
  {

    firstName: { type: String, required: true },
    lastName: { type: String},
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String },
    message: { type: String }

  },
  
  {
    timestamps: true,
    collection: "Contacts",
  }
);

const Contact = models.Contacts || model("Contacts", ContactSchema);
export default Contact;