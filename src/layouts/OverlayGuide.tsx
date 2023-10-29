import { MenuIcon } from "../assets/widgets/Icons";
import Logo from "../assets/widgets/Logo";
import IconButton from "../components/IconButton";
import PageGuide from "./PageGuide";

type Props = {
  toggleOverlay: () => void;
  show: boolean;
}

export default function OverlayGuide({ toggleOverlay, show=false }: Props) {

  return (
      <div className={`fixed z-[1000] bg-white h-full ${!show && "-translate-x-full"} transition-all`}>
        <div className= "flex gap-4 items-center shrink-0 h-14 w-guide-normal px-4 bg-white">
          <IconButton handleClick={ toggleOverlay }>
            <MenuIcon />
          </IconButton>
          <a href="/">
            <Logo />
          </a>
        </div>
        <PageGuide className="absolute" />
      </div>
  )
}