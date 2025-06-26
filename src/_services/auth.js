import API from "../_api";
import message from "../_utilities/errorMessage";

// Fungsi Login
export const login = async (data) => {
   try {
      const response = await API.post("/login", data );

      const user = response.data; // backend kamu kirim user info langsung
      localStorage.setItem("user", JSON.stringify(user));

      return user;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};

// Fungsi Validasi session (pakai /me endpoint)
export const validateSession = async () => {
   if (typeof window === "undefined") return false;

   try {
      const response = await API.get("/me" );

      localStorage.setItem("user", JSON.stringify(response.data));
      return true;
   } catch (error) {
      console.error("Session tidak valid:", error.response?.data || error.message);
      localStorage.removeItem("user");
      return false;
   }
};

export const isAuthenticated = async () => {
   return await validateSession();
};

// Fungsi Logout
export const logout = async () => {
   try {
      const response = await API.delete("/logout", null);

      localStorage.removeItem("user");

      return response.data;
   } catch (error) {
      console.log(error);
      throw message(error);
   }
};
