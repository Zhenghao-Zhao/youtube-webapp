type Prop = {
  title: string,
}

export default function Chip({ title }: Prop) {
  return (
    <button className="flex-shrink-0 px-2 py-1.5 rounded-md hover:bg-btn-hover bg-btn-primary">
      { title }
    </button>
  )
}