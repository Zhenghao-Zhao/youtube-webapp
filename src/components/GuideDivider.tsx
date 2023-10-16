import { twMerge } from 'tailwind-merge'

export default function Divider({ className }: { className: string | null}) {
  return (
    <div className={twMerge("border border-solid w-full", className)}></div>
  )
}