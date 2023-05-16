import { BiBookBookmark } from "react-icons/bi"
import { BsPerson } from "react-icons/bs";
import { FiSettings } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLogout } from "react-icons/hi";
import { signOut } from "next-auth/react";
import email from "next-auth/providers/email";
import router, { useRouter } from "next/router";
import { useCallback, useMemo, useState } from "react";
import React from "react";
import FondoLecciones from "./fondoLecciones";

const menuItems = [
    {id : 1, label: "Lecciones", icon: <BiBookBookmark />, link: "/lecciones"},
    {id : 2, label: "Perfil", icon: <CgProfile />, link: "/perfil"},
    {id : 3, label: "Ajustes", icon: <FiSettings />, link: "/ajustes"},
]

export function Sidebar() {
    const [active, setActive] = useState(false);

    const Lecciones = useCallback(async () => {
        try {
            router.replace('/lecciones');
        } catch (error) {
            console.log(error);
        }}, []);

    const Perfil = useCallback(async () => {
        try {
            router.replace('/perfil');
        } catch (error) {
            console.log(error);
        }}, []);

    const Ajustes = useCallback(async () => {
        try {
            router.replace('/ajustes');
        } catch (error) {
            console.log(error);
        }}, []);

        const handleClick = () => {
            router.replace('/lecciones');
            setActive(!active);
        };

        const router = useRouter()

        const activeMenu = useMemo(() => menuItems.find(menu => menu.link === router.pathname), [router.pathname])

        // const getNavItemClasses = (menu) => {
        //     return classNames("flex items-center cursor-pointer hover:bg-[#d71414]", {
        //         ["bg-[#f71414]"]: activeMenu.id === menu.id
        //     })
        // }

    return(
        <div className="w-1/5 h-full p-6 mx-2 font-Lexend font-bold flex flex-col gap-0">
            <h1 className="font-bold text-6xl flex justify-center">
                HandsOn
            </h1>
            <img className="flex object-center rounded-full w-[60%] ml-20 mt-3 mb-2" src="/images/ppuser.jpg"></img>
            <h2 className="flex justify-center text-3xl">Iso</h2>
            <div className="flex flex-col justify-center text-lg">
                {menuItems.map(({ icon: Icon, ...menu}) => {
                    //const classes = getNavItemClasses(menu);

                    return (
                            <button className=" flex flex-row text-left text-3xl hover:bg-[#F5F5F5] rounded-3xl p-6 px-6 gap-1 mt-2 align-middle">
                                {menu.label}
                            </button>
                    )
                })}
                {/* <button id="lecciones" className="h-18 flex flex-row text-left hover:bg-[#F5F5F5] rounded-3xl p-4 px-6 gap-1 mt-2"
                    onClick={handleClick}
                    style={{ backgroundColor: active ? "green" : "white" }}>
                <BiBookBookmark size={27}/>
                    Lecciones
                </button>
                <button className="h-18 flex flex-row text-left hover:bg-[#F5F5F5] rounded-3xl p-4 px-6 gap-1"
                    onClick={Perfil}>
                    <CgProfile size={27}/> 
                    Perfil
                </button>
                <button className="h-18 flex flex-row text-left hover:bg-[#F5F5F5] rounded-3xl p-4 px-6 gap-1"
                    onClick={Lecciones}>
                    <FiSettings size={27}/>
                    Ajustes
                </button> */}
                <div className="flex flex-row justify-center mt-96 pt-48 gap-1" onClick={() => signOut({redirect: true, callbackUrl: '/auth'})}>
                    <HiOutlineLogout size={35} className="cursor-pointer rotate-180"/>
                    <p className="cursor-pointer text-2xl">Cerrar Sesión</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
