import { useCallback, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import Manitas from "../public/images/manitas.png";

const Auth = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");

  const [variant, setVariant] = useState("login");
  const toggleVariant = useCallback(() => {
    setVariant((currentVariant) =>
      currentVariant === "register" ? "login" : "register"
    );
  }, []);

  const login = useCallback(async () => {
    try {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/lecciones",
      });

      router.push("/lecciones");
    } catch (error) {
      console.log(error);
    }
  }, [email, password, router]);

  const register = useCallback(async () => {
    try {
      await axios.post("/api/register", {
        email,
        name,
        password,
        lastName,
      });

      login();
    } catch (error) {
      console.log(error);
    }
  }, [email, name, password, lastName]);

  return (
    <div>
      <div
        className="absolute bg-[#F5F5F5] rounded-3xl w-[700px] h-[770px] 
            left-36 top-[55px] p-16 my-56 mx-96"
      >
        <div className="font-Lexend font-bold text-6xl m-3 mb-6">
          {variant === "register" ? "Registro" : "Iniciar Sesión"}
        </div>
        <div className="flex flex-col gap-5 my-5">
          {variant === "register" && (
            <div className="flex flex-row gap-4">
              <input
                type="text"
                className="font-Lexend px-4 py-2 h-20
                        bg-white placeholder-[#8A8A8A] focus:outline-none block w-1/2
                            rounded-2xl text-2xl focus:ring-1"
                placeholder="Nombre"
                onChange={(ev) => setName(ev.target.value)}
                id="name"
                value={name}
              />
              <input
                type="text"
                className="font-Lexend px-4 py-2
                            bg-white placeholder-[#8A8A8A] focus:outline-none block w-1/2 
                            rounded-2xl text-2xl focus:ring-1"
                placeholder="Apellido"
                onChange={(ev) => setLastName(ev.target.value)}
                id="lastName"
                value={lastName}
              />
            </div>
          )}
          <input
            className="font-Lexend px-4 py-2 h-20 w-full
                    bg-white placeholder-[#8A8A8A] focus:outline-none block 
                    rounded-3xl text-2xl focus:ring-1"
            placeholder="Correo"
            onChange={(ev) => setEmail(ev.target.value)}
            id="email"
            type="email"
            value={email}
          />
          <input
            className="font-Lexend px-4 py-2 h-20 w-full
                    bg-white placeholder-[#8A8A8A] focus:outline-none block 
                    rounded-3xl text-2xl focus:ring-1"
            placeholder="Contraseña"
            onChange={(ev) => setPassword(ev.target.value)}
            id="password"
            type="password"
            value={password}
          />
          {/* onClick={variant === 'register' ? register : register} */}
          <button
            onClick={() => (variant === "register" ? register() : login())}
            className="bg-[#25C8ED] font-Lexend rounded-3xl h-20
                    text-4xl hover:bg-[#59d6f2]"
          >
            {variant === "register" ? "Registrar" : "Iniciar Sesión"}
          </button>
        </div>
        <div className="flex flex-col items-center justify-center gap-5">
          <button
            className="bg-white p-3 rounded-full h-14 w-14 flex items-center
                    justify-center cursor-pointer hover:opacity-80 transition"
          >
            <FcGoogle size={50} />
          </button>
          <p className="justify-center text-xl">
            {variant === "register"
              ? "Ya tienes cuenta? "
              : "No tienes cuenta? "}
            <span
              onClick={toggleVariant}
              className="text-[#4171CF] 
                    hover:underline cursor-pointer"
            >
              {variant === "register" ? "Inicia Sesión" : "Regístrate"}
            </span>
          </p>
        </div>
      </div>
      <div className="ml-[73rem] mt-[12rem]">
        <img className="w-[70%]" src="/images/manitas.png"></img>
      </div>
    </div>
  );
};

export default Auth;
