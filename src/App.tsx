import { Header, BookingForm, BookingHero, BookingDetails } from '@/components'

export default function App() {
  return (
    <>
      <Header />

      <BookingHero>
        <BookingForm />
      </BookingHero>

      <BookingDetails />

      <div className="my-40" />
    </>
  )
}
