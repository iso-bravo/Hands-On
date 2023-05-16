import { BsArrowLeft } from "react-icons/bs";

export function FondoLecciones() {
  return (
    <div className="w-full bg-[#F5F5F5] rounded-3xl p-6 mr-6 ">
      <div className="flex flex-col">
        <BsArrowLeft />
        <p className="font-bold text-3xl">¡Es hora de aprender Iso!</p>
        <div className="flex flex-col">
          <div>azul</div>
          <div>Rosa</div>
          <div className="bg-amarillo">Amarillo</div>
        </div>
      </div>
    </div>
  );
}

export default FondoLecciones;
