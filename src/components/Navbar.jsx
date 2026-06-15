import "./Navbar.css"
import { Sun, Moon } from "lucide-react";
import { ThemeContext } from "../context/themeContext";
import { useContext } from "react";

function Navbar() {
  const links = ["About","Education","Experience","Projects","Activities","Skills","Contact"]
  
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  // Custom Hook for Theme Toggle
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav 
      className="
        fixed top-0 left-0 right-0
        z-50
        border-b border-slate-200/50 dark:border-slate-700/50
        bg-white/80 dark:bg-slate-900/80
        backdrop-blur-xl
        shadow-lg
        transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          <h1 
            className="
              text-2xl
              font-extrabold
              tracking-tight
              text-slate-900 dark:text-white
              cursor-pointer
              select-none
            "
          >
            Joel Martin S
          </h1>
          <ul
            className="
              hidden
              md:flex
              items-center
              gap-8
            "
          >
            {links.map((link) =>(
              <li
                key={link}
                onClick={() => handleScroll(link.toLowerCase())}
                style={{ cursor: "pointer" }}
                className="
                  text-sm
                  font-medium
                  text-slate-700 dark:text-slate-300
                  hover:text-blue-600 dark:hover:text-blue-400
                  transition-colors duration-300
                  cursor-pointer
                  relative
                  group
                "
              >
                {link}
                <span
                  className="
                    absolute
                    left-0
                    -bottom-1
                    h-[2px]
                    w-0
                    bg-blue-500
                    transition-all
                    duration-300
                    group-hover:w-full
                  "
                />  
              </li>
              ))}
            </ul>
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="
                relative
                w-11
                h-11
                flex
                items-center
                justify-center
                rounded-full
                border
                border-slate-200 dark:border-slate-700
                bg-white dark:bg-slate-800
                shadow-md
                hover:shadow-lg
                hover:scale-105
                transition-all duration-300
              "
          >
            {/* Sun */}
            <Sun
              size={22}
              className={`
                absolute
                transition-all duration-500 ease-in-out
                text-yellow-500
                ${
                  theme === "light"
                    ? "rotate-0 scale-100 opacity-100"
                    : "rotate-90 scale-0 opacity-0"
                }
              `}
            />
            {/* Moon */}
            <Moon
              size={22}
              className={`
                absolute
                transition-all duration-500 ease-in-out
                text-slate-700 dark:text-slate-200
                ${
                  theme !== "light"
                    ? "rotate-0 scale-100 opacity-100"
                    : "-rotate-90 scale-0 opacity-0"
                }
              `}
            />
        </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;