import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
  return (
    <>
      <div className="mx-2 p-2 w-screen grid grid-cols-10">
        <span className="col-end-13 col-span-1">
          <ModeToggle></ModeToggle>
        </span>
      </div>
      <Separator></Separator>
    </>
  );
};

export default Header;
