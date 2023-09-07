import createSlice from '@reduxjs/toolkit/createSlice';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    id: '',
    email: '',
    photoURL: '',
    displayName: '',
  },
  reducers: {
    setUser: (state, action) => {
      state.id = action.payload.id;
      state.email = action.payload.email;
      state.photoURL = action.payload.photoURL;
      state.displayName = action.payload.displayName;
    },
    removeUser: (state) => {
      state.id = '';
      state.email = '';
      state.photoURL = '';
      state.displayName = '';
    },
  },
});

export const { setUser, removeUSer } = userSlice.actions;
export default userSlice.reducer;
