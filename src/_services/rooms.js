import API from "../_api";
import message from "../_utilities/errorMessage";

export const getRooms = async () => {
   const response = await API.get("/rooms");
   return response.data;
};

export const showRoom = async (slug) => {
   try {
      const response = await API.get(`/rooms/${slug}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const createRoom = async (data) => {
   try {
      await API.post("/rooms", data);
   } catch (error) {
      console.log(error);
      throw error;
      // throw message(error);
   }
};

export const updateRoom = async (slug, data) => {
   try {
      const response = await API.post(`rooms/${slug}`, data);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

export const deleteRoom = async (uid) => {
   try {
      const response = await API.delete(`rooms/${uid}`);
      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};
