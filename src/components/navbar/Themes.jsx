import { useEffect, useState } from "react";

export default function () {
  const options = [
    {
      icon: "sunny",
      text: "light",
    },
    {
      icon: "moon",
      text: "dark",
    },
  ];

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    switch (theme) {
      case "dark":
        document.documentElement.classList.add("dark");
        break;
      case "light":
        document.documentElement.classList.remove("dark");
        break;
      default:
        break;
    }
  }, [theme]);

  return (
    <div className="bg-slate-800 text-slate-200 rounded">
      {options?.map((option, index) => (
        <button
          onClick={() => setTheme(option.text)}
          key={index}
          className={`size-8 leading-9 text-xl rounded-full m-1 ${
            option.text === theme && "text-sky-600"
          }`}
        >
          <ion-icon name={option.icon} />
        </button>
      ))}
    </div>
  );
}
