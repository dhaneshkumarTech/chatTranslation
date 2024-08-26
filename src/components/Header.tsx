import Logo from "./Logo";

import DarkModeToggle from "./DarkModeToggle";
import UserProfileMenu from "./UserProfileMenu";

function Header() {
  return (
    <nav className="fixed w-full bg-[#c3ecd7] flex justify-between items-center p-4 md:p-6 lg:p-10">
      <Logo />
      {/* <div className="ml-4 md:ml-10 lg:ml-60">This is logo</div> */}
      <div className="mr-4 md:mr-10 lg:mr-60 flex space-x-4">
        <div>Profile</div>
        <div>Chat</div>
        <div>Language</div>
        <div></div>

        {/* View All chats */}
        {/* create new chat */}

        {/* dark mode toggle */}
        <DarkModeToggle />
        <UserProfileMenu />
        {/* Profile menu */}
      </div>
    </nav>
  );
}

export default Header;
