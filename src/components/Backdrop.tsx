type Props = {
  setShowOverlay: (b: boolean) => void
}

export default function Backdrop({ setShowOverlay }: Props) {

  return (
    <div className="fixed inset-0 bg-backdrop z-[100]" onClick={() => setShowOverlay(false)}/>
  )
}