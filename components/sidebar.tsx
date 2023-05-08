export function Sidebar() {
    return(
        <div className="w-1/5 h-full p-6 mx-6 font-Lexend font-bold">
            <h1 className="font-bold text-4xl">
                HandsOn
            </h1>
            <img className="rounded-full scale-75" src="/images/ppuser.jpg" alt="ppuser"></img>
            <h2 className="flex justify-center text-2xl">Iso</h2>
            <div className="flex flex-col justify-center">
                <button className="text-left bg-[#C0EEE4] rounded-2xl p-2 text-xl opacity-75

">Lecciones</button>
                <button className="">Perfil</button>
                <button className="">Ajustes</button>
            </div>
        </div>
    )
}

export default Sidebar