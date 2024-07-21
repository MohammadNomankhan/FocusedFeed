import {
  HomeIcon,
  FolderOpenIcon,
  ArchiveBoxIcon,
  ClockIcon,
  BookmarkIcon,
  HandThumbUpIcon,
  VideoCameraIcon,
  PlayIcon,
  Cog6ToothIcon,
  MusicalNoteIcon,
  FilmIcon,
} from "@heroicons/react/24/outline"; // Import Heroicons

const sidebarItems = [
  { name: "Home", icon: HomeIcon, href: "#" },
  { name: "Subscriptions", icon: FolderOpenIcon, href: "#" },
  { name: "Shorts", icon: FilmIcon, href: "#" },
  { name: "Library", icon: ArchiveBoxIcon, href: "#" },
  { name: "YouTube Music", icon: MusicalNoteIcon, href: "#" },
  { name: "History", icon: ClockIcon, href: "#" },
  { name: "Watch Later", icon: BookmarkIcon, href: "#" },
  { name: "Liked Videos", icon: HandThumbUpIcon, href: "#" },
  { name: "Your Videos", icon: VideoCameraIcon, href: "#" },
  { name: "Playlists", icon: PlayIcon, href: "#" },
  { name: "Settings", icon: Cog6ToothIcon, href: "#" },
];

const Sidebar = ({ sidebarOpen }) => {
  return (
    <div
      className={`${
        sidebarOpen
          ? "sm:translate-x-0 sm:block"
          : "sm:-translate-x-full sm:hidden"
      } transition-all ease-in-out duration-300 col-span-2 fixed sm:relative bottom-0 left-0 bg-white border sm:border-none z-10 w-full `}
    >
      <div className="flex flex-row sm:hidden h-full">
        {sidebarItems.slice(0, 4).map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-1 flex-col lg:flex-row justify-center items-center p-2 text-center md:text-left md:p-3 hover:bg-gray-100"
          >
            <item.icon className="h-6 w-6" />
            <span className="lg:ml-4">{item.name}</span>
          </a>
        ))}
      </div>

      <div className="hidden sm:flex flex-col h-full items-center lg:items-start">
        {sidebarItems.map((item, index) => (
          <a
            key={item.name}
            href={item.href}
            className="flex flex-col lg:flex-row justify-center items-center p-2 text-center md:text-left md:p-3 hover:bg-gray-100"
          >
            <item.icon className="h-6 w-6" />
            <span className="lg:ml-4">{item.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
