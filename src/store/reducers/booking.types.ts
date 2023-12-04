export type BookingType = {
  id: number
  destination: string
  startDate: string
  endDate: string
}

export type BookingState = {
  booking: BookingType[]
  currentBooking: BookingType
}
