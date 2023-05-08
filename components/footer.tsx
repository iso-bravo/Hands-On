import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"

export default function Footer() {
  return (
    <footer className="bg-footer font-Lexend py-36 flex flex-row">
      <div className="flex flex-row mx-28 w-6/12 justify-between">
        <div className="flex flex-col border border-green-500 justify-start">
          <p className="text-white border font-bold text-4xl border-white">
            HandsOn
          </p>
          <p>jiofsjfosefjoeijfo</p>
          <div className=" border border-white flex scale-150 text-gray-300 space-x-3">
            <FaFacebookSquare className=" hover:text-white transition duration-200 cursor-pointer"/>
            <AiFillInstagram className=" hover:text-white transition duration-200 cursor-pointer"/>
            <BsTwitter className="hover:text-white transition duration-200 cursor-pointer"/>
            <BsLinkedin className="hover:text-white transition duration-200 cursor-pointer"/>
          </div>
        </div>
        <div className="flex flex-col items-center">
            <h1 className="text-xl text-white mb-3 ">Acerca de nosotros</h1>
            <p className="mb-2 text-gray-300 hover:text-white transition duration-200 cursor-pointer">Inicio</p>
            <p className="mb-2 text-gray-300 hover:text-white transition duration-200 cursor-pointer">Misión y Visión</p>
            <p className="mb-2 text-gray-300 hover:text-white transition duration-200 cursor-pointer">Información</p>
            <p className="mb-2 text-gray-300 hover:text-white transition duration-200 cursor-pointer">Equipo</p>
        </div>

      </div>
      <div className="flex flex-col justify-center text-white items-center px-8 mx-20">
        <p className="text-4xl mb-2">¿Qué esperas?</p>
        <p className="text-4xl mb-5">¡Registrate Ya!</p>
        <button className="flex justify-center items-center bg-secondary rounded-lg w-36 hover:bg-hoversecondary transition duration-200 h-14">Registro</button>
      </div>
    </footer>
  );
}
