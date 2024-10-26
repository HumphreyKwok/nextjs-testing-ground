import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials) {
        let user = null;
        user = {
          id: "1011",
          name: "hinzik",
          email: "hinzik@hinzik.dev",
        };

        if (!user) {
          console.log("Invalid Credentials");
          return null;
        }

        return user;
      },
    }),
  ],
});
