import { Link } from "react-router";

export default function NotFoundApp() {
  return (
    <div className="text-center mt-[100px]">
      <div className="text-[40px] font-bold">404 App Not found</div>
      <Link
        to="/"
        className="block w-fit mx-auto mt-[20px] bg-black text-white p-[10px_30px] rounded-full"
      >
        Go to Home
      </Link>
    </div>
  );
}
