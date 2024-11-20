import React from "react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const SocialsLogin = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-3">
      <div className="grid items-center w-full grid-cols-3 gap-2 ">
        <Separator className="" />

        <span className="text-xs text-center uppercase text-muted-foreground">
          Or continue with
        </span>
        <Separator className="" />
      </div>

      <div className="grid w-full grid-cols-2 gap-2">
        <Button variant={"outline"}>
          <FaFacebook className="w-4 h-4" />
          Facebook
        </Button>
        <Button variant={"outline"}>
          <FaGoogle className="w-4 h-4" />
          Google
        </Button>
      </div>
    </div>
  );
};

export default SocialsLogin;
