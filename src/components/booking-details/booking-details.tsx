import { Container, DetailsList } from '@/components'

export default function BookingDetails() {
  return (
    <Container>
      <section className="mt-4 divide-slate-100 border-t border-slate-100">
        <h2 className="mt-4 font-semibold text-indigo-500 dark:text-indigo-400">
          Management
        </h2>
        <p className="mt-4 text-3xl sm:text-4xl text-slate-900 font-extrabold tracking-tight dark:text-slate-50">
          Booking Details
        </p>

        <div className="mt-6 lg:mt-8">
          <DetailsList />
        </div>
      </section>
    </Container>
  )
}
