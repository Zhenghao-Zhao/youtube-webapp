
type Image = {
  title: string;
  image: string | undefined;
}

export default function Image({ title, image }: Image) {
  return (
    <div>
        <img src={image} className="w-full rounded-lg"></img>
        <button className="flex">
          <div className={`rounded-full w-5 aspect-square`} />
          <p>{title}</p>
        </button>
    </div>
  )
}