import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import AdminRepository from "../repositories/adminRepo.js"; // Repository layer
import { attachTokenToCookie } from "../utils/attachToken.js";


export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
   
    const admin = await AdminRepository.findAdminByEmail(email);
    console.log(admin, 'adminnnn');
    
    if (!admin) {
      return res.status(401).json({ message: "Invalid email credentials" });
    }

    const isMatch = password===admin.password;
    console.log(isMatch)
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password credentials" });
    }

    // Generate token
    const payload = { id: admin._id, role: "admin" };
    const accessToken = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "15m" });

   
    attachTokenToCookie(res, accessToken);

    res.status(200).json({ message: "Login successful", admin });
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error", error });
  }
};

export const getAdminDetails = async (req, res) => {
  try {
    const admin = await AdminRepository.findById(req.admin.id);
    if (!admin) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const logoutAdmin = (req, res) => {
  res.clearCookie("accessToken");
  res.status(200).json({ message: "Logged out successfully" });
};

export default {
    adminLogin,
    getAdminDetails,
    logoutAdmin,
}