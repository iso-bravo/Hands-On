import { IoChatbubblesOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
import { SlScreenSmartphone } from "react-icons/sl";

export function Seccion2() {
  return (
    <div className="font-Lexend py-20">
      <div className="flex flex-col justify-center px-20">
        <h2
          className="
                    text-5xl
                    font-bold
                "
        >
          ¿Por qué usar HandsOn?
        </h2>

        <div className="flex flex-row px-36 justify-center py-24 space-x-64">
          <div>
            <div className=" flex flex-row justify-center items-center">
              <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30 scale-125"></div>
              <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
                <IoChatbubblesOutline className="h-36 w-36 m-4" />
              </div>
            </div>
            <div className="flex flex-col justify-start text-3xl font-bold pt-16 pb-6 ">
              Inclusión
            </div>
            <div className="flex flex-col justify-start text-lg w-80 text-left">
              Contamos con el honor de poder crear una gran comunidad en la que
              florezca una convivencia amena entre oyentes y sordos.
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-center items-center">
              <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30 scale-125"></div>
              <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
                <TfiWallet className="h-36 w-36 m-4" />
              </div>
            </div>
            <div className="flex flex-col justify-start text-3xl font-bold pt-16 pb-6 ">
              Gratuito
            </div>
            <div className="flex flex-col justify-start text-lg w-80 text-left">
              Nada mejor que aprender un lenguaje completamente nuevo que te
              será de mucha utilidad de forma completamente gratuita!
            </div>
          </div>

          <div>
            <div className="flex flex-row justify-center items-center">
              <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30 scale-125"></div>
              <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
                <SlScreenSmartphone className="h-36 w-36 m-4" />
              </div>
            </div>
            <div className="flex flex-col justify-start text-3xl font-bold pt-16 pb-6   ">
              Interactividad
            </div>
            <div className="flex flex-col justify-start text-lg w-80 text-left">
              Nuestra app ayuda a personas oyentes a aprender lenguaje de señas
              de una manera muy sencilla y además divertida.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seccion2;
