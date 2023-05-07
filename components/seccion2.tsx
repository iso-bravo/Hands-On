import { IoChatbubblesOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
import { SlScreenSmartphone } from "react-icons/sl";

export function Seccion2() {
  return (
    <div className="font-Lexend py-36">
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
          <div className=" flex flex-row justify-center items-center">
            <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30">
              chat
            </div>
            <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
              <IoChatbubblesOutline className="h-36 w-36 m-4" />
            </div>
          </div>

          <div className="flex flex-row justify-center items-center">
            <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30">
              chat
            </div>
            <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
              <TfiWallet className="h-36 w-36 m-4" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center">
            <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30">
              chat
            </div>
            <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
              <SlScreenSmartphone className="h-36 w-36 m-4" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-start align-center">
        <div>Inclusión</div>
      </div>
      <div>Gratuito</div>
      <div>Interactividad</div>
    </div>
  );
}

export default Seccion2;
