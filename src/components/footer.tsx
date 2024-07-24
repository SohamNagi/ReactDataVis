import { Separator } from "./ui/separator";
import { ModeToggle } from "./mode-toggle";

const Footer = () => {
  return (
    <div className="h-15">
      <Separator></Separator>
      <div className=" mx-5 p-5 w-screen grid grid-cols-10 ">
        <div className="col-start-0 col-span-6">
          <p className="text-base sm:text-s">
            Made by Soham Nagi
            <a
              href="https://vitejs.dev/"
              className="text-blue-400 hidden lg:inline"
            >
              {" "}
              using Vite,{" "}
            </a>
            <a
              href="https://reactjs.org/"
              className="text-blue-400 hidden lg:inline"
            >
              React,{" "}
            </a>
            <a
              href="https://tailwindcss.com/"
              className="text-blue-400 hidden lg:inline"
            >
              TailwindCSS,{" "}
            </a>
            <a
              href="https://recharts.org/"
              className="text-blue-400 hidden lg:inline"
            >
              Recharts,{" "}
            </a>
            <a
              href="https://ui.shadcn.com/"
              className="text-blue-400 hidden lg:inline"
            >
              shadcn.
            </a>
          </p>
        </div>
        <div className="col-start-11 flex-col col-span-2">
          <div className="flex justify-center pt-1 flex-row">
            <ModeToggle></ModeToggle>
            <a href={"https://www.linkedin.com/in/sohamnagi"} className="">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-blue-600 hover:text-blue-800"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-4v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-4v-5.604c0-3.368-4-3.113-4 0v5.604h-4v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </div>
            </a>
            <a
              href={"https://github.com/SohamNagi"}
              className="pl-1 text-green-400 hover:text-green-800"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            <a
              href={"mailto:soham.nagi@uwaterloo.ca"}
              className="pl-1 pt-0.25 text-gray-400 hover:text-gray-600 dark:text-gray-100 dark:hover:text-gray-400"
            >
              <svg
                fill="currentcolor"
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                version="1.1"
                id="Capa_1"
                viewBox="0 0 75.294 75.294"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M66.097,12.089h-56.9C4.126,12.089,0,16.215,0,21.286v32.722c0,5.071,4.126,9.197,9.197,9.197h56.9 c5.071,0,9.197-4.126,9.197-9.197V21.287C75.295,16.215,71.169,12.089,66.097,12.089z M61.603,18.089L37.647,33.523L13.691,18.089 H61.603z M66.097,57.206h-56.9C7.434,57.206,6,55.771,6,54.009V21.457l29.796,19.16c0.04,0.025,0.083,0.042,0.124,0.065 c0.043,0.024,0.087,0.047,0.131,0.069c0.231,0.119,0.469,0.215,0.712,0.278c0.025,0.007,0.05,0.01,0.075,0.016 c0.267,0.063,0.537,0.102,0.807,0.102c0.001,0,0.002,0,0.002,0c0.002,0,0.003,0,0.004,0c0.27,0,0.54-0.038,0.807-0.102 c0.025-0.006,0.05-0.009,0.075-0.016c0.243-0.063,0.48-0.159,0.712-0.278c0.044-0.022,0.088-0.045,0.131-0.069 c0.041-0.023,0.084-0.04,0.124-0.065l29.796-19.16v32.551C69.295,55.771,67.86,57.206,66.097,57.206z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
