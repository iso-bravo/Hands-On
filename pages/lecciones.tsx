import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Sidebar from "../components/sidebar";
import FondoLecciones from "../components/fondoLecciones";

export default function Lecciones(){
    const {data: usuario, status} = useSession()
    const router = useRouter();

    useEffect(() => {
    if(status === 'unauthenticated') router.replace('/auth')
    }, [status])

    if(status === 'loading') return <>Loading...</>
    if(status === 'unauthenticated') return <></>

    console.log(usuario)
    return (
        <div className="flex flex-row py-6 h-screen w-full">
            <Sidebar/>
            <FondoLecciones/>
        </div>
    )
}