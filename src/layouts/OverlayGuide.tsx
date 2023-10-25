import { MenuIcon } from "../assets/widgets/Icons";
import Logo from "../assets/widgets/Logo";
import IconButton from "../components/IconButton";
import PageGuide from "./PageGuide";

type Props = {
  toggleOverlay: () => void;
}

export default function OverlayGuide({ toggleOverlay }: Props) {

  return (
    <div className="absolute inset-0 bg-backdrop z-50">
      <div className="absolute bg-white">
        <div className= "fixed flex gap-4 items-center shrink-0 h-14 w-guide-normal px-4 bg-white">
          <IconButton handleClick={ toggleOverlay }>
            <MenuIcon />
          </IconButton>
          <a href="/">
            <Logo />
          </a>
        </div>
        <PageGuide />
      </div>
    </div>
  )
}