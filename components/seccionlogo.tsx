import Image from "next/image";
import logo from "../public/images/manitas.png";

export default function Seccionlogo() {
  return (
    <div className="font-Lexend py-6 animate-fade-in-down">
      <div className="flex flex-row rounded-lg bg-gray-50 mx-3">
        <Image
          src={logo}
            width={700}
            height={700}
          alt="Logo.png"
        />
        <div className="flex flex-col align-middle my-40 justify-center">
        <h1 className="flex font-bold justify-center text-9xl my-12">HandsOn</h1>
        <h1 className="
            p-3
            text-center 
            flex 
            font-bold 
            text-3xl 
            align-middle">¡Abre tus manos y habla con el corazón: aprende lengua de señas con nuestra app!</h1>
        </div>
      </div>
    </div>
  );
}
