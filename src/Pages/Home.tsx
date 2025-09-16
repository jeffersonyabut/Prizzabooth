import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div className="w-lvw h-svh flex items-center justify-center bg-palettebg">
        <ul>
          <li className="flex flex-col gap-3">
            <Link to="/Booth" className="ahref">
              Booth
            </Link>
            <Link to="/Booth" className="ahref">
              Donate
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
