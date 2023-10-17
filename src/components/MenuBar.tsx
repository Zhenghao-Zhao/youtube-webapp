import Create from "../assets/widgets/Create";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";

export default function MenuBar() {
  return (
    <div className="flex gap-2 items-center">
      <Create />
      <Notification />
      <Profile />
    </div>
  )
}