import API from "../_api";

// Fungsi Login
export const login = async (data) => {
   try {
      const response = await API.post("/login", data, {
         withCredentials: true,
      });

      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));

      return user;
   } catch (error) {
      console.log(error);
      throw error;
   }
};

// Fungsi Validasi session (pakai /me endpoint)
export const validateSession = async () => {
   if (typeof window === "undefined") return { isValid: false, user: null };

   try {
      const response = await API.get("/me", {
         withCredentials: true,
      });

      const user = response.data;
      localStorage.setItem("user", JSON.stringify(user));

      return { isValid: true, user };
   } catch (error) {
      console.error(
         "Session tidak valid:",
         error.response?.data || error.message
      );
      localStorage.removeItem("user");
      return { isValid: false, user: null };
   }
};

// Dapat digunakan untuk cek cepat login
export const isAuthenticated = async () => {
   const { isValid } = await validateSession();
   return isValid;
};

// Fungsi Logout
export const logout = async () => {
   try {
      const response = await API.delete("/logout", {
         withCredentials: true,
      });

      localStorage.removeItem("user");

      return response.data;
   } catch (error) {
      console.log(error);
      throw error;
   }
};
