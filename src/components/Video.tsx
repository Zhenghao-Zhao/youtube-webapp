import { useRef } from 'react'

type Props = {
  title: string;
  src: string | undefined;
  thumbnail?: string | undefined;
}
export default function Video({ title, src, thumbnail }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const onMouseOver = () => {
    ref.current!.setAttribute('controls', '');
    ref.current!.play();
  }

  const onMouseLeave = () => {
    ref.current!.removeAttribute('controls');
    ref.current!.pause();
  }
  return (
    <div>
      <video ref={ref} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave} className="rounded-lg" muted>
        <source src={thumbnail} type='image/jpeg'/>
        <source src={src} type='video/mp4'/>
      </video>
      <button className="flex">
          <div className={`rounded-full w-5 aspect-square`} />
          <p>{title}</p>
        </button>
    </div>
  )
}