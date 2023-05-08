import Sidebar from "../components/sidebar";
import Fondo from "../components/fondo";

export default function MainFondo(){
    return (
        <div className="flex flex-row py-6 h-[680px]">
            <Sidebar/>
            <Fondo/>
        </div>
    )
}