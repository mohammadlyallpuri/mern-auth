import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="bg-slate-200">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/" className="font-bold text-xl">
          Auth App
        </Link>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-blue-500">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">About</Link>
          </li>
          <li>
            <Link to="/sign-in" className="hover:text-blue-500">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
