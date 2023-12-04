import { JSX } from 'react'

import { Container, HeroGallery } from '@/components'

export default function BookingHero({ children }: { children: JSX.Element }) {
  return (
    <div className="relative overflow-hidden">
      <Container>
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto">
            <div className="sm:max-w-lg">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl">
                Your next dream destination
              </h1>
              <p className="mt-4 text-xl text-gray-400 font-normal">
                Discover your next trip, by booking your destination and dates,
                it's simple!
              </p>
            </div>
            <div className="mt-10">
              <HeroGallery />

              <div className="backdrop-blur-md bg-white p-10 rounded-lg w-full shadow-2xl">
                {children}

                <div className="h-6 mt-4 flex flex-row items-center gap-1">
                  <p className="font-normal text-xs text-secondary-main">
                    Powered by
                  </p>
                  <img
                    alt="Hostfully logo"
                    src="src/assets/hostfully.png"
                    className="w-16 h-16 object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
