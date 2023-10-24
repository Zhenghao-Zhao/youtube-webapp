
type Props = {
  title: string;
  src: string | undefined;
}

export default function Image({ title, src }: Props) {
  return (
    <div>
        <img src={src} className="w-full rounded-lg" />
        <button className="flex">
          <div className={`rounded-full w-5 aspect-square`} />
          <p>{title}</p>
        </button>
    </div>
  )
}