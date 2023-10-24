import { ReactNode } from "react"
import GuideEntry from "./GuideEntry"

type Props = {
  children: ReactNode,
  title: string,
}

export default function MiniGuideEntry({ children, title, ...props }: Props) {
  return (
    <GuideEntry title={ title } className="flex-col pl-0 gap-1 py-4">
      {children}
    </GuideEntry>
  )
}