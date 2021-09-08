import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user-reducers';
import sessionReducer from './session/session-reducers';
import calendarReducer from './calendar/calendar-reducers';
import globalReducers from './global/global-reducers';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

const authPersistConfig = {
  key: 'userInfo',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    session: sessionReducer,
    global: globalReducers,
    calendar: calendarReducer,
    user: persistReducer(authPersistConfig, userReducer),
  },
  // devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export const persistor = persistStore(store);
