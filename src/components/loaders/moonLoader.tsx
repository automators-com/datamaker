import { MoonLoader as Loader } from "react-spinners";

function MoonLoader() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-base-100">
      <Loader color="#482B7C" size={60} />
    </div>
  );
}

export default MoonLoader;
