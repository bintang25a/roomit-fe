import API from "../_api";

export const getMembers = async () => {
   const response = await API.get("/users");
   return response.data;
};

export const showMember = async (slug) => {
   try {
      const response = await API.get(`/users/${slug}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const createMember = async (data) => {
   try {
      await API.post("/users", data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const updateMember = async (slug, data) => {
   try {
      await API.patch(`users/${slug}`, data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const deleteMember = async (uid) => {
   try {
      await API.delete(`users/${uid}`);
   } catch (error) {
      console.log(error);
      throw error;
   }
};
