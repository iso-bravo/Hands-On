import Seccion1 from "../components/seccion1"
import Seccion2 from "../components/seccion2"
import Seccion3 from "../components/seccion3"
import Footer from "../components/footer"
import Navbar from "../components/navbar"
export default function Home() {
  return (
    <div>
      <Navbar/>
      <Seccion1/>
      <Seccion2/>
      <Seccion3/>
      <Footer/>
    </div>
    
  )
}
