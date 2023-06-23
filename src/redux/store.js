// import { configureStore } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// import { contactsReducer } from 'redux/contacts/contactsSlice';
// import { filterReducer } from 'redux/contacts/filterSlice';
// import { authReducer } from 'redux/auth/authSlice';

// // Persisting token field from auth slice to localstorage
// const authPersistConfig = {
//   key: 'auth',
//   storage,
//   whitelist: ['token'],
// };

// const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

// export const store = configureStore({
//   reducer: {
//     auth: persistedAuthReducer,
//     contacts: contactsReducer,
//     filter: filterReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
//   devTools: process.env.NODE_ENV === 'development',
// });

// export const persistor = persistStore(store);
