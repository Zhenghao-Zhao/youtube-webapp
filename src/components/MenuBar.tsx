import Create from "../assets/widgets/Create";
import Notification from "../assets/widgets/Notification";
import Profile from "../assets/widgets/Profile";

export default function MenuBar() {
  return (
    <div className="flex gap-4 items-center">
      <button>
        <Create />
      </button>
      <button>
        <Notification />
      </button>
      <button>
        <Profile />
      </button>
    </div>
  )
}