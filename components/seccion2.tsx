import { IoChatbubblesOutline } from 'react-icons/io5';
export function Seccion2() {
  return (
    <div className="font-Lexend pt-52">
      <div className="flex flex-col justify-center px-20">
        <h2
          className="
                    text-5xl
                    font-bold
                "
        >
          ¿Por qué usar HandsOn?
        </h2>
      
      <div className=" grid grid-cols-3 gap-3 space-x-48 pt-36 pb-52">
        <div className=" flex flex-col justify-center items-center">
            <div className="bg-gray-400 rotate-45 rounded-3xl hover:rotate-[-45] duration-700 p-16 opacity-50">pipi</div>
            <div className="absolute bg-primary rounded-3xl">
              <IoChatbubblesOutline className='h-36 w-36 m-4'/>
            </div>

        </div>
        <div className="bg-blue-500">caca</div>
        <div className="bg-green-500">pis</div>
        
      </div>
      </div>
    </div>
  );
}

export default Seccion2;
