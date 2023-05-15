import Seccion1 from "../components/seccion1"
import Seccion2 from "../components/seccion2"
import Seccion3 from "../components/seccion3"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
import Seccionlogo from "../components/seccionlogo"
export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navbar/>
      <Seccion1/>
      <Seccionlogo/>
      <Seccion2/>
      <Seccion3/>
      <Footer/>
    </div>
    
  )
}
