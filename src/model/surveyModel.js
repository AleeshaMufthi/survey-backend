import mongoose from "mongoose";


const surveySchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  nationality: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  address: { type: String, required: true },
  message: { type: String, required: true },
}, { timestamps: true });

const surveyModel = mongoose.model("Survey", surveySchema);
export default surveyModel