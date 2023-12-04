import { JSX } from 'react'

export default function Container({ children }: { children: JSX.Element }) {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">{children}</div>
  )
}
