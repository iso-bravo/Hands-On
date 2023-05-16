import { BsArrowLeft } from "react-icons/bs";


export function FondoPerfil() {
    return(
        <div className="w-full bg-[#F5F5F5] rounded-3xl p-6 mr-6 font-Lexend">
            <div className="flex flex-row gap-[700px]">
                <BsArrowLeft size={30} className=""/>
            </div>
            <div className="py-6 px-10">
            <div className="flex flex-row gap-[700px]">
                <h1 className="text-3xl font-semibold pt-2">Perfil</h1>
                <button className="bg-[#25c8ed] text-[#FBFBFB] font-medium text-2xl px-6 py-2 rounded-2xl">Editar</button>
            </div>
                <div className="flex my-5 gap-2">
                    <div className="flex flex-col gap-4 w-2/3">
                        <div>
                        <div className="flex flex-row gap-x-60 text-xl pb-2">
                            <h2 className="pl-3">Nombre</h2>
                            <h2>Apellido</h2>
                        </div>
                        <div className="flex flex-row gap-4">
                            <input type="text" className="font-Lexend px-4 py-2 h-14
                            bg-white placeholder-[#8A8A8A] focus:outline-none block w-1/2
                                rounded-2xl text-lg focus:ring-1"
                            />
                            <input type="text" className="font-Lexend px-4 py-2
                                bg-white placeholder-[#8A8A8A] focus:outline-none block w-1/2 
                                rounded-2xl sm:text-lg focus:ring-1" 
                            />
                        </div>
                        </div>
                        <div>
                        <h2 className="text-xl pl-3 py-2">Contraseña</h2>
                        <input className="font-Lexend px-4 py-2 h-14 w-full
                        bg-white placeholder-[#8A8A8A] focus:outline-none block 
                            rounded-2xl text-lg focus:ring-1"
                        />
                        </div>
                    </div>
                    <div className="flex w-1/3 flex-col pl-12">
                        <h2 className="text-xl justify-center">Foto de Perfil</h2>
                        <img className="rounded-full w-[70%]" src="/images/ppuser.jpg"></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FondoPerfil;