import { BiBookBookmark } from "react-icons/bi"
import { BsPerson } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";

export function Sidebar() {
    return(
        <div className="w-1/5 h-full p-6 mx-2 font-Lexend font-bold flex flex-col gap-0">
            <h1 className="font-bold text-4xl flex justify-center">
                HandsOn
            </h1>
            <img className="rounded-full scale-75" src="/images/ppuser.jpg"></img>
            <h2 className="flex justify-center text-2xl">Iso</h2>
            <div className="flex flex-col justify-center text-lg">
                <button className="h-18 flex flex-row text-left hover:bg-[#F5F5F5] rounded-3xl p-4 px-6 gap-1">
                <BiBookBookmark size={27}/>
                    Lecciones
                </button>
                <button className="h-18 flex flex-row text-left hover:bg-[#F5F5F5] rounded-3xl p-4 px-6 gap-1">
                    <CgProfile size={27}/> 
                    Perfil
                </button>
                <button className="h-18 flex flex-row text-left hover:bg-[#F5F5F5] rounded-3xl p-4 px-6 gap-1">
                    <FiSettings size={27}/>
                    Ajustes
                </button>
                <div className="flex flex-row justify-center mt-40 gap-1">
                    <HiOutlineLogout size={27} className="cursor-pointer rotate-180"/>
                    <p className="cursor-pointer">Cerrar Sesión</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar