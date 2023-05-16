import { BsArrowLeft } from "react-icons/bs";
import { FcCheckmark } from "react-icons/fc";

export function FondoLecciones() {
  return (
    <div className="w-full h-full bg-[#F5F5F5] rounded-3xl p-6 mr-6 font-Lexend">
      <div className="flex flex-col cursor-pointer">
        <BsArrowLeft size={50}/>
        <div className="p-8">
        <p className="font-bold text-5xl mb-14">¡Es hora de aprender Iso!</p>
        <div className="flex flex-col gap-5">
        <div className="flex flex-row gap-4">
            <FcCheckmark className=" bg-[#cff7c4] rounded-full gap-5 w-14 h-14 mt-10"/>
            <div className="bg-[#89e67d] rounded-3xl font-bold w-full px-12 py-10 text-3xl mx-3 h-32 cursor-pointer hover:bg-[#9aeb8f]">Abecedario</div>
          </div>
          <div className="flex flex-row gap-4">
          <FcCheckmark className=" bg-[#cff7c4] rounded-full gap-5 w-14 h-14 mt-10"/>
            <div className="bg-[#89DAEC] rounded-2xl font-bold w-full px-12 py-10 text-3xl mx-3 h-32 cursor-pointer hover:bg-[#99e0f0]">Números</div>
          </div>
          <div className="flex flex-row gap-4">
          <FcCheckmark className=" bg-[#cff7c4] rounded-full gap-5 w-14 h-14 mt-10"/>
            <div className="bg-[#FF78B2] rounded-2xl font-bold w-full px-12 py-10 text-3xl mx-3 h-32 cursor-pointer hover:bg-[#ff82b8]">Saludos</div>
          </div>
          <div className="flex flex-row gap-4">
            <div className=" bg-gray-300 rounded-full gap-5 w-14 h-14 mt-10"></div>
            <div className="bg-[#FFF97A] rounded-2xl font-bold w-full px-12 py-10 text-3xl mx-3 h-32 cursor-pointer hover:bg-[#f4ee77]">Familia</div>
          </div>
          <div className="flex flex-row gap-4">
            <div className=" bg-gray-300 rounded-full gap-5 w-14 h-14 mt-10"></div>
            <div className="bg-[#787aff] rounded-2xl font-bold w-full px-12 py-10 text-3xl mx-3 h-32 cursor-pointer hover:bg-[#8587fd]">Animales</div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default FondoLecciones;
