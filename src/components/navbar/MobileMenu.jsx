export default function MobileMenu({ isMenuOpen, onMenuOpen }) {
  const items = ["home", "about", "projects", "contact"];
  let topPosition = isMenuOpen ? "top-0" : "-top-full";
  return (
    <div
      className={`absolute ${topPosition} flex h-screen w-full items-center justify-center backdrop-blur-xl text-slate-200 transition-all duration-500 ease-in-out z-10`}
    >
      <button
        onClick={() => onMenuOpen(false)}
        className="text-3xl leading-6 size-8 absolute top-4"
      >
        <ion-icon name="chevron-up" />
      </button>

      <ul className="flex flex-col gap-4 text-center font-medium text-xl uppercase">
        {items.map((item, index) => (
          <li key={index}>
            <a href="#" className="hover:text-sky-600">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
