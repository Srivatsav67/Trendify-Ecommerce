import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import authReducer from './slices/authSlice';
import adminReducer from './slices/adminSlice';

export default configureStore({
  reducer: {
    cart: cartReducer,
    auth: authReducer,
    admin: adminReducer
  }
});
