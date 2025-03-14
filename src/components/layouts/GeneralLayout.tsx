import React, { FC } from "react";
import Navbar from "../comon/UI/Navbar";

interface Props {
  children: React.ReactNode;
}

const GeneralLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex justify-center bg-background text-amber-50">
      <div className="w-full max-w-[1300px] ">
        <Navbar />
        <div className="">{children}</div>
      </div>
    </div>
  );
};

export default GeneralLayout;
