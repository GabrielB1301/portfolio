export default function Hero() {
  return (
    <section id="hero" className="p-4 mt-14 md:h-screen md:mt-0">
      <div className="max-w-screen-lg h-full flex items-center m-auto">
        <div className="flex flex-wrap-reverse items-center justify-center gap-4 md:justify-between">
          <div className="text-slate-200 text-center md:text-start md:w-1/2">
            <h1 className="text-2xl text-slate-100 font-bold mb-4 md:text-4xl lg:text-6xl">
              Front-end React Developer
            </h1>
            <p className="text-lg font-semibold mb-8 lg:text-2xl lg:font-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae
              repellat temporibus reprehenderit.
            </p>
            <div className="text-4xl md:flex">
              <a href="#" className="hover:text-sky-600 size-9 m-1">
                <ion-icon name="logo-github" />
              </a>
              <a href="" className="hover:text-sky-600 size-9 m-1">
                <ion-icon name="logo-linkedin" />
              </a>
              <button className="hidden md:inline-block bg-gradient-to-r from-sky-600 to-sky-900 rounded text-base font-semibold px-4 py-2 ml-24 transition active:scale-90">
                Hit Me!
              </button>
            </div>
          </div>
          <div className="hero-image size-56 md:size-64 lg:size-80"></div>
        </div>
      </div>
    </section>
  );
}
