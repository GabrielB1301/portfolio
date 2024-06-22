import Themes from "./Themes";

export default function Navbar({ onMenuOpen }) {
  const items = ["home", "about", "projects", "contact"];
  return (
    <div className="fixed top-0 w-full backdrop-blur-md">
      <div className="mx-4 border-b border-slate-300/10">
        <nav className="max-w-screen-xl mx-auto flex items-center justify-between py-4 max-h-14 text-slate-100">
          <span className="font-semibold text-xl">logo.dev</span>
          <ul className="hidden items-center gap-4 capitalize text-lg font-medium sm:flex">
            {items.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-sky-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
          <button
            onClick={() => onMenuOpen(true)}
            className="sm:hidden text-3xl leading-6 size-8"
          >
            <ion-icon name="chevron-down" />
          </button>
          <Themes />
        </nav>
      </div>
    </div>
  );
}
