import { useSelector } from 'react-redux'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createSelector, createSlice } from '@reduxjs/toolkit'

import { getStorage, setStorage } from '@/utils'

import store from '../store'
import { BookingState, BookingType } from './booking.types'

const STORAGE_KEY = 'bookingData'

const initialState: BookingState = {
  booking: [],
  currentBooking: {
    id: 0,
    destination: '',
    startDate: '',
    endDate: '',
  },
}

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    addBookingList: (state, action: PayloadAction<BookingType[]>) => {
      setStorage(STORAGE_KEY, state.booking)
      state.booking = action.payload
    },
    addBooking: (state, action: PayloadAction<BookingType>) => {
      setStorage(STORAGE_KEY, state.booking)
      state.booking.push(action.payload)
    },
    editBooking: (state, action: PayloadAction<BookingType>) => {
      state.booking = state.booking.map((item) => {
        const newItem = action.payload
        if (item.id === newItem.id) {
          return {
            ...item,
            ...newItem,
          }
        }
        return item
      })
      setStorage(STORAGE_KEY, state.booking)
    },
    removeBooking: (state, action: PayloadAction<number>) => {
      state.booking = state.booking.filter((item) => item.id !== action.payload)
      setStorage(STORAGE_KEY, state.booking)
    },
    setCurrentBooking: (state, action: PayloadAction<BookingType>) => {
      state.currentBooking = action.payload
    },
  },
})

export const { addBooking } = bookingSlice.actions

const selectSelf = createSelector(
  [(state: { booking: BookingState }) => state.booking],
  (booking) => booking,
)

const selectBooking = createSelector([selectSelf], (booking) => booking.booking)

const selectCurrentBooking = createSelector(
  [selectSelf],
  (booking) => booking.currentBooking,
)

export const setBooking = (booking: BookingType) =>
  store.dispatch(bookingSlice.actions.addBooking(booking))

export const setCurrentBooking = (booking: BookingType) =>
  store.dispatch(bookingSlice.actions.setCurrentBooking(booking))

export const updateBooking = (booking: BookingType) =>
  store.dispatch(bookingSlice.actions.editBooking(booking))

export const removeBooking = (id: number) =>
  store.dispatch(bookingSlice.actions.removeBooking(id))

export const useBooking = () => {
  const data = useSelector(selectBooking)

  // console.log('data', data)

  if (!data) {
    const storageData = getStorage(STORAGE_KEY) as BookingType[]
    store.dispatch(bookingSlice.actions.addBookingList(storageData))

    return storageData ?? []
  }
  return data
}

export const useCurrentBooking = () => useSelector(selectCurrentBooking)

export default bookingSlice.reducer
