import IconButton from "../../components/IconButton";
import Search from "./Search";

export default function RespSearch() {
  const handleClick = () => {
    console.log("voice");
  }
  return (
    <IconButton handleClick={ handleClick } className="sm:hidden">
      <Search />
    </IconButton>
  )
}