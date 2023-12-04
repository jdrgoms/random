import { configureStore } from '@reduxjs/toolkit'

import bookingSlice from './reducers/booking.reducer'

const store = configureStore({
  reducer: {
    booking: bookingSlice,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
