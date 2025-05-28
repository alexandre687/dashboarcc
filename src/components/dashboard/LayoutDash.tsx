import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import HeaderDash from "./HeaderDash";

const LayoutDashboard: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderDash userName={""} />
      <main className="flex-grow pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LayoutDashboard;
