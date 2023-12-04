import { useState } from 'react'
import { format } from 'date-fns'
import { CalendarCheck2, CalendarX2, Pencil, Trash2 } from 'lucide-react'

import { EditBooking, EmptyState } from '@/components'

import type { BookingType } from '@/store/reducers/booking.types'
import {
  useBooking,
  removeBooking,
  setCurrentBooking,
} from '@/store/reducers/booking.reducer'

export default function DetailsItem() {
  const booking = useBooking()
  const [open, setOpen] = useState(false)
  const [bookingId, setBookingId] = useState<number>()

  const handleEditItem = (id: number) => {
    setBookingId(id)
    // setOpen(true)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  const handleRemoveItem = (id: number) => removeBooking(id)

  if (booking?.length === 0) {
    return <EmptyState text="No booking data" />
  }

  return (
    <>
      <ul>
        {booking?.map((item: BookingType) => (
          <li
            key={item.id}
            className="p-6 m-4 lg:flex lg:items-center lg:justify-between rounded-xl border-2 border-slate-200 bg-white"
          >
            <div className="min-w-0 flex-1">
              <h2 className="text-xl font-bold leading-7 text-gray-500 sm:truncate sm:text-2xl sm:tracking-tight">
                {item.destination}
              </h2>
              <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
                <div className="mt-2 flex gap-2 text-sm text-gray-500 flex-col sm:flex-row">
                  <div className="flex flex-row">
                    <CalendarCheck2 className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    check-in
                  </div>
                  <span className="px-1.5 ring-1 ring-slate-200 rounded font-semibold w-fit">
                    {format(new Date(item.startDate), 'PPP')}
                  </span>
                </div>

                <div className="mt-2 flex gap-2 text-sm text-gray-500 flex-col sm:flex-row">
                  <div className="flex flex-row">
                    <CalendarX2 className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
                    check-out
                  </div>
                  <span className="px-1.5 ring-1 ring-slate-200 rounded font-semibold w-fit">
                    {format(new Date(item.endDate), 'PPP')}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-5 flex xs:gap-1 lg:ml-4 lg:mt-0">
              <span className="sm:block">
                <button
                  type="button"
                  onClick={() => handleEditItem(item.id)}
                  className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-600 hover:text-indigo-400"
                >
                  <Pencil className="-ml-0.5 mr-1.5 h-5 w-5 text-gray-600" />
                  Edit
                </button>
              </span>

              <span className="sm:ml-3">
                <button
                  type="button"
                  onClick={() => handleRemoveItem(item.id)}
                  className="inline-flex items-center rounded-md text-red-600 px-3 py-2 text-sm font-semibold hover:text-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  <Trash2 className="-ml-0.5 mr-1.5 h-5 w-5 text-red-600" />
                  Remove
                </button>
              </span>
            </div>
          </li>
        ))}
      </ul>

      <EditBooking open={open} setOpen={setOpen} id={bookingId} />
    </>
  )
}
