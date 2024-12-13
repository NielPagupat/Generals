import { configureStore } from '@reduxjs/toolkit';
import tokenReducer from './slice';

export default configureStore({
  reducer: {
    game: tokenReducer, // Renamed to reflect game state
  },
});