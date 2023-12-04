import { Folder } from 'lucide-react'

export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="m-4 p-10  border-slate-50 rounded flex justify-center items-center flex-col">
      <Folder size={40} className="text-slate-300" />
      <p className="pt-4 font-normal text-sm text-slate-300">{text}</p>
    </div>
  )
}
