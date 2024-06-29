import { Logo } from "./Logo";
import { Profile } from "./Profile";
import { Navbar } from "./Navbar";

export const NavPart = () => {
  return (
    <div className="w-1/6 h-full flex flex-col bg-black gap-5 ">
      <div className="flex flex-col gap-10">
        <Logo />
        <Profile />
      </div>
      <Navbar />
    </div>
  );
};
