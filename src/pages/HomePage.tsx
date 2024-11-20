import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <section className="max-w-4xl mx-auto flex flex-col gap-3 items-center justify-center min-h-[80vh] p-3">
      <div className="flex flex-col max-w-2xl gap-5 mx-auto">
        <span className="w-full text-4xl font-semibold text-center md:text-6xl">
          Welcome to Acadiverse
        </span>
        <p className="w-full text-sm text-center md:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nisi
          atque accusamus, autem tempore et ratione ipsa velit delectus
          doloremque amet, nulla voluptatibus perferendis perspiciatis eius.
          Facere delectus repellat similique!
        </p>
        <div className="flex items-center justify-center gap-3">
          <Link to={"/register"}>
            <Button variant={"outline"}>Register</Button>
          </Link>
          <Link to={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
