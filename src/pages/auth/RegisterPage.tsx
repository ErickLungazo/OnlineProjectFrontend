import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Register from "@/components/Register";

const RegisterPage = () => {
  return (
    <section className="grid items-center justify-center max-w-3xl min-h-screen grid-cols-1 gap-3 p-3 mx-auto">
      <article className="">
        <Card>
          <CardHeader>
            <CardTitle>Welcome </CardTitle>
            <CardDescription>Create an Account</CardDescription>
          </CardHeader>
          <CardContent>
            <Register />
          </CardContent>
        </Card>
      </article>
    </section>
  );
};

export default RegisterPage;
