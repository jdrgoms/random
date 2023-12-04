export default function HeroGallery() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
    >
      <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
        <div className="flex items-center space-x-6 lg:space-x-8 ">
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
              <img
                src="src/assets/statue-liberty.png"
                alt="eiffel tower"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="src/assets/oslo.png"
                alt="oslo"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="src/assets/turkey.png"
                alt="turkey"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="src/assets/lacerda.png"
                alt="lacerda elevator"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="src/assets/porto.png"
                alt="porto"
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="src/assets/frankfurt.png"
                alt="frankfurt"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="h-64 w-44 overflow-hidden rounded-lg">
              <img
                src="src/assets/redentor.png"
                alt=""
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
