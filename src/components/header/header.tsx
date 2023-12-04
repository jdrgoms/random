import { Github } from 'lucide-react'

import { Container } from '../container'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <Container>
        <div className="relative flex flex-row items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
          <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
            <div aria-label="logo" className="flex items-center space-x-2">
              <span aria-hidden="true" className="flex space-x-1">
                <div className="h-6 w-2 bg-primary-main"></div>
              </span>
              <span className="text-xl font-bold text-indigo-500">BKNG</span>
            </div>
          </div>

          <div className="lg:mt-0">
            <a href="#" aria-label="link to github repository">
              <Github color="#6366f1" size={24} />
            </a>
          </div>
        </div>
      </Container>
    </header>
  )
}
