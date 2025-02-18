import express from "express";
import adminController from "../controller/admin.controller.js";
import adminAuth from "../middleware/adminAuth.js";
import surveyController from "../controller/surveyController.js";

const router = express.Router();

// admin routes
router.post("/admin/login", adminController.adminLogin);
router.get("/admin/details", adminAuth, adminController.getAdminDetails);
router.post("/admin/logout", adminController.logoutAdmin);

// survey routes
router.post("/create/survey", surveyController.createSurvey);
router.get("/survey/details", surveyController.getAllSurveys)



export default router;