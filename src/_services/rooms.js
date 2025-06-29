import API from "../_api";

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
      throw error;
   }
};

export const createRoom = async (data) => {
   try {
      await API.post("/rooms", data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const updateRoom = async (slug, data) => {
   try {
      await API.patch(`rooms/${slug}`, data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const deleteRoom = async (uid) => {
   try {
      await API.delete(`rooms/${uid}`);
   } catch (error) {
      console.log(error);
      throw error;
   }
};
