import { IoPersonCircleSharp } from "react-icons/io5";

function PreNav() {
  return (
    <div className="bg-primary py-3 text-white lg:py-4">
      <div className="container flex items-center gap-2 px-4 sm:px-10">
        <IoPersonCircleSharp className="text-2xl" />
        <h2 className="text-md font-bold lg:text-lg">
          Welcome to Anime Trinity
        </h2>
      </div>
    </div>
  );
}

export default PreNav;
