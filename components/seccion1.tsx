export function Seccion1() {
  return (
    <div className="bg-primary font-Lexend px-16 pt-12 flex flex-col">
      <div className="flex flex-col">
        <h2
          className="
            w-[750px]
            m-auto
            p-3
            text-center
            lg:text-3xl
            sm:text-2xl
            font-bold
            "
        >
          ¡Aprender Lenguaje de Señas Mexicanas nunca ha sido tan sencillo y
          divertido!
        </h2>
        <h1
          className="
            w-[400px]
            m-auto
            p-3
            text-center
            justify-center
            lg:text-2xl
            sm:text-xl
            font-semibold
            text-gray-400
            "
        >
          Empezar a jugar no toma más de 2 minutos, ¡Regístrate!
        </h1>
        <div className="flex justify-center items-center">
          <button
            className=" 
            bg-secondary
            hover:bg-hoversecondary
            text-gray-50
            font-semibold 
            m-3
            p-3
            rounded-lg 
            shadow
            justify-center
            item-center
            "
          >
            ¡Empieza Ya!
          </button>
        </div>
          <div className='flex flex-col'>
            <img className="object-contain h-96 w-50" src="/images/mi.png" alt="mi" />
        </div>
      </div>
    </div>
  );
}

export default Seccion1;
