import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dashboardData: {},
  users: [],
  orders: []
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    setDashboardData: (state, action) => {
      state.dashboardData = action.payload;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setOrders: (state, action) => {
      state.orders = action.payload;
    }
  }
});

export const { setDashboardData, setUsers, setOrders } = adminSlice.actions;
export default adminSlice.reducer;