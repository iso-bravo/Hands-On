import { FondoPerfil } from "../components/fondoPerfil";
import { Sidebar } from "../components/sidebar";

const Perfil = () => {
    return(
        <div className="flex flex-row py-6 h-[680px]">
            <Sidebar/>
            <FondoPerfil/>
        </div>
    )
}

export default Perfil;