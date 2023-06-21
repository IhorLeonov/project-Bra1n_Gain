// import { configureStore } from '@reduxjs/toolkit';
// import { tweetsReducer } from 'redux/tweets/tweetsSlice';

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

// const persistConfig = {
//   key: 'tweets',
//   storage,
//   whitelist: ['subscriptions'],
// };

// const persistedTweetsReducer = persistReducer(persistConfig, tweetsReducer);

// export const store = configureStore({
//   reducer: {
//     tweets: persistedTweetsReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);
