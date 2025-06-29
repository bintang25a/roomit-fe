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

export const getImageUrl = (path) => {
   return `${API.defaults.baseURL + path}`;
};

export const createRoom = async (data) => {
   try {
      await API.post("/rooms", data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const updateRoom = async (primary, data) => {
   try {
      await API.patch(`rooms/${primary}`, data);
   } catch (error) {
      console.log(error);
      throw error;
   }
};

export const deleteRoom = async (primary) => {
   try {
      await API.delete(`rooms/${primary}`);
   } catch (error) {
      console.log(error);
      throw error;
   }
};
