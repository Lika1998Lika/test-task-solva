import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadAuthState = () => {
  const storedState = localStorage.getItem("authState");
  return storedState ? JSON.parse(storedState) : { isAuthenticated: false };
};

const initialState = {
  isAuthenticated: loadAuthState(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<{ username: string; password: string }>) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "password") {
        state.isAuthenticated = true;
        localStorage.setItem("authState", JSON.stringify(state));
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.removeItem("authState");
    },
  },
});

export const { setLogin, logout } = authSlice.actions;
export default authSlice.reducer;
