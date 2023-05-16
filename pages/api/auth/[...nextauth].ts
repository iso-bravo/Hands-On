import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import client from "../../../lib/prismadb";
import { compare } from "bcrypt";

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
                    throw new Error('Email y contrasena necesarios');
                }
                
                const user = await client.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                });

                if(!user || !user.hashedPassword){
                    throw new Error('Email no existe');
                }

                const isCorrectPassword = await compare(
                    credentials.password,
                    user.hashedPassword
                );

                if(!isCorrectPassword) {
                    throw new Error('Contrasena Incorrecta');
                }

                return {id: `${user.id}`, email: user.email, name: user.name + " " + user.lastName}
                    //return user
            }
        })
    ],

    pages: {
        signIn: '/auth',
    },

    debug: process.env.NODE_ENV ==='development',
    session: {
        strategy: 'jwt',
    },
    jwt: {
        secret: process.env.NEXTAUTH_JWT_SECRET,
    },
    secret: process.env.NEXTAUTH_SECRET,
});