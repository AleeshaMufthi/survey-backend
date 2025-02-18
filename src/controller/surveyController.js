import surveyService from "../service/surveyService.js";

export const createSurvey = async (req, res) => {
    try {
      const survey = await surveyService.createSurvey(req.body);
      res.status(201).json({ message: "Survey submitted successfully!", data: survey });
    } catch (error) {
      res.status(500).json({ error: "Failed to submit survey" });
    }
  };
  
export const getAllSurveys = async (req, res) => {
    try {
      const surveys = await surveyService.getAllSurveys();
      res.status(200).json(surveys);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch surveys" });
    }
  };
  
export const getSurveyById = async (req, res) => {
    try {
      const survey = await surveyService.getSurveyById(req.params.id);
      if (!survey) return res.status(404).json({ message: "Survey not found" });
      res.status(200).json(survey);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch survey" });
    }
  };

export default {
    createSurvey,
    getAllSurveys,
    getSurveyById,
}
  