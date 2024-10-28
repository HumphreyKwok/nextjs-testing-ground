import * as React from "react";

import { auth, signOut } from "@/authConfig";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const NextAuth = async () => {
  const session = await auth();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h2 className="text-3xl">Next Auth V5.</h2>

      {!session && (
        <span>
          Try to{" "}
          <span className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:underline">
            <Link href={"/auth/sign-in"}>Login</Link>
          </span>{" "}
          as{" "}
          <abbr
            title="username:user, password:83218493"
            className="hover:cursor-pointer"
          >
            normal user{" "}
          </abbr>
          or{" "}
          <abbr
            title="username:admin, password:94831942"
            className="hover:cursor-pointer"
          >
            administrators{" "}
          </abbr>
        </span>
      )}

      {session?.user && (
        <div>
          <Card className="max-w-md">
            <CardHeader>
              <Image
                className="rounded-lg"
                src="/images/dashboard.jpg"
                alt="img"
                width={550}
                height={428}
              />
            </CardHeader>
            <CardContent>
              <div className="flex justify-between">
                <CardTitle className="mb-2 text-2xl font-bold">
                  Welcome, user!
                </CardTitle>

                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <Button>Sign-out</Button>
                </form>
              </div>
              <p className="text-muted-foreground">
                You are logged-in, try to sign-out with the sign-out button
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default NextAuth;
