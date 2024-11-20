import React from "react";
import { Button } from "@/components/ui/button";
import { Link, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <section className="bg">
      <nav className="fixed flex items-center justify-between max-w-5xl gap-3 px-3 py-3 mx-auto bg-white border border-b shadow rounded-xl top-2 left-2 right-2">
        <Link to="/" className="text-lg font-semibold">
          Acadiverse
        </Link>

        <ul className="flex items-center gap-2">
          <li className="">
            <Link to="/login">
              {" "}
              <Button>Login</Button>
            </Link>
          </li>{" "}
          <li className="">
            <Link to={"/register"}>
              <Button variant={"outline"}>Register</Button>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="pt-20 border">
        <Outlet />
      </main>
    </section>
  );
};

export default MainLayout;
