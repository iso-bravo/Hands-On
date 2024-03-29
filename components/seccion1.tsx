import router from "next/router";
import { useCallback } from "react";

export function Seccion1() {
  
  const Lecciones = useCallback(async () => {
    try {
        router.replace('/lecciones');
    } catch (error) {
        console.log(error);
    }}, []);

  return (
    <div className="relative h-full w-full bg-primary font-Lexend px-4 sm:px-8 md:px-16 pt-12 flex flex-col">
      <div className="w-full h-full flex flex-col mt-20">
        <h2
          className="
            w-full
            m-auto
            p-3
            text-center
            lg:text-4xl
            sm:text-2xl
            font-bold
            animate-fade-in-down 
            "
        >
          ¡Aprender Lenguaje de Señas Mexicanas nunca ha sido tan sencillo y
          divertido!
        </h2>
        <h1
          className="
            w-full
            m-auto
            p-3
            text-center
            justify-center
            lg:text-3xl
            sm:text-xl
            font-semibold
            text-gray-100
            animate-fade-in-down
            "
        >
          Empezar a jugar no toma más de 2 minutos, ¡Regístrate!
        </h1>
        <div className="flex justify-center items-center">
          <button
            className=" 
            bg-[#FD4E99]
            hover:bg-[#f976af]
            transition-all
            duration-200
            text-gray-50
            font-semibold 
            m-3
            p-3
            rounded-lg 
            shadow
            justify-center
            item-center
            animate-fade-in-down
            "

            onClick={Lecciones}
          >
            ¡Empieza Ya!
          </button>
        </div>
          <div className='flex flex-col animate-fade-in-down'>
            <img className="object-contain h-96 w-full sm:w-1/2 md:w-1/3 lg:w-1/2 xl:w-1/3 2xl:w-1/4 mx-auto" src="/images/mi.png" alt="mi" />
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
