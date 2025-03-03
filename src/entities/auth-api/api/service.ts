import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadAuthState = () => {
  const storedState = localStorage.getItem("isAuthenticated");
  if(storedState) {
    return JSON.parse(storedState)
  };
};

const initialState: {
  isAuthenticated: boolean,
  authError: null | string
} = {
  isAuthenticated: loadAuthState(),
  authError: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setLogin: (state, action: PayloadAction<{ username: string; password: string }>) => {
      const { username, password } = action.payload;
      if (username === "admin" && password === "password") {
        state.isAuthenticated = true;
        localStorage.setItem("isAuthenticated", 'true');
        state.authError = null;
      } else {
        state.isAuthenticated = false;
        state.authError = 'Неверный логин или пароль';
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.authError = null;
      localStorage.removeItem("isAuthenticated");
    },
  },
});

export const { setLogin, logout } = authSlice.actions;
export default authSlice.reducer;
