import NavbarItem from "./NavbarItem";
import { useEffect, useState } from "react";

const TOP_OFFSET = 66;

const Navbar = () => {
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="w-full fixed z-40 font-Lexend">
      <div
        className={`
                    px-4
                    md:px-16
                    py-6
                    flex
                    flex-row
                    items-center
                    transition
                    duration-500
                    
                    ${showBackground ? "bg-primary opacity-0 hover:opacity-90 " : ""}
                `}
      >
        <p className="h-4 lg: h-7 text-black font-bold text-4xl mb-2">
          HandsOn
        </p>
        <div
          className="
                        flex-row
                        justify-around
                        ml-8
                        items-center
                        gap-7
                        hidden
                        lg:flex
                    "
        >
          <NavbarItem label="Inicio" />
          <NavbarItem label="Información" />
          <NavbarItem label="Soporte" />
          <NavbarItem label="Equipo" />
        </div>

        <div className="flex flex-row ml-auto gap-7 items-center text-black cursor-pointer hover:text-gray-500 transition font-bold">
            Iniciar Sesión
            
        </div>
        <button
            className=" 
            bg-secondary
            hover:bg-hoversecondary
            transition-all
            duration-200
            text-gray-50
            font-semibold 
            m-3
            py-3
            px-5
            rounded-lg 
            shadow
            justify-center
            item-center
            "
          >
            Registro
          </button>
      </div>
    </nav>
  );
};

export default Navbar;
