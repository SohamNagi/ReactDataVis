import { Separator } from "./ui/separator";

const Header = () => {
  return (
    <div className="">
      <div className="mx-2 p-4 text-center w-screen">
        <h1 className="scroll-m-20 font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-5xl col-span-4 col-start-4 ">
          Adverstising Campaign Data
        </h1>
      </div>
      <Separator></Separator>
    </div>
  );
};

export default Header;
