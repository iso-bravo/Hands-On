import { IoChatbubblesOutline } from "react-icons/io5";
import { TfiWallet } from "react-icons/tfi";
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

        <div className=" grid grid-cols-3 gap-3 space-x-48 px-36 py-24 border border-black">
          <div className=" flex flex-col justify-center items-center">
            <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30 ">
              chat
            </div>
            <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
              <IoChatbubblesOutline className="h-36 w-36 m-4" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 space-x-48">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-gray-400 rotate-45 rounded-3xl p-18 opacity-30">
                chat
              </div>
              <div className="absolute bg-primary rounded-3xl hover:scale-125 transition-all duration-400">
                <TfiWallet className="h-36 w-36 m-4" />
              </div>
            </div>
          </div>

          <div className="bg-green-500">pis</div>
        </div>
      </div>
    </div>
  );
}

export default Seccion2;
