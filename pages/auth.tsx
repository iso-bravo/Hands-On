import { useCallback, useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import axios from "axios";

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [lastName, setLastName] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password,
                lastName,
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password, lastName]);

    return(
        <div className="absolute bg-[#F5F5F5] rounded-3xl w-[500px] h-[570px] 
            left-36 top-[55px] p-12">
            <div className="font-Lexend font-bold text-4xl m-3">
                {variant === 'login' ?  'Registro' : 'Iniciar Sesión'}
            </div>
            <div className="flex flex-col gap-4 my-5">
                {variant === 'login' && (
                    <div className="flex flex-row gap-4">
                        <input type="text" className="font-Lexend px-4 py-2 h-14
                        bg-white placeholder-[#8A8A8A] focus:outline-none block w-1/2
                            rounded-2xl text-lg focus:ring-1" placeholder="Nombre"

                            onChange={(ev) => setName(ev.target.value)}
                            id="name"
                            value={name}
                        />
                        <input type="text" className="font-Lexend px-4 py-2
                            bg-white placeholder-[#8A8A8A] focus:outline-none block w-1/2 
                            rounded-2xl sm:text-lg focus:ring-1" placeholder="Apellido"

                            onChange={(ev) => setLastName(ev.target.value)}
                            id="lastName"
                            value={lastName}
                        />
                    </div>
                )}
                <input className="font-Lexend px-4 py-2 h-14 w-full
                    bg-white placeholder-[#8A8A8A] focus:outline-none block 
                    rounded-2xl text-lg focus:ring-1" placeholder="Correo"

                    onChange={(ev) => setEmail(ev.target.value)}
                    id="email"
                    type="email"
                    value={email}
                />
                <input className="font-Lexend px-4 py-2 h-14 w-full
                    bg-white placeholder-[#8A8A8A] focus:outline-none block 
                    rounded-2xl text-lg focus:ring-1" placeholder="Contraseña"

                    onChange={(ev) => setPassword(ev.target.value)}
                    id="password"
                    type="password"
                    value={password}
                />
                <button onClick={register} className="bg-[#C0EEE4] font-Lexend rounded-2xl h-14
                    text-2xl hover:bg-[#C9F1E8]">
                        {variant === 'login' ?  'Registrar' : 'Iniciar Sesión'}
                </button>
            </div>
            <div className="flex flex-col items-center justify-center gap-4">
                <button className="bg-white p-3 rounded-full h-14 w-14 flex items-center
                    justify-center cursor-pointer hover:opacity-80 transition">
                        <FcGoogle size={50}/>
                </button>
                <p className="justify-center">
                {variant === 'login' ?  'Ya tienes cuenta? ' : 'No tienes cuenta? '}
                <span onClick={toggleVariant} className="text-[#4171CF] 
                    hover:underline cursor-pointer">
                        {variant === 'login' ?  'Inicia Sesión' : 'Regístrate'}
                </span>
                </p>
            </div>
        </div>
    );
}

export default Auth;