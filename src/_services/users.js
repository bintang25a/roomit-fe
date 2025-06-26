import API from "../_api";
import message from "../_utilities/errorMessage";

export const getMembers = async () => {
   const { data } = await API.get("/users");
   return data.data;
};

export const showMember = async (slug) => {
   try {
      const { data } = await API.get(`/users/${slug}`);
      return data.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const createMember = async (data) => {
   try {
      const response = await API.post("/users", data);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const updateMember = async (slug, data) => {
   try {
      const response = await API.post(`users/${slug}`, data);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const deleteMember = async (uid) => {
   try {
      const response = await API.delete(`users/${uid}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};
