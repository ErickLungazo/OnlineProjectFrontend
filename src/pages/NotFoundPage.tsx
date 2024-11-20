import React from "react";
import Image from "@/assets/404.svg";

const NotFoundPage = () => {
  return (
    <section className="grid items-center justify-center max-w-4xl min-h-screen grid-cols-1 gap-3 p-3 mx-auto">
      <article className="">
        <img src={Image} alt="" className="max-h-[400px] w-full" />
      </article>
    </section>
  );
};

export default NotFoundPage;
