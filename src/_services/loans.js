import API from "../_api";
import message from "../_utilities/errorMessage";

export const getLoans = async () => {
   const response = await API.get("/loans");
   return response.data;
};

export const showLoan = async (slug) => {
   try {
      const response = await API.get(`/loans/${slug}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const createLoan = async (data) => {
   try {
      await API.post("/loans", data);
   } catch (error) {
      console.log(error);
      throw error;
      // throw message(error);
   }
};

export const updateLoan = async (slug, data) => {
   try {
      const response = await API.post(`loans/${slug}`, data);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const deleteLoan = async (uid) => {
   try {
      const response = await API.delete(`loans/${uid}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};
