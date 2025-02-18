import surveyRepo from "../repositories/surveyRepo.js";

export const createSurvey = async (surveyData) => {
    return await surveyRepo.createSurvey(surveyData);
  };
  
 export const getAllSurveys = async () => {
    return await surveyRepo.getAllSurveys();
  };
  
 export const getSurveyById = async (id) => {
    return await surveyRepo.getSurveyById(id);
  };

export default {

    createSurvey,
    getAllSurveys,
    getSurveyById,

}

  