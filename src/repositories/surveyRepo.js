import surveyModel from "../model/surveyModel.js";

export const createSurvey = async (surveyData) => {
    return await surveyModel.create(surveyData);
  };
  
 export const getAllSurveys = async () => {
    return await surveyModel.find();
  };
  
 export const getSurveyById = async (id) => {
    return await surveyModel.findById(id);
  };

  export default {
    createSurvey,
    getAllSurveys,
    getSurveyById
  }