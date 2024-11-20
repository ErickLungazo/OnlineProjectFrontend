import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Login from "@/components/Login";

import Image from "@/assets/login.svg";
import SocialsLogin from "@/components/SocialsLogin";

const LoginPage = () => {
  return (
    <section className="grid items-center justify-center max-w-4xl min-h-screen grid-cols-1 gap-3 p-3 mx-auto md:grid-cols-2">
      <article className="">
        <Card>
          <CardHeader>
            <CardTitle>Welcome </CardTitle>
            <CardDescription>Login to your Account</CardDescription>
          </CardHeader>
          <CardContent>
            <Login />
          </CardContent>
          <CardFooter>
            <SocialsLogin />
          </CardFooter>
        </Card>
      </article>
      <article className="">
        <img src={Image} alt="" className="max-h-[400px] w-full" />
      </article>
    </section>
  );
};

export default LoginPage;
