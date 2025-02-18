import adminModel from "../model/adminModel.js";

export const findAdminByEmail = async (email) => {
  console.log('inside repo');
  
    return await adminModel.findOne({ email });
  };
  
export const findAdminById = async (id) => {
    return await adminModel.findById(id).select("-password");
  };

export default {
    findAdminByEmail,
    findAdminById
}