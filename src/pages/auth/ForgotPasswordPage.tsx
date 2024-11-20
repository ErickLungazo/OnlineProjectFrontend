import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "@/assets/forgot.svg";
import SocialsLogin from "@/components/SocialsLogin";
import ForgotPassword from "@/components/ForgotPassword";

const ForgotPasswordPage = () => {
  return (
    <section className="grid items-center justify-center max-w-4xl min-h-screen grid-cols-1 gap-3 p-3 mx-auto md:grid-cols-2">
      <article className="">
        <Card>
          <CardHeader>
            <CardTitle>Forgot Password </CardTitle>
            <CardDescription>Enter your email to reset</CardDescription>
          </CardHeader>
          <CardContent>
            <ForgotPassword />
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

export default ForgotPasswordPage;
