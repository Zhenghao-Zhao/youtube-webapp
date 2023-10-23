import imageArray from '../assets/static/img/images'
import Image from './Image'

export default function VideoPanel() {
  const images = imageArray.map((img) => 
    <Image title={img.title} image={img.image} key={img.title} />
  )
  return (
    <div className="grid gap-3 w-full grid-cols-[repeat(auto-fill,minmax(300px,1fr))] mt-4">
      {images}
    </div>
  )
}