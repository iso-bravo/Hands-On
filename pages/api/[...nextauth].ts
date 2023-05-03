import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import client from "../../lib/prismadb";

export default NextAuth({
    providers: [
        Credentials({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text',
                },
                password: {
                    label: 'Password',
                    type: 'password',
                }
            },
            async authorize(credentials){
                if(!credentials?.email || !credentials?.password){
                    throw new Error('Email y contrasena necessarios');
                }
                
                const user = await client.usuario.findUnique({
                    where: {
                        correo: credentials.email
                    }
                });

                if(!user || !user.contrasena){
                    throw new Error('Email no existe');
                }

                    // const isCorrectPassword = await compare(
                    //     credentials?.password,
                    //     user.contrasena
                    // );

                    // if(!isCorrectPassword) {
                    //     throw new Error('Incorrect password');
                    // }

                    return {id: `${user.id}`, email: user.correo, name: user.nombre + " " + user.apellido_paterno}
            }
        })
    ]
})