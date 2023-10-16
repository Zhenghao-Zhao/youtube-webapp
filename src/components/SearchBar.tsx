import Search from "../assets/widgets/Search";
import { useRef } from "react";

export default function SearchBar() {
  const searchbar = useRef<HTMLInputElement | null>(null);
  const leftSearchIcon = useRef<HTMLInputElement | null>(null);
  const handleFocus = () => {
    console.log(searchbar.current!);
    searchbar.current?.classList.remove('ml-8');
    searchbar.current?.classList.add('pl-8');
    leftSearchIcon.current?.removeAttribute('hidden');
  }

  const handleBlur = () => {
    searchbar.current?.classList.remove('pl-8');
    searchbar.current?.classList.add('ml-8');
    leftSearchIcon.current?.setAttribute('hidden', '');
  }

  const handleSubmit = () => {

  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex h-10">
        <div ref={searchbar} className="flex items-center relative border border-solid border-r-0 rounded-l-full ml-8">
          <div ref={leftSearchIcon} className="absolute left-0 pl-3" hidden>
            <Search />
          </div>
          <input className="focus:outline-none ml-3" type="text" placeholder="Search" onFocus={handleFocus} onBlur={handleBlur}/>
        </div>
        <button type="submit" className="border border-solid px-5 rounded-r-full flex items-center justify-center">
          <Search />
        </button>
      </div>
    </form>
  )
}