import API from "../_api";

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
      throw error;
   }
};

export const createLoan = async (data) => {
   try {
      await API.post("/loans", data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const updateLoan = async (slug, data) => {
   try {
      await API.patch(`loans/${slug}`, data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const deleteLoan = async (uid) => {
   try {
      await API.delete(`loans/${uid}`);
   } catch (error) {
      console.log(error);
      throw error;
   }
};
