import { model, Schema } from "mongoose";

const adminSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  });
  
const AdminModel=model("admin", adminSchema);
export default AdminModel